import json

with open('searches.json', 'r') as f:
    searches = json.load(f)

print(searches[0])