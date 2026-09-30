import os, requests

TOKEN = open(os.path.join(os.path.dirname(__file__), "..", ".env")).read().split("=", 1)[1].strip()
WEBAPP_URL = os.environ.get("WEBAPP_URL", "https://fuel-map-kz.web.app")

def send(chat_id):
    requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json={
        "chat_id": chat_id, "text": "Заправки Астаны:",
        "reply_markup": {"inline_keyboard": [[{"text": "Открыть карту",
                                               "web_app": {"url": WEBAPP_URL}}]]}})

def main():
    offset = None
    while True:
        r = requests.get(f"https://api.telegram.org/bot{TOKEN}/getUpdates",
                         params={"offset": offset, "timeout": 30}, timeout=40).json()
        for u in r.get("result", []):
            offset = u["update_id"] + 1
            if "message" in u:
                send(u["message"]["chat"]["id"])

if __name__ == "__main__":
    main()
