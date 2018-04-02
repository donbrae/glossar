Merk: this readme is scrieved in Scots; the code an comments is in English.

# Ettle

The heidmaist ettle o this wab-gibble is tae allou uisers tae translate wirds an ídioms atween Scots an English, swith an easy, an be gien basic wittins anent the wirds.

Praisently at prototype stage.

# Featurs

1. Leuk up vocabular in English or Scots uisin an aefauld text kistie
2. See results as ye teep
3. Input wirds uisin aither mair estaiblisht spellins, or phonetically
4. Retours baith the Scots, an the English translate (or whiles a definítion in Scots)
4. Gies ‘richt’ spellin, basic pronunciation an grammar, some wittins anent wird origin, alang wi ony common alternative spellins
5. Lichtwecht an accessible on dasktap, tablet an mobile.

Audience: Scots spikkers, scrievers an learners.

# Dev

index-dev.html

Trigger wirds (`tr`), pronunciations (`pr`) an alternative spellins (`sc_alt`) will be hielichtit in the UI by defaut. Ye can uise the *highlight* property (`hl`) to owerride this. Merk hou teepin *depute* (Scots) vs *deputy* (English) is haundelt. For a mair complex example, tak tent o the verbs *tae gae* an *tae gie*.

Whan pushin past tenses an past partíciples til `G.dict` (by gate o properties `pt`, `pp` an `pt_pp`), merk that baith the English an trigger wirds shoud be eikit til the `tr` property — there isna a separate `en` property.

# Biggin

Rin `build.sh` tae write til **glossar-bundle.min.js**

* https://glossar.makforrit.scot/
* (non-local) dev URL: https://glossar.makforrit.scot/index-dev.html
