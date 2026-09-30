"""Адреса филиалов из 2ГИС -> координаты через геокодер Яндекса -> stations.js"""
import json, os, re, time, urllib.parse, urllib.request

KEY = next(l.split("=", 1)[1].strip() for l in open("../.env")
           if l.startswith("YANDEX_GEOCODER_KEY"))
def nominatim(q):
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode(
        {"q": q, "format": "json", "limit": 1})
    req = urllib.request.Request(url, headers={"User-Agent": "fuel-map-kz/1.0"})
    try:
        r = json.load(urllib.request.urlopen(req, timeout=20))
    except Exception:
        return None
    time.sleep(1.1)                            # лимит Nominatim — 1 запрос в секунду
    return (round(float(r[0]["lat"]), 5), round(float(r[0]["lon"]), 5)) if r else None

places = json.load(open("places.json"))
# Адреса, где геокодеры промахиваются: координаты сняты вручную с карточки 2ГИС.
MANUAL = json.load(open("manual.json"))
out, bad = [], []

for city, brands in places.items():
    for brand, rows in brands.items():
        for addr, rating, votes in rows:
            pt = MANUAL.get(f"{city}|{addr}")
            if pt:
                out.append({"c": city, "n": brand, "a": addr, "r": rating, "v": votes,
                            "p": "exact", "lat": pt[0], "lon": pt[1]})
                continue
            # Геокодер не знает корпусов ("14/1") и литер ("28а") — срезаем их по очереди.
            variants = [addr]
            if "/" in addr:
                variants.append(addr.rsplit("/", 1)[0])
            variants.append(re.sub(r"[^\d]+$", "", variants[-1]))
            g = None
            for v in variants:
                q = f"Казахстан, {city}, {v}"
                url = "https://geocode-maps.yandex.ru/1.x/?" + urllib.parse.urlencode(
                    {"apikey": KEY, "geocode": q, "format": "json", "results": 1})
                fm = json.load(urllib.request.urlopen(url, timeout=20))\
                     ["response"]["GeoObjectCollection"]["featureMember"]
                if fm:
                    g = fm[0]["GeoObject"]; break
                time.sleep(.05)
            if g is None:                      # Яндекс не знает адрес — пробуем OSM
                pt = nominatim(f"{addr}, {city}, Казахстан")
                if pt is None:
                    bad.append(f"{city}, {addr} — не найден"); continue
                out.append({"c": city, "n": brand, "a": addr, "r": rating, "v": votes,
                            "p": "osm", "lat": pt[0], "lon": pt[1]})
                continue
            q = f"{city}, {addr}"
            prec = g["metaDataProperty"]["GeocoderMetaData"]["precision"]
            lon, lat = map(float, g["Point"]["pos"].split())
            if prec in ("street", "other"):      # дом не найден — точка ненадёжна
                bad.append(f"{q} [{prec}]")
            out.append({"c": city, "n": brand, "a": addr, "r": rating, "v": votes,
                        "p": prec, "lat": round(lat, 5), "lon": round(lon, 5)})
            time.sleep(.05)

open("stations.js", "w").write("window.STATIONS=" + json.dumps(out, ensure_ascii=False) + ";\n")
print(len(out), "точек |", sum(1 for s in out if s["p"] == "exact"), "exact")
if bad:
    print("неточные:", *bad[:12], sep="\n  ")
