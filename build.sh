#!/bin/bash
shopt -s extglob
cat ./app.js ./data/glossar.js ./data/glossar-v.js ./data/glossar-adj.js ./data/glossar-adv.js ./data/glossar-n.js ./data/glossar-geo.js ./data/glossar-phr.js > glossar-bundle.min.js
shopt -u extglob
