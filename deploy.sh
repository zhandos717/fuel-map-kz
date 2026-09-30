#!/bin/sh
# Обновить карту: пересобрать данные при необходимости и залить на хостинг.
set -e
cd "$(dirname "$0")"
cp index.html stations.js verdict.js sw.js manifest.json icon-192.png icon-512.png apple-touch-icon.png public/
firebase deploy --only hosting --project fuel-map-kz
