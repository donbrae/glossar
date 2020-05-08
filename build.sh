#!/bin/bash
shopt -s extglob

timestamp() {
  TS=$(date +%s)
}

timestamp # Generate timestamp

if [ "$1" == "css" ]
then
	mv app.*.css app.$TS.css # Rename CSS file

    # Update ref to CSS file in template
    sed -i '.bak' -e "s/app.*.css/app.$TS.css/" index.php
    cp index.php local-test.html # Update local test template
else
    rm glossar-bundle.*.min.js # Delete old file

    # Build new file
    cat ./app.js ./data/glossar.js ./data/glossar-v.js ./data/glossar-adj.js ./data/glossar-adv.js ./data/glossar-n.js ./data/glossar-geo.js ./data/glossar-phr.js > glossar-bundle.$TS.min.js

    # Update ref to JS file in templates
    sed -i '.bak' -e "s/glossar-bundle.*.min.js/glossar-bundle.$TS.min.js/" index.php
    cp index.php local-test.html
fi

shopt -u extglob
