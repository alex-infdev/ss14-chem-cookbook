import requests
import yaml
import json
from bs4 import BeautifulSoup
import re
import os

REPO_OWNER = "space-wizards"
REPO_NAME = "space-station-14"
BRANCH = "master"
WIKI_FILE = "wiki_data.htm" 

TARGET_PATHS = [
    "Resources/Prototypes/Reagents",
    "Resources/Prototypes/Recipes/Reactions"
]
LOCALE_PATH = "Resources/Locale/en-US/reagents"
OUTPUT_FILE = "chem_data.json"

def custom_tag_constructor(loader, tag_suffix, node):
    if isinstance(node, yaml.ScalarNode): return loader.construct_scalar(node)
    elif isinstance(node, yaml.SequenceNode): return loader.construct_sequence(node)
    elif isinstance(node, yaml.MappingNode): return loader.construct_mapping(node)
yaml.add_multi_constructor('!', custom_tag_constructor, Loader=yaml.SafeLoader)

def fetch_file_list():
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/git/trees/{BRANCH}?recursive=1"
    r = requests.get(url); r.raise_for_status()
    return r.json().get("tree", [])

def fetch_raw_content(path):
    url = f"https://raw.githubusercontent.com/{REPO_OWNER}/{REPO_NAME}/{BRANCH}/{path}"
    r = requests.get(url)
    return r.text if r.status_code == 200 else None

