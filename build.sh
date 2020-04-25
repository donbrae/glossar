#!/bin/bash
shopt -s extglob

timestamp() {
  TS=$(date +%s)
}

cat ./app.js ./data/glossar.js ./data/glossar-v.js ./data/glossar-adj.js ./data/glossar-adv.js ./data/glossar-n.js ./data/glossar-geo.js ./data/glossar-phr.js > glossar-bundle.min.js

timestamp

sed "s/TIMESTAMP/$TS/" index.dev.html > index.html

shopt -u extglob
