# Ettle

The heidmaist ettle o this wab-gibble is tae allou uisers tae translate wirds an ídioms atween Scots an English, quick an easy, an be gien basic wittins anent the wirds.

Praisently at prototype stage.

# Featurs

1. Leuk up vocabular in English or Scots uisin a aefauld text kistie
2. See results as ye týpe
3. Inpit wirds uisin mair estaiblisht spellins alang wi some common mis-spellins
4. Retours baith the Scots, an the English translate (or whiles a definítion in Scots)
5. Gies ‘richt’ spellin, basic pronunciation an grammar, some wittins anent wird origin, alang wi ony common alternative spellins
6. Prents ane or twa example sentences for tae gie a kythin tae the wirds uised in context
5. Lichtwecht an accessible on dasktap, tablet an mobile.

Audience: Scots speakers, scrievers an learners.

# Dev

index-dev.html

Trigger wirds (`tr`), pronunciations (`pr`) an alternative spellins (`sc_alt`) will be hielichtit i the UI bi defaut. Ye can uise the *highlight* property (`hl`) to owerride this. Merk hou týpin *depute* (Scots) vs *deputy* (English) is haundelt. For a mair complex example, tak tent o the verbs *tae gae* an *tae gie*.

Whan pushin past tenses an past partíciples tae `G.dict` (bi gate o properties `pt`, `pp` an `pt_pp`), merk that baith the English an trigger wirds should be eikit tae the `tr` property — there isna a sindry `en` property.

# Biggin

Rin `build.sh` tae write tae **glossar-bundle.min.js**, an chynge the timestamp in **index.html** whan callin **glossar-bundle.min.js**.

* https://glossar.makforrit.scot/
* (non-local) dev URL: https://glossar.makforrit.scot/index-dev.html