def scrape_local_wiki():
    print(f"Reading local wiki file: {WIKI_FILE}...")
    if not os.path.exists(WIKI_FILE):
        print("Warning: Wiki file not found. Skipping wiki data.")
        return {}

    try:
        with open(WIKI_FILE, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
        
        wiki_db = {}
        for table in soup.find_all('table'):
            rows = table.find_all('tr')
            for row in rows:
                cols = row.find_all(['td', 'th'])
                if len(cols) >= 3:
                    name = cols[0].get_text().strip()
                    name = re.sub(r'\s+', ' ', name)
                    texts = [c.get_text().strip() for c in cols[1:]]
                    longest_text = max(texts, key=len) if texts else ""
                    wiki_db[name.lower()] = longest_text
        
        print(f"Parsed info for {len(wiki_db)} reagents.")
        return wiki_db
    except Exception as e:
        print(f"Wiki parse failed: {e}")
        return {}

def parse_fluent(text):
    translations = {}
    for line in text.splitlines():
        if "=" in line and not line.strip().startswith("#"):
            parts = line.split("=", 1)
            translations[parts[0].strip()] = parts[1].strip()
    return translations

def clean_name(text, loc_db):
    if text in loc_db: text = loc_db[text]
    if text.startswith("reagent-name-") or text.startswith("reagent-desc-"):
        text = text.replace("reagent-name-", "").replace("reagent-desc-", "").replace("-", " ")
    return text.title()

def main():
    tree = fetch_file_list()
    
    loc_files = [i["path"] for i in tree if i["path"].startswith(LOCALE_PATH) and i["path"].endswith(".ftl")]
    loc_db = {}
    for path in loc_files:
        txt = fetch_raw_content(path)
        if txt: loc_db.update(parse_fluent(txt))
    
    wiki_db = scrape_local_wiki()

    target_files = [i["path"] for i in tree if i["type"] == "blob" and (i["path"].endswith(".yml") or i["path"].endswith(".yaml")) and any(i["path"].startswith(p) for p in TARGET_PATHS)]

    reagents_db = {}
    recipes = []

    for i, file_path in enumerate(target_files):
        print(f"[{i+1}/{len(target_files)}] {file_path}")
        raw_yaml = fetch_raw_content(file_path)
        if not raw_yaml: continue
        try: data = yaml.safe_load(raw_yaml)
        except: continue
        
        entries = data if isinstance(data, list) else [data]

        for entry in entries:
            if not isinstance(entry, dict): continue
            
            if entry.get("type") == "reagent" and "id" in entry:
                r_id = entry["id"]
                name = clean_name(entry.get("name", r_id), loc_db)
                wiki_info = wiki_db.get(name.lower(), "")
                
                metabolisms = entry.get("metabolisms", {})
                overdose_val = None
                tags = []
                meta_stats = []

                if metabolisms:
                    for meta_type, meta_data in metabolisms.items():
                        if "overdose" in meta_data:
                            val = float(meta_data["overdose"])
                            if overdose_val is None or val < overdose_val:
                                overdose_val = val
                        
                        if meta_type == "Poison": tags.append("Toxin")
                        if meta_type == "Medicine": tags.append("Medicine")
                        if meta_type == "Narcotic": tags.append("Narcotic")

                        rate = meta_data.get("metabolismRate", 0.5)
                        effects_list = []
                        effects = meta_data.get("effects", [])
                        if effects:
                            for effect in effects:
                                if "damage" in effect:
                                    all_damage = {**effect["damage"].get("types", {}), **effect["damage"].get("groups", {})}
                                    for d_name, d_amount in all_damage.items():
                                        try:
                                            amt = float(d_amount)
                                            sign = "+" if amt > 0 else ""
                                            effects_list.append(f"{d_name}: {sign}{amt}")
                                        except: pass
                                
                                if "conditions" in effect and effect["conditions"]:
                                    for cond in effect["conditions"]:
                                        if "condition" in cond:
                                            effects_list.append(f"Condition: {cond['condition']}")
                                
                                if effect.get("id") == "SatiateThirst": effects_list.append(f"Hydration: {effect.get('factor', 0)}")
                                if effect.get("id") == "SatiateHunger": effects_list.append(f"Nutrition: {effect.get('factor', 0)}")
                                if effect.get("id") == "MovespeedModifier":
                                    walk = effect.get("walkSpeedModifier", 1)
                                    sprint = effect.get("sprintSpeedModifier", 1)
                                    effects_list.append(f"Speed: x{walk}/{sprint}")

                        if effects_list:
                            meta_stats.append({ "rate": rate, "type": meta_type, "effects": effects_list })

                reagents_db[r_id] = {
                    "name": name,
                    "desc": clean_name(entry.get("desc", ""), loc_db),
                    "wiki": wiki_info,
                    "color": entry.get("color", "#CCCCCC"),
                    "overdose": overdose_val,
                    "tags": list(set(tags)),
                    "meta_stats": meta_stats
                }

            elif entry.get("type") == "reaction" and "id" in entry:
                recipes.append(entry)

    final_recipes = []
    for entry in recipes:
        ingredients = []
        for r_id, r_data in entry.get("reactants", {}).items():
            amount = r_data.get("amount") if isinstance(r_data, dict) else r_data
            meta = reagents_db.get(r_id, {"name": r_id, "color": "#FFF"})
            ingredients.append({ "id": r_id, "name": meta["name"], "amount": amount, "color": meta["color"] })

        products = []
        for p_id, p_amount in entry.get("products", {}).items():
            default_meta = {"name": p_id, "color": "#FFF", "desc": "", "tags": [], "overdose": None, "meta_stats": [], "wiki": ""}
            meta = reagents_db.get(p_id, default_meta)
            products.append({
                "id": p_id,
                "name": meta["name"],
                "amount": p_amount,
                "color": meta["color"],
                "desc": meta["desc"],
                "wiki": meta["wiki"],
                "overdose": meta["overdose"],
                "tags": meta["tags"],
                "stats": meta["meta_stats"]
            })

        final_recipes.append({
            "id": entry["id"],
            "reactants": ingredients,
            "products": products,
            "conditions": {
                "minTemp": entry.get("minTemp"),
                "maxTemp": entry.get("maxTemp"),
                "requiredMixer": entry.get("requiredMixer")
            }
        })

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_recipes, f, indent=2)

if __name__ == "__main__":
    main()