.DEFAULT_GOAL := help
PORT ?= 8000
PY   ?= python3

help: ## Показать список команд
	@grep -hE '^[a-z-]+:.*##' $(MAKEFILE_LIST) | awk -F':.*##' '{printf "  \033[1m%-10s\033[0m %s\n", $$1, $$2}'

serve: ## Локальный сервер на localhost:$(PORT)
	@echo "→ http://localhost:$(PORT)"
	@$(PY) -m http.server $(PORT)

geocode: ## Адреса → координаты (нужен YANDEX_GEOCODER_KEY в ../.env)
	$(PY) geocode.py

gaps: ## Добрать недостающие точки из OpenStreetMap
	$(PY) fill_gaps.py

data: geocode gaps ## Пересобрать stations.js целиком
	@node -e "global.window={};require('./stations.js');console.log('точек:',window.STATIONS.length)"

check: ## Проверить, что данные читаются и все вердикты на месте
	@node -e "global.window={};require('./stations.js');require('./verdict.js');\
	const {STATIONS:s,VERDICT:v,SPOT:p}=window;\
	const lost=Object.keys(p).filter(a=>!s.some(x=>x.a===a));\
	console.log('точек:',s.length,'| сетей:',Object.keys(v).length,'| адресных вердиктов:',Object.keys(p).length);\
	if(lost.length){console.error('ВЕРДИКТ БЕЗ ТОЧКИ НА КАРТЕ:',lost);process.exit(1)}\
	console.log('все адресные вердикты привязаны к точкам')"

deploy: check ## Выложить на Firebase
	./deploy.sh

size: ## Вес того, что грузит браузер
	@gzip -c index.html stations.js verdict.js | wc -c | awk '{printf "gzip: %.1f КБ\n", $$1/1024}'

clean: ## Убрать временные файлы сборки
	rm -rf public shots/raw-*.png shots/pdf-*.png
	@echo "убрано"

.PHONY: help serve geocode gaps data check deploy size clean
