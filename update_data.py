import requests
import yaml
import json

def clean_name(text):
    if text.startswith("reagent-name-"):
        return text.replace("reagent-name-", "").replace("-", " ").title()
    return text.title()

def custom_tag_constructor(loader, tag_suffix, node):
    if isinstance(node, yaml.ScalarNode):
        return loader.construct_scalar(node)
    elif isinstance(node, yaml.SequenceNode):
        return loader.construct_sequence(node)
    elif isinstance(node, yaml.MappingNode):
        return loader.construct_mapping(node)

yaml.add_multi_constructor('!', custom_tag_constructor, Loader=yaml.SafeLoader)

REPO_OWNER = "space-wizards"
REPO_NAME = "space-station-14"
BRANCH = "master"

TARGET_PATHS = ["Resources/Prototypes/Reagents", "Resources/Prototypes/Recipes/Reactions"]
OUTPUT_FILE = "chem_data.json"

def fetch_file_list():
    print("Fetching repo file tree (this will take a while)...")
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/git/trees/{BRANCH}?recursive=1"
    r = requests.get(url)
    r.raise_for_status()
    return r.json().get("tree", [])
    
def fetch_raw_yaml(path):
    url = f"https://raw.githubusercontent.com/{REPO_OWNER}/{REPO_NAME}/{BRANCH}/{path}"
    r = requests.get(url)
    if r.status_code == 200:
        return yaml.safe_load(r.text)
    return None

def main():
    tree = fetch_file_list()
    target_files = [
        item["path"] for item in tree
        if item["type"] == "blob"
        and (item["path"].endswith(".yml") or item["path"].endswith(".yaml"))
        and any(item["path"].startswith(prefix) for prefix in TARGET_PATHS)
    ]

    print(f"Found {len(target_files)} relevant YAML files. Downloading...")

    reagents_db = {}
    recipes = []

    for i, file_path in enumerate(target_files):
        print(f"[{i+1}/{len(target_files)}] Processing {file_path}...")

        data = fetch_raw_yaml(file_path)
        if not data: continue

        entries = data if isinstance(data, list) else [data]

        for entry in entries:
            if not isinstance(entry, dict): continue
            if entry.get("type") == "reagent" and "id" in entry:
                r_id = entry["id"]
                reagents_db[r_id] = {
                    "name": clean_name(entry.get("name", r_id)),
                    "desc": entry.get("desc", ""),
                    "color": entry.get("color", "#CCCCCC")
                }

            elif entry.get("type") == "reaction" and "id" in entry:
                recipes.append(entry)
        
        final_recipes = []
        print("Linking recipes to reagents...")

        for entry in recipes:
            ingredients = []
            for r_id, r_data in entry.get("reactants", {}).items():
                amount = r_data.get("amount") if isinstance(r_data, dict) else r_data
                meta = reagents_db.get(r_id, {"name": r_id, "color": "#FFF"})
                ingredients.append({
                    "id": r_id,
                    "name": clean_name(meta["name"]),
                    "amount": amount,
                    "color": meta["color"]
                })

            products = []
            for p_id, p_amount in entry.get("products", {}).items():
                meta = reagents_db.get(p_id, {"name": p_id, "color": "#FFF"})
                products.append({
                    "id": p_id,
                    "name": clean_name(meta["name"]),
                    "amount": p_amount,
                    "color": meta["color"]
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

        print(f"Success! {len(final_recipes)} recipes saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()