"""Добирает АЗС, чьи адреса геокодер Яндекса не знает: берёт объекты из OSM
и добавляет те, что дальше 200 м от уже известных точек того же бренда."""
import json, math, urllib.parse, urllib.request

BBOX = {"Астана": "51.00,71.20,51.28,71.75", "Алматы": "43.14,76.75,43.40,77.10", "Кокшетау": "53.20,69.28,53.36,69.55"}
# Как бренд подписан в OSM -> как он называется у нас.
ALIAS = {"sinooil": "Sinooil", "гелиос": "Helios", "helios": "Helios", "аскар": "Аскар",
         "аурика": "Аурика", "nomadoil": "NomadOil", "nomad oil": "NomadOil",
         "gasenergy": "GasEnergy", "qazaq oil": "Qazaq Oil", "compass": "Compass",
         "газпромнефть": "Газпромнефть", "газпромнефть азс": "Газпромнефть",
         "royal petrol": "Royal Petrol", "rp": "Royal Petrol", "у ойл": "У ойл",
         "уойл": "У ойл", "y-oil": "У ойл", "оил": "Ойл", "oil": "Ойл", "gazoil": "Ойл", "сокол": "Сокол", "sokol": "Сокол", "м36": "М36", "m36": "М36", "liqui moly": "Liqui Moly", "liquimoli": "Liqui Moly", "lukoil": "LUKOIL", "лукойл": "LUKOIL", "эталон авто": "Эталон авто", "облгаз": "Облгаз"}

def meters(a, b):
    dx = (a[1] - b[1]) * math.cos(math.radians(a[0])) * 111320
    return math.hypot(dx, (a[0] - b[0]) * 111320)

known = json.loads(open("stations.js").read().split("=", 1)[1].rstrip(";\n"))
added = 0
for city, bbox in BBOX.items():
    q = f'[out:json][timeout:90];node({bbox})["amenity"="fuel"];out tags center;'
    req = urllib.request.Request("https://overpass-api.de/api/interpreter",
                                 data=urllib.parse.urlencode({"data": q}).encode(),
                                 headers={"User-Agent": "fuel-map/1.0"})
    for e in json.load(urllib.request.urlopen(req, timeout=120))["elements"]:
        t = e.get("tags", {})
        raw = (t.get("brand") or t.get("name") or t.get("operator") or "").strip().lower()
        brand = ALIAS.get(raw)
        if not brand:
            continue
        pt = (e["lat"], e["lon"])
        mine = [s for s in known if s["c"] == city and s["n"] == brand]
        if any(meters(pt, (s["lat"], s["lon"])) < 200 for s in mine):
            continue
        known.append({"c": city, "n": brand, "a": t.get("addr:street", "адрес не уточнён"),
                      "r": None, "v": None, "p": "osm",
                      "lat": round(pt[0], 5), "lon": round(pt[1], 5)})
        added += 1

open("stations.js", "w").write("window.STATIONS=" + json.dumps(known, ensure_ascii=False) + ";\n")
print(f"добавлено из OSM: {added} | всего: {len(known)}")
