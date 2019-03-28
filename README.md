# Purpose

The ettle of this tuil is tae allow uisers tae translate wirds and idioms atween Scots and English, quick and easy, and be gien basic information anent the wirds.

Presently at prototype stage.

# Featurs

1. Luik up vocabular in English or Scots uisin the ae text kistie
2. See results as ye type
3. Inpit wirds uisin mair estaiblisht spellins alang wi some common mis-spellins
4. Returns baith the Scots, and the English translate (or a definition in Scots whiles)
5. Gies ‘richt’ spellin, basic pronunciation and grammar, some info anent wird origin, alang wi ony common alternative spellins
6. Prents ane or twa example sentences tie gie a idea of the wird in context
5. Lichtwecht and accessible on desktop, tablet and mobile.

Audience: Scots speakers, scrievers and learners.

# Dev

index-dev.html

Trigger wirds (`tr`), pronunciations (`pr`) and alternative spellins (`sc_alt`) will be hielichtit in the UI by defaut. Ye can uise the *highlight* property (`hl`) tae owerride this. Note how typin *depute* (Scots) vs *deputy* (English) is haundelt. For a mair complex example, tak tent of the verbs *tae gae* and *tae gie*.

Whan pushin past tenses and past participles tae `G.dict` (by gate of properties `pt`, `pp` and `pt_pp`), note that baith the English and trigger wirds should be eikit tae the `tr` property — thare isna a sindry `en` property.

# Biggin

Rin `build.sh` tae write tae **glossar-bundle.min.js**, and chynge the timestamp in **index.html** whan callin **glossar-bundle.min.js**.

* https://glossar.makforrit.scot/
* (non-local) dev URL: https://glossar.makforrit.scot/index-dev.html
