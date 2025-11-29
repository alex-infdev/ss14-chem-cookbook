import requests
import yaml
import json

REPO_OWNER = "space-wizards"
REPO_NAME = "space-station-14"
BRANCH = "master"

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

def parse_fluent(text):
    translations = {}
    for line in text.splitlines():
        if "=" in line and not line.strip().startswith("#"):
            parts = line.split("=", 1)
            translations[parts[0].strip()] = parts[1].strip()
    return translations

def clean_name(text, loc_db):
    if text in loc_db: 
        return loc_db[text]
    if text.startswith("reagent-name-") or text.startswith("reagent-desc-"):
        text = text.replace("reagent-name-", "").replace("reagent-desc-", "").replace("-", " ")
    return text

def main():
    tree = fetch_file_list()
    
    loc_files = [i["path"] for i in tree if i["path"].startswith(LOCALE_PATH) and i["path"].endswith(".ftl")]
    loc_db = {}
    for path in loc_files:
        txt = fetch_raw_content(path)
        if txt: loc_db.update(parse_fluent(txt))
            
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
                
                metabolisms = entry.get("metabolisms", {})
                overdose_val = None
                tags = []
                damage_list = []
                heal_list = []

                if metabolisms:
                    for meta_type, meta_data in metabolisms.items():
                        if "overdose" in meta_data:
                            val = float(meta_data["overdose"])
                            if overdose_val is None or val < overdose_val:
                                overdose_val = val
                        
                        if meta_type == "Poison": tags.append("Toxin")
                        if meta_type == "Medicine": tags.append("Medicine")
                        if meta_type == "Narcotic": tags.append("Narcotic")

                        effects = meta_data.get("effects", [])
                        for effect in effects:
                            if "damage" in effect:
                                all_damage = {**effect["damage"].get("types", {}), **effect["damage"].get("groups", {})}
                                
                                for d_name, d_amount in all_damage.items():
                                    try:
                                        amount = float(d_amount)
                                        if amount < 0:
                                            heal_list.append(d_name)
                                        elif amount > 0:
                                            damage_list.append(d_name)
                                    except:
                                        pass

                reagents_db[r_id] = {
                    "name": clean_name(entry.get("name", r_id), loc_db),
                    "desc": clean_name(entry.get("desc", ""), loc_db),
                    "color": entry.get("color", "#CCCCCC"),
                    "overdose": overdose_val,
                    "tags": list(set(tags)),
                    "damage": list(set(damage_list)),
                    "heals": list(set(heal_list))
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
            default_meta = {"name": p_id, "color": "#FFF", "desc": "", "tags": [], "overdose": None, "damage": [], "heals": []}
            meta = reagents_db.get(p_id, default_meta)
            products.append({
                "id": p_id,
                "name": meta["name"],
                "amount": p_amount,
                "color": meta["color"],
                "desc": meta["desc"],
                "overdose": meta["overdose"],
                "tags": meta["tags"],
                "damage": meta["damage"],
                "heals": meta["heals"]
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