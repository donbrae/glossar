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

# Highlichtin example

	{
	    sc: ['takkin', 'taein'],
	    en: 'taking',
	    tr: ['take', 'teuk', 'took', 'taen', 'takken', 'teuken', 'taken', 'tane', 'tooken', 'tookin'],
	    hl: ['takken', 'tane', 'taen'], // Stops aw [tr] wirds frae bein highlichtit; wirds in [sc] and [en] will be highlichtit by defaut, sae need tae pit them here an aw
	    ex: 'I wis takkin the dug for a walk whan it stertit smirrin',
	    gr: 'pres participle o the v <span>tae tak</span>'
	}

# Dev

Mak chynges tae template **index.dev.php** and **app.css**. For tae big, see section *Biggin* ablo.

Trigger wirds (`tr`), pronunciations (`pr`) and alternative spellins (`sc_alt`) will be highlichtit in the UI by defaut. Ye can uise the *highlight* property (`hl`) tae owerride this. Note how typin *depute* (Scots) vs *deputy* (English) is haundelt. For a mair complex example, tak tent of the verbs *tae gae* and *tae gie*.

Whan pushin past tenses and past participles tae `G.dict` (by gate of properties `pt`, `pp` and `pt_pp`), note that baith the English and trigger wirds should be eikit tae the `tr` property — thare isna a separate `en` property.

Anent highlighting in verbs, *haud* is a guid example tae leuk at (tak tent o *haud* and *hold* bein in the `tr` property). That wey, if uiser enters *hauden*, only *hauden* will be hielichtit, and no *haud* an-aw.

# JS minification (includin source map)

`sh build.sh min`

Requires `terser`:

`npm install terser -g`

Mak siccar the ruit is pyntit at either live or dev as relevant:

`--source-map "root='https://scots.app/dev/src',url='glossar-bundle.min.js.map'"`

# Biggin

Rin **build.sh** for tae big JS bundle (**glossar-bundle.min.js**) and **index.php** and **index.local.html**. Eik optional argument *css* tae update query string when calling CSS (in all version of the index file), or *min* for tae minifee.

**build.sh** requires `sass` (`brew install sass/sass/sass`) and, optionally, `terser` (for minification; see abuin).

**index.php**, **glossar-bundle.min.js**, **glossar-bundle.min.js.map**, **app.css** and **app.css.map** should be uplaidit, as weel as **app.js** and **./data** (sae as the source mappin wirks).

* https://glossar.makforrit.scot/
* (non-local) dev URL: https://glossar.makforrit.scot/index-dev.html

# Error messages

`fuse.basic.min.js:9 Uncaught TypeError: e.trim is not a function`

Undefined property (e.g. relatit tae `tr`) (check complex verbs first). Stert by remuivin individual data files frae biggin process.

# Reference

## Full template:

	{
	    sc: '',
	    sc_alt: '',
	    pr: '',
	    def: '',
	    en: '',
	    pt: {
	        sc: '',
	        tr: ''
	    },
	    pp: {
	        sc: '',
	        tr: ''
	    },
	    pt_pp: {
	        sc: '',
	        tr: ''
	    },
	    tr: '',
	    hl: '',
	    gr: '',
	    or: [
	        [G.notes.or.as, ''],
	        [G.notes.or.xx, '']
	    ],
	    ex: G.ex.,
	    au: ''
	}

## Basic template

	{
	    sc: '',
	    en: '',
	    gr: '',
	    or: [
	        [G.notes.or.as, ''],
	        [G.notes.or.xx, '']
	    ],
	    ex: G.ex.,
	}

## Dependencies

* `terser` (optional; for JS minification)
* `sass`
