#!/bin/bash
shopt -s extglob
cat ./app.js ./glossar.js ./glossar-examples.js ./glossar-v.js ./glossar-adj.js ./glossar-adv.js ./glossar-n.js ./glossar-geo.js ./glossar-phr.js > glossar-bundle.min.js
shopt -u extglob
