# Purpose

This tuil allous uisers tae translate wirds and idioms atween Scots and English, quick and easy, and see basic information anent the wirds.

Presently at prototype stage.

# Featurs

1. Luik up vocabular in English or Scots uisin the ae text kistie
2. See results as ye type
3. Inpit wirds uisin mair estaiblisht spellins alang wi some common mis-spellins
4. Returns baith the Scots, and the English translate (or a definition in Scots whiles)
5. Gies ‘richt’ spellin, basic pronunciation and grammar, some info anent wird origin, alang wi ony common alternative spellins
6. Prents ae or twa example sentences tae gie a idea of the wird in context
5. Lichtwecht and accessible on desktop, tablet and mobile.

Audience: Scots speakers, scrievers and learners.

# Dev

Mak chynges tae template index.php.

Trigger wirds (`tr`), pronunciations (`pr`) and alternative spellins (`sc_alt`) will be highlichtit in the UI by defaut. Ye can uise the *highlight* property (`hl`) tae owerride this. Note how typin *depute* (Scots) vs *deputy* (English) is haundelt. For a mair complex example, tak tent of the verbs *tae gae* and *tae gie*.

Whan pushin past tenses and past participles tae `G.dict` (by gate of properties `pt`, `pp` and `pt_pp`), note that baith the English and trigger wirds should be eikit tae the `tr` property — thare isna a separate `en` property.

Anent highlighting in verbs, *haud* is a guid example tae leuk at (tak tent o *haud* and *hold* bein in the `tr` property). That wey, if uiser enters *hauden*, only *hauden* will be hielichtit, and no *haud* an-aw.

# Biggin

Rin **build.sh** for tae big JS bundle and update refs in **index.php** and **local-test.html**. Eik optional argument *css* tae dae the like wi the CSS file.

* https://glossar.makforrit.scot/
* (non-local) dev URL: https://glossar.makforrit.scot/index-dev.html
