#!/bin/bash

#!/bin/bash
shopt -s extglob

timestamp() {
  TS=$(date +%s)
}

timestamp # Generate timestamp

if [ "$1" == "css" ]
then
    sass app.scss app.css
    # Update all versions of index file
    sed -i '' "s/app.css\?\_\=[0-9]*/app.css\?\_\=$TS/" index.dev.php
    sed -i '' "s/app.css\?\_\=[0-9]*/app.css\?\_\=$TS/" index.local.html
    sed -i '' "s/app.css\?\_\=[0-9]*/app.css\?\_\=$TS/" index.php
elif [ "$1" == "min" ]
then
    terser app.js data/glossar.js data/glossar-v.js data/glossar-adj.js data/glossar-adv.js data/glossar-n.js data/glossar-geo.js data/glossar-phr.js \
        -o glossar-bundle.min.js -c -m \
        --source-map "root='https://scots.app/src',url='glossar-bundle.min.js.map'"

    sed "s/{{ TIMESTAMP JS }}/$TS/" index.dev.php > index.php
    cp index.php index.local.html
else
    cat ./app.js ./data/glossar.js ./data/glossar-v.js ./data/glossar-adj.js ./data/glossar-adv.js ./data/glossar-n.js ./data/glossar-geo.js ./data/glossar-phr.js > glossar-bundle.min.js
    sed "s/{{ TIMESTAMP JS }}/$TS/" index.dev.php > index.php
    cp index.php index.local.html
fi

shopt -u extglob
