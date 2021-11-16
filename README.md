# Ettle

This tuil pits ower wirds and phrases atween Scots and English.

It only haes a few hunder wirds the noo but the functionality is maistly thare.

# Featurs

1. Leuk up vocabular in English or Scots uisin the ae text kistie
2. See results as ye teep
3. Inpit wirds uisin mair estaiblisht spellings alang wi some common mis-spellings
4. Returns baith the Scots, and the English translate (or, whiles, a definition in Scots)
5. Gies recommendit spelling(s), basic pronunciation and grammar, some info anent wird origin, alang wi ony common alternative spellings
6. Audio o the wirds bein spoken in sindry byleids
7. Twa-three example sentences for tae gie a idea of the wird in context
8. URL per results set for easy skairin on social media, in messaging apps etc.
9. Lichtwecht and accessible on dasktap, tablet and mobile.

Audience: Scots speakers, scrievers and learners.

# Dependencies

* `terser` (optional; for JS minification)
* `sass`

# Testing locally

Rin **build.sh** (see ‘Biggin’ section ablo), syne rin `php -S localhost:8000` and gae tae [http://localhost:8000](http://localhost:8000) in the brouser.

## Testing audio

Rin this script in the brouser console:

```javascript
GLOSSAR.dict.forEach(item => {
    if (item.au) {
        [].concat(item.au).forEach(item => {
            document.body.insertAdjacentHTML('afterbegin', `<audio id="${item}" class="audio d-none" src="/audio/${item.charAt(0)}/${item}.mp3" preload="auto"></audio>`);
        });
    }
});

console.log('Checking duin');
```

# Dev and eikin items tae the `GLOSSAR.dict` object

Mak chenges tae template **index.dev.php** and **app.scss**. For tae big, see section *Bigging* ablo.

Trigger wirds (`tr`), pronunciations (`pr`) and alternative spellings (`sc_alt`) will be hielichtit in the UI by defaut. Ye can uise the *hielicht* property (`hl`) tae owerride this. See, for instance, hoo *depute* (Scots) vs *deputy* (English) is haundelt. For a mair complex example, sicht the verbs *tae gae* and *tae gie*.

Whan pushin past tenses and past participles tae `G.dict` (by gate of properties `pt`, `pp` and `pt_pp`), merk that baith the English and trigger wirds shoud be eikit tae the `tr` property — thare isna a separate `en` property.

Anent hielichting in verbs, *haud* is a guid example tae leuk at (tak tent o *haud* and *hold* baith bein in the `tr` property). That wey, if the uiser teeps *hauden*, only *hauden* will be hielichtit, and no *haud* an-aw.

## Properties

### `heeze`

This will gie a wird a heeze tae the tap o the results unner a couple o conditions: ony heezed items that’s hielichtit and that marras the wird bein searched for will be shiftit tae the tap. This wirks aboot an issue whaurin ‘haud’ and ‘hae’ haes the same score whan the uiser searches for ‘have’. We likely want tae hae ‘hae, hiv’ at the tap o the results. In anither instance, searchin for ‘dae’ will return results for ‘dae’ and ‘dae’, whaur the seicont means ‘dinna’. We’d want the first tae be at the tap as it’s mebbe mair likely tae be what the uiser wad expect.

On the ither haund, ye coud eik a `heeze` tae the ither ‘dae’ (`heeze: 'deh'`) sae that ‘deh’ is pitten at the tap, as fowk is likely tae be leukin for the negative 'dae' if thay search for ‘deh’ (‘I dae ken’ is common). I’v actually insteid eikit ‘deh’ as a trigger, but ye coud hae duin it either wey.

## hielichting

Trigger wirds (`tr`) ar hielichtit by defaut. The `hl` property owerrides `tr` hielichting in cases whaur we dinna want aw the `tr` wirds bein hielichtit.

```javascript
{
    sc: ['takkin', 'taein'],
    en: 'taking',
    tr: ['take', 'teuk', 'took', 'taen', 'takken', 'teuken', 'taken', 'tane', 'tooken', 'tookin'],
    hl: ['takken', 'tane', 'taen'], // Stops aw [tr] wirds frae bein hielichtit; wirds in [sc], [en] and [pr] will be hielichtit by defaut, sae need tae pit thaim here an aw. Allocate a tuim array if ye’r wantin nane o the 'tr' items tae cause hielichting
    ex: 'I wis takkin the dug for a walk whan it stertit smirrin',
    gr: 'pres participle o the v <span>tae tak</span>'
    }
}
```

## Bigging

Rin **build.sh** for tae big the JS bundle (**glossar-bundle.min.js**) and **index.php**. Eik optional argument *css* tae update query string when calling CSS, or *min* for tae minifee.

**build.sh** requires `sass` (`brew install sass/sass/sass`) and, optionally, `terser` (for minification; see ablo).

Whan testin on dev.scots.app or deployin tae production at scots.app, **index.php**, **glossar-bundle.min.js**, **glossar-bundle.min.js.map**, **app.css** and **app.css.map** shoud be uplaidit, as weel as **app.js** and **./data** (sae as the source mapping wirks). **app.js** and **./data** shoud be pitten in the folder cried **src**.

## JS minification

`sh build.sh min`

Requires `terser`:

`npm install terser -g`

In **build.sh** mak siccar that the ruit is pyntit at either live or dev as relevant:

`--source-map "root='https://dev.scots.app/src',url='glossar-bundle.min.js.map'"`

## Error messages

`fuse.basic.min.js:9 Uncaught TypeError: e.trim is not a function`

Undefined property (e.g. relatit tae `tr`) (check complex verbs first). Stert by remuivin individual data files frae biggin process.

# Reference

## Full item template:

```javascript
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
        [G.notes.or.as, ''
        ],
        [G.notes.or.xx, ''
        ]
    ],
    ex: G.ex.,
    au: ''
}
```

## Basic template

```javascript
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
```
