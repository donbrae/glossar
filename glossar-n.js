/**
 * Nouns
 */

G.n = {}; // More complex nouns

/**
 * Add nouns to dictionary object
 */

G.dict.push({
    sc: 'airtin',
    def: 'wab link',
    tr: 'link',
    gr: 'n',
    ex: 'The airtins ablo gang intil mair detail'
}, {
    sc: 'annualrent',
    def: ['rent peyed ilka year', 'interest on borraed siller'],
    tr: ['interest', 'annual rent'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'annualrent, annual rent']
    ]
}, {
    sc: 'associe',
    pr: 'aSosee',
    en: 'association',
    gr: 'n',
    or: [
        ['?' + G.notes.or.f, 'associé']
    ]
}, { // B
    sc: 'bittie',
    en: [
        ['a small piece', 'a little bit'],
        'a short distance',
        'a short time',
        'difficulty'
    ],
    tr: 'little',
    gr: 'n',
    or: 'dim o <span>bit</span>',
    ex: ['Ay, I\'ll hae a bittie, please', 'Sophie texted tae lat her faither ken she’d be there in a bittie', 'Alec walkit on a wee bittie aheid']
}, {
    sc: 'bouk',
    en: [
        ['bulk', 'size', 'quantity'], 'body (of a person or animal)'
    ],
    tr: 'body',
    gr: 'n',
    ex: 'The tapmaist file bouk permittit is 8MB'
}, {
    sc: 'boy',
    def: 'a man',
    tr: ['man', 'lad', 'laddie', 'loun'],
    hl: ['boy', 'man'],
    gr: ['n', 'informal'],
    ex: ['The boy wi the bustit timin belt is sittin waitin in the office', 'Ach, he’s an auld boy sae I wisna gaun’ae argie wi him', 'That boy taks nae shite frae naeb’dy!']
}, {
    sc: 'brae',
    def: ['the (stey or sclentin) banks o a river, loch or seashore', 'a bank or lenth o grund wi a fairly strait upwart sclent til it', 'a gate wi a stey upcome (aft-times in street names)', 'the brou o a hill'],
    tr: ['hillside', 'slope', 'road', 'street', 'bank', 'knowe', 'brow', 'brou', 'gate', 'gait'],
    hl: ['brae', 'hillside', 'brow', 'bank', 'street', 'road', 'brow', 'brou', 'gate', 'gait'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'bra', 'bray', 'brae'],
        [G.notes.or.anor, 'brá'],
        [G.notes.or.ga, 'bràighe']
    ]
}, { // C
    sc: 'cairt',
    en: ['cart', ['chart, map']],
    tr: 'cairte',
    gr: 'n'
}, {
    sc: 'certificate',
    en: 'certificate',
    gr: 'n',
    or: [
        [G.notes.or.ms, 'certificat'],
        [G.notes.or.mf, 'certificat']
    ],
}, {
    sc: 'claes',
    en: 'clothes',
    gr: 'n'
}, {
    sc: 'close',
    def: ['an enclosed area neist til a biggin; a courtyaird', ['a passage atween biggins', 'a nairae loan wi houses on ilka side'], 'a fermyaird', 'the passage gien ingate til a common stair; the mean area in a block o flats', 'a tenement biggin'],
    tr: ['passage', 'farmyard', 'farm yard', 'stairwell', 'tenement', 'building', 'courtyard', 'coortyaird'],
    hl: ['passage', 'farmyard', 'farm yard', 'stairwell', 'tenement', 'courtyard', 'coortyaird'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'clos, clois, close'],
        [G.notes.or.mf, 'clos'],
        [G.notes.or.l, 'clausum']
    ]
}, {
    sc: 'collectorie',
    def: 'the office o (tax) collector',
    tr: 'tax collector',
    gr: ['n', 'obsolete'],
    or: [
        ['Ablins ' + G.notes.or.af, 'collecterie']
    ]
}, {
    sc: 'complouther',
    pr: 'comploother',
    en: [
        ['a mix up', 'confusion'], 'a mixture', 'a conversation'
    ],
    tr: ['mix up', 'mix-up', 'mixture', 'conversation', 'compluter', 'compluther'],
    gr: 'n',
    or: ['wankent, but mak compare wi ' + G.notes.or.af + ' <span>complote</span>, ‘a raivelt thrang o fowk’']
}, {
    sc: 'componer',
    def: 'a body that writes muisic',
    tr: 'composer',
    gr: 'n',
    or: 'see the v <span>tae compone</span>'
}, {
    sc: 'composition',
    en: [
        ['<span>law</span> a sum paid in settlement of a claim, dispute or obligation; the amount fixed by mutual agreement'],
        ['a piece of writing; a work of literature, music or art'],
        ['a combination of elements', 'a mixture']
    ],
    tr: 'settlement',
    hl: ['composition', 'settlement'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'compositioun, composicioun'],
        [G.notes.or.me, 'composicioun'],
        [G.notes.or.l, 'compositio']
    ]
}, {
    sc: 'co-airtar',
    en: 'coordinator',
    gr: 'n',
    ex: 'A full-time co-airtar wis appyntit tae the team'
}, {
    sc: 'contrair',
    en: [
        ['the contrary', 'the opposite']
    ],
    tr: ['contrary', 'opposite', 'on the contrary', 'to the contrary'],
    hl: ['contrary', 'opposite'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'contrar, contrair'],
        [G.notes.or.af, 'contraire'],
        [G.notes.or.l, 'contrarius']
    ],
    ex: ['Her client haed naething tae say in the contrair', 'Na, na; I dinna haud wi that — I ken tae the contrair!', 'I wis expectin the play tae be awfu dreich, but it turnt out the contrair wis true']
}, {
    sc: 'council',
    pr: 'cooncil',
    en: 'council',
    gr: 'n',
    or: [
        [G.notes.or.as, 'council(l), counsale, councell, counsell'],
        [G.notes.or.me, 'counseil'],
        [G.notes.or.l, 'concilium']
    ],
    ex: 'Edinburgh Cíty Council the day set furth new wittins anent the raxin out o the tram netwark til Newhaven'
}, { // D
    sc: 'daeins',
    en: 'activity',
    gr: 'n'
}, {
    sc: 'dask',
    en: [
        ['desk', 'seat', 'church pew']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as + ' (frae 1530)', 'dask, daske'],
        ['possible influence o ' + G.notes.or.as + ' <em>dais, das</em>, frae the ' + G.notes.or.nfd, 'dais']
    ]
}, {
    sc: 'debursement',
    en: 'disbursement',
    gr: 'n',
    or: 'see v <span>deburse</span>',
    ex: 'A comatee wis estaiblisht tae owersee the debursement o aid'
}, {
    sc: 'defamation',
    en: [
        ['discredit', 'disgrace', 'dishonour'],
        ['<span>law</span> libel', 'slander']
    ],
    tr: ['libel', 'discrediting'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'defamatioun, defamatione'],
        [G.notes.or.me, 'defāmacioun'],
        [G.notes.or.l, 'diffāmātio']
    ]
}, {
    sc: 'defaut',
    en: [
        ['lack or absence (of something)', 'neglect', 'negligence', 'failure to pay (a debt)']
    ],
    tr: ['default', 'lack', 'absence'],
    gr: ['n'],
    or: [
        [G.notes.or.as, 'defaut, defalt, defawt'],
        [G.notes.or.me, 'defaut']
    ]
}, {
    sc: 'defeat',
    en: 'defeat',
    tr: ['defait', 'defeet'],
    gr: 'n',
    or: 'see v'
}, {
    sc: 'defect',
    pr: ['deefekt', 'deefek'],
    en: [
        ['shortcoming', 'imperfection', 'flaw']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'defect'],
        [G.notes.or.l, 'dēfectus']
    ]
}, {
    sc: 'defection',
    en: [
        ['desertion', 'failure in duty'],
        ['defect', 'flaw', 'failure']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'defection'],
        [G.notes.or.l, 'dēfectio']
    ]
}, {
    sc: 'depute',
    en: 'a deputy',
    gr: 'n',
    tr: ['deputy', 'vice'],
    ex: ['The Green Pairty convener wis ettlin tae appynt a depute by the end o the simmer', G.ex.f],
    or: 'see adj'
}, {
    sc: 'desuetude',
    en: [
        ['disuse', 'discontinuance']
    ],
    gr: 'n law',
    or: [
        [G.notes.or.f, 'désuétude'],
        [G.notes.or.l, 'dēsuētūdo']
    ],
    ex: 'It wis an auld law that haed fawen intae desuetude'
}, {
    sc: 'development',
    en: 'development',
    gr: 'n'
}, {
    sc: 'differ',
    en: [
        ['a difference of opinion', 'a disagreement or dispute'],
        ['a difference', 'a dissimilarity']
    ],
    tr: ['disagreement', 'dispute', 'difference', 'dissimilarity'],
    gr: 'n',
    or: ['see v']
}, {
    sc: ['ditter'],
    en: 'dither',
    tr: 'swither',
    hl: 'dither',
    gr: ['n', 'v'],
    ex: ['Ay, he’s a richt ditter', 'The’re nae time tae be ditterin about']
}, {
    sc: 'draucht trumpet',
    def: [
        ['an early kind o trombone uised in Renaissance muisic', 'a war trumpet or trumpet player']
    ],
    en: 'sackbut',
    gr: 'n',
    tr: ['trombone'],
    hl: ['sackbut', 'draucht trumpet'],
    or: [
        [G.notes.or.as, 'draucht trumpet']
    ]
}, { // E
    sc: 'eneuch',
    pr: ['inyuch', 'inyooch', 'unyooch', 'unooch', 'unyoch'],
    tr: 'sufficient',
    hl: 'eneuch',
    en: 'enough',
    gr: ['n', 'adj', 'adv'],
    ex: 'I’v haed juist about eneuch o your haiverin'
}, {
    sc: 'environs',
    en: [
        ['the environment', 'surrounds']
    ],
    tr: 'environment',
    gr: 'n',
    or: [
        '?uissage as n frae Modren English',
        G.notes.or.as + ' haes the v <em>enveron, inviroun, inveroun</em> <em>(to encircle, surround)</em>', ['frae the ' + G.notes.or.me, 'envirounen'],
        [G.notes.or.af, 'environner']
    ]
}, {
    sc: 'ettle',
    en: [
        ['one\'s aim or purpose', 'one\'s design or object'],
        ['an effort', 'an attempt'],
        ['an ambition', 'a desire']
    ],
    tr: ['objective', 'effort', 'attempt', 'aim', 'purpose', 'design', 'object', 'ambition', 'desire', 'ettlin'],
    hl: ['objective', 'effort', 'attempt', 'aim', 'purpose', 'design', 'object', 'ambition', 'desire'],
    gr: 'n',
    or: 'see v'
}, {
    sc: 'ettlin',
    en: [
        ['purpose', 'intention', 'effort', 'endeavour', 'eagerness', 'ambition']
    ],
    tr: 'ettle',
    hl: 'ettlin',
    gr: 'n'
}, {
    sc: 'evidence',
    def: 'pruif',
    tr: 'proof',
    gr: 'n',
    or: [
        [G.notes.or.as, 'evidence, evidens'],
        [G.notes.or.mf, 'evidence'],
        [G.notes.or.l, 'ēvidentia']
    ]
}, {
    sc: ['examine', 'exaimine'],
    en: 'examination',
    gr: 'n',
    or: [
        [G.notes.or.as, 'examyn(e), examine'],
        [G.notes.or.l, 'exāmen']
    ]
}, {
    sc: 'examination',
    en: [
        ['testing', 'a test', 'investigation', 'interrogation']
    ],
    tr: 'test',
    gr: 'n',
    or: [
        [G.notes.or.as, 'examinatioun, exemenatioun'],
        [G.notes.or.l, 'exāminātio']
    ]
}, {
    sc: 'examinator',
    en: 'examiner',
    gr: 'n',
    or: [
        [G.notes.or.as, 'examinato(u)r'],
        [G.notes.or.l, 'examinator']
    ]
}, { // F
    sc: 'fankle',
    en: [
        ['tangle', 'muddle']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'fang'],
        [G.notes.or.anor, 'fang']
    ]
}, {
    sc: 'fash',
    en: [
        ['trouble', 'bother', 'annoyance'], 'a troublesome person'
    ],
    tr: 'nuisance',
    gr: 'n',
    or: 'see v',
    ex: 'It wis a richt fash for Tammas tae get his wark duin whan he haed tae uise ane o his auld laptops'
}, {
    sc: 'fasherie',
    en: [
        ['trouble', 'annoyance', 'fuss']
    ],
    gr: 'n',
    or: [
        [G.notes.or.ms, 'fasch(e)rie, fash(e)rie'],
        [G.notes.or.mf, 'fascherie']
    ],
    ex: 'The’ wis a bit fasherie winnin at the fitba stadium in time for kick-aff'
}, {
    sc: 'feartie',
    en: 'coward',
    gr: ['n', 'informal']
}, {
    sc: 'fitba',
    pr: ['fitbaw', 'fitbaa'],
    en: 'football',
    gr: 'n',
    or: [
        G.notes.or.as + ' <span>futebal(l), fuitbal, futbaw</span>.' + ' The last letter (‘l’) in the Aulder Scots maks is whit’s kent as a ‘vouel lenth merker’ an wisna soundit', [G.notes.or.lme, 'fotebal']
    ]
}, {
    sc: 'fowk',
    pr: ['fuowk', 'foak'],
    en: 'people',
    gr: 'n',
    or: [
        [G.notes.or.as, 'folk, folkis'],
        [G.notes.or.ae, 'folc']
    ]
}, {
    sc: 'fruit',
    pr: ['fröt', 'frit', 'freet'],
    def: ['the product o a tree or ither plant that haes seeds intil’t, an can be etten as fuid', 'revenue accressed frae the crap o the laund', 'affcome, vantage, profit', 'affspring'],
    en: 'fruit',
    tr: ['result', 'benefit', 'profit', 'offspring'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'fruit, fruyt, frute'],
        [G.notes.or.me, 'fruit'],
        [G.notes.or.l, 'frūctus']
    ]
}, {
    sc: 'furthsetter',
    def: 'a body or company that redds an sets furth beuks, jurnals, or muisic for sale',
    tr: 'publisher',
    gr: 'n',
    or: [
        [G.notes.or.ms, 'furthsettar, furthsetter']
    ]
}, {
    sc: 'furthsettin',
    en: 'publishing',
    gr: 'n',
    or: [
        [G.notes.or.ms + ' <span>furthsetting</span>', '<span>‘settin forrit, feshin on, forderin’</span>']
    ]
}, { // G
    sc: 'gate',
    sc_alt: 'gait',
    def: [
        ['a wey', 'a path', 'a road', 'a street (in a toun); kythes aft-times in steid names']
    ],
    tr: ['street', 'way', 'wey', 'path', 'road'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'gate, gait'],
        [G.notes.or.anor, 'gata']
    ]
}, {
    sc: 'gloriosity',
    en: 'self-importance',
    tr: ['boast', 'gloriositie', 'self importance'],
    hl: ['gloriosity', 'gloriositie', 'self importance'],
    gr: 'n',
    or: [
        [G.notes.or.ms, 'gloriositie'],
        [G.notes.or.mf, 'glorieuseté']
    ]
}, { // H
    sc: 'haik',
    en: ['a person or animal given to roaming about', ['a trek', 'journey']],
    tr: 'trek',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'haudin gaun',
    en: 'continuation',
    gr: 'n'
}, {
    sc: 'horse',
    def: 'a huift, plant-eatin domesticatit mammal',
    tr: 'hors',
    gr: 'n',
    or: [
        [G.notes.or.as, 'hors, horse'],
        [G.notes.or.ae, 'hors']
    ]
}, {
    sc: 'hour',
    pr: 'oor',
    en: 'hour',
    gr: 'n',
    or: [
        [G.notes.or.as, 'hour, howr'],
        [G.notes.or.me, 'houre']
    ],
    ex: 'The forgaitherin o the management comatee is tae stairt at twa hours, juist efter denner'
}, {
    sc: 'hous',
    pr: 'hoos',
    en: 'house',
    tr: ['houss', 'hoose'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'hous, hows, hus(e)'],
        [G.notes.or.ae, 'hūs']
    ],
    ex: [
        ['They’d juist about pit by eneuch siller for a deposit on a hous'],
        ['It’s yersel! Come awa ben the hous'],
    ]
}, {
    sc: 'maet',
    sc_alt: 'meat',
    en: [
        ['food', 'sustenance'],
        'a meal',
        'meat'
    ],
    tr: ['meal', 'mait'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'mete, meit, met, mait, meat'],
        [G.notes.or.ae, 'mete']
    ]
}, { // I
    sc: 'ilk',
    en: [
        ['a family', 'a race', 'a kind', 'a type']
    ],
    tr: ['family', 'race', 'kind', 'type'],
    gr: 'n'
}, {
    sc: ['ilkane', 'ilk ane'],
    en: [
        ['each one', 'everyone']
    ],
    gr: ['pron']
}, {
    sc: 'innovation',
    def: [
        ['the chyngin o an estaiblisht mak, wey o daein things or institution'],
        ['<em>law</em> the chyngin or replacement o a legal servitude or provísion'],
        ['something new introduce’t']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'innovation(e), innovatioun(e)'],
        [G.notes.or.l, 'innovātio']
    ]
}, {
    sc: 'novator',
    en: 'innovator',
    gr: 'n',
    or: [
        [G.notes.or.as, 'novator, novateur'],
        [G.notes.or.f, 'novateur'],
        [G.notes.or.l, 'novātor']
    ]
}, {
    sc: 'accress',
    en: 'increase',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'knawledge',
    en: 'knowledge',
    gr: 'n'
}, { // L
    sc: 'lad',
    en: [
        ['a boy', 'young man'],
        ['a male servant', 'groom'],
        'a son',
        'a male sweetheart'
    ],
    tr: ['son', 'male sweetheart', 'boy', 'young man', 'laddie', 'loun', 'man'],
    hl: ['son', 'male sweetheart', 'boy', 'young man'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'lad']
    ]
}, {
    sc: 'laddie',
    en: ['a young man', 'a male child', 'a male sweetheart', 'a son'],
    tr: ['young man', 'male child', 'male sweetheart', 'son', 'boy', 'loun', 'lad', 'man'],
    hl: ['young man', 'male child', 'male sweetheart', 'son', 'boy'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'laddie']
    ],
    ex: 'That’s Eck’s laddie, is it no?'
}, {
    sc: 'lawmakar',
    en: [
        ['lawmaker', 'legislator']
    ],
    gr: 'n'
}, {
    sc: 'loan',
    def: ['an unpedmentit or girssie track for cattle; aft-times in steid names', 'a througate, street or road', ['the ferm gate airtin til the fermhous', 'the grund adjynin a fermhous', 'the causey']],
    tr: ['lane', 'track', 'street', 'road', 'path', 'causey', 'gate', 'gait', 'througate'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'lone, loan, loyne'],
        [G.notes.or.ae, 'lanu']
    ]
}, {
    sc: 'loch',
    def: [
        ['a naitural formt area o watter surroundit by laund (rangin in bouk frae muckle doun til lairge pownds); aft-times in street names', 'an inlat o the sea'], 'a dub'
    ],
    tr: ['lake', 'pond', 'puddle', 'pool', 'inlet', 'inlat', 'watter', 'dub'],
    hl: ['lake', 'pond', 'puddle', 'pool', 'dub'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'loch, louch(e)'],
        [G.notes.or.ga, 'loch']
    ]
}, {
    sc: 'loun',
    pr: 'loon',
    en: [
        ['a young man', 'boy', 'youth'],
        ['a young farm worker'],
        ['a male child', 'son', 'baby boy']
    ],
    tr: ['young man', 'farm-boy', 'farm boy', 'lad', 'laddie', 'man'],
    hl: ['young man', 'farm-boy', 'farm boy'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'loun']
    ]
}, { // M
    sc: 'maiter',
    en: [
        ['material', 'substance'],
        ['basis', 'ground', 'source', 'origin'],
        ['the subject', 'the theme (of a literary work or discourse)'],
        ['an undertaking', 'a course of events', 'a state of affairs', 'a concern', 'a business', 'an issue']
    ],
    tr: ['subject', 'theme', 'undertaking', 'course of events', 'state of affairs', 'concern', 'business', 'issue', 'matter'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'mater(e)'],
        [G.notes.or.me, 'mater'],
        [G.notes.or.l, 'māteria']
    ]
}, {
    sc: 'mak',
    en: [
        ['form', 'shape', 'a (distinctive) style of manufacture'],
        ['the action or process of manufacturing (an object) or developing (a character)']
    ],
    tr: ['style', 'manufacturing', 'developing', 'build', 'appearance', 'fashion', 'manufacturing'],
    gr: 'n',
    or: 'see v'
}, {
    sc: 'maun',
    pr: 'maun',
    en: [
        ['compulsion', 'necessity']
    ],
    tr: 'must',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'mind',
    sc_alt: 'mynd',
    def: 'the mind; that whilk is brocht back tae mind or mindit, memory, a mindin',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'mindin',
    en: [
        ['a memory', 'a recollection']
    ],
    sc_alt: 'myndin',
    tr: ['memory', 'recollection'],
    gr: 'n'
}, { // N
    sc: 'nationalist',
    def: 'a body that’s for Scotland’s polítical independence',
    gr: ['n'],
}, {
    sc: 'naturality',
    en: [
        ['innate ability or intelligence', 'talent']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'naturalité, naturalty'],
        [G.notes.or.f, 'naturalité'],
        [G.notes.or.l, 'nātūrālitas']
    ]
}, {
    sc: 'nat',
    def: 'ocht derogatory term for a Scots nationalist',
    gr: ['n', 'informal']
}, {
    sc: 'netwark',
    en: 'network',
    gr: 'n',
    ex: [G.ex.s, G.ex.t]
}, { // O
    sc: 'onhaudin',
    en: 'continuation',
    gr: 'n'
}, {
    sc: 'onybody',
    en: 'anybody',
    tr: ['oniebody', 'emdie', 'emdy'],
    gr: 'n'
}, {
    sc: 'origin',
    en: 'origin',
    gr: 'n'
}, {
    sc: 'ocht',
    en: [
        ['aught', 'anything'], 'nothing'
    ],
    gr: 'n',
    ex: ['Jamie didna hae the time tae mak ocht for the bake sale', 'Yon’s ocht ava tae dae wi it!']
}, {
    sc: 'owerance',
    en: [
        ['control', 'mastery', 'superiority']
    ],
    tr: ['command', 'owreance', 'owersicht', 'owresicht', 'oversight', 'supervision', 'ascendancy'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'ourance, owrance, overance']
    ],
    ex: 'The Labour Pairty tyned owerance o the council'
}, { // P
    sc: 'pairt-takar',
    tr: 'pairt takar',
    en: ['stakeholder', 'supporter'],
    gr: 'n',
    ex: G.ex.k
}, {
    sc: 'pneumonie',
    en: 'pneumonia',
    gr: 'n',
    or: [
        [G.notes.or.as, 'peripneumonie'],
        [G.notes.or.eme, 'peripneumony'],
        [G.notes.or.f, 'péripneumonie']
    ],
    ex: 'She wis awfu unweel wi the pneumonie'
}, {
    sc: 'poyet',
    en: 'poet',
    gr: 'n',
    or: [
        [G.notes.or.as, 'poet, poiet, poyet'],
        // ['?' + G.notes.or.me, 'poet(e), poyet(e)'],
        // ['?' + G.notes.or.af, 'poete'],
        // [G.notes.or.l, 'poēta'],
        // [G.notes.or.gk, 'poētēs']
    ]
}, {
    sc: 'poyetry',
    en: 'poetry',
    gr: 'n',
    or: [
        [G.notes.or.as, 'poetry, poetrie, poyetrie'],
    ]
}, { // Q
    sc: ['quine', 'quinie'],
    sc_alt: 'quean',
    pr: ['kwine', 'kwinie'],
    en: [
        ['a young (unmarried) woman', 'a wench', 'a girl'],
        ['a female child', 'a schoolgirl'],
        'a female sweetheart',
        'a daughter'
    ],
    tr: ['young woman', 'wench', 'girl', 'schoolgirl', 'sweetheart', 'daughter', 'lass', 'lassie', 'dochter'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'quene, quein'],
        [G.notes.or.ae, 'cwēn, cwene']
    ]
}, {
    sc: 'question',
    en: 'question',
    tr: 'quaisten',
    gr: ['n', 'v'],
    // or: [
    //     [x, ''],
    //     [x, '']
    // ]
}, {
    sc: 'uiss',
    pr: ['yös', 'yis', 'ees', 'yoos'],
    tr: ['yiss', 'uise', 'yaise', 'yaize'],
    hl: ['uiss', 'yiss', 'ees'],
    en: 'use',
    gr: 'n'
}, {
    sc: 'rax',
    en: [
        ['stretching', 'a pull', 'a stretch'],
        ['a strain', 'a sprain'],
        ['reaching', 'reach']
    ],
    gr: 'n',
    or: 'see verb'
}, { // R
    sc: 'rhetoric',
    pr: 'rEtorik',
    en: 'rhetoric',
    gr: 'n',
    or: [
        [G.notes.or.as, 'rethorik, rethorie, rethoreis'],
        [G.notes.or.af, 'rhétorique'],
        [G.notes.or.l, 'rhētorica'],
        'frae the Greek <span>rhētorikē</span>'
    ],
    ex: 'It wis naething but tuim rhetoric'
}, {
    sc: 'road',
    def: [
        ['a braid route atween twa steids', 'a gate']
    ],
    tr: ['gate', 'gait', 'route', 'raid'],
    hl: ['gate', 'gait', 'route'],
    gr: 'n',
    or: 'SND states that the mak <em>road</em> (frae Auld English <em>rād</em>) is a 16t century borraein frae English, the historical Scots mak bein <em>raid</em>'
}, {
    sc: 'roaster',
    def: 'a body that haivers, fashes fowk wi their ill laits, or is thocht tae be makkin an ídiot o thaimsels',
    gr: ['n', 'informal', 'derogatory']
}, { // S
    sc: 'sel-law',
    en: 'self-governance',
    tr: ['sel law', 'self governance'],
    gr: 'n',
    or: 'protologism'
}, {
    sc: 'signatur',
    en: 'signature',
    gr: 'n'
}, {
    sc: 'springheid',
    pr: 'springheed',
    en: [
        ['source', 'origin']
    ],
    gr: 'n'
}, {
    sc: 'steerar',
    sc_alt: 'steerer',
    en: 'activist',
    gr: 'n',
    or: '<span>steer</span> ‘tae steer, gie airt til’ wi <span>-ar</span> suffix. Baith <span>-ar</span> an <span>-er</span> kythe on the SLC wabsteid. Wale’t <span>-ar</span> here by analogy wi <span>co-airtar</span>, <span>pairt-takar</span> an <span>lawmakar</span>'
}, {
    sc: 'swither',
    en: [
        ['a state of indecision or doubt', 'hesitation', 'uncertainty'],
        ['a state of nervousness or agitation', 'panic', 'fluster'],
        ['a state of confusion', 'a tangled or muddled condition'],
        ['a dithering, undecided person']
    ],
    tr: ['indecision', 'doubt', 'nervousness', 'agitation', 'confusion', 'tangle', 'muddle', 'ditter', 'doiter', 'unsure'],
    hl: ['indecision', 'doubt', 'nervousness', 'agitation', 'confusion', 'tangle', 'muddle'],
    gr: 'n',
    ex: G.ex.i,
    or: 'see v'
}, {
    sc: 'sýstem',
    pr: 'seestem',
    en: 'system',
    gr: 'n'
}, { // T
    sc: 'than',
    pr: ['than', 'thaun', 'thin', 'dan'],
    en: [
        ['that time', 'a particular time']
    ],
    tr: 'then',
    gr: 'n',
    ex: 'We shoud hae it fínisht by than',
    or: [
        [G.notes.or.as, 'than, thyne'],
        [G.notes.or.ae, 'ðanne']
    ]
}, {
    sc: 'toun',
    pr: 'toon',
    def: [
        ['an area wi a name an bounds whaur fowk haes sattelt', 'a burgh', 'a cíty']
    ],
    en: 'town',
    gr: 'n',
    or: [
        [G.notes.or.as, 'toun, town(e), ton(e)'],
        [G.notes.or.ae, 'tūn']
    ]
}, {
    sc: 'tred',
    en: 'trade',
    gr: 'n',
    ex: ['He\'s a jyner tae tred', G.ex.l]
}, {
    sc: 'unco',
    en: [
        ['<span>mainly pl</span> strange or unusual things, rarites, novelties, curiosities'],
        ['<span>pl</span> news', 'gossip'],
        ['<span>mainly pl</span> strangers', 'foreigners']
    ],
    tr: ['news', 'strangers'],
    gr: 'n',
    or: 'see adj'
}, { // W
    sc: 'wabsteid',
    en: 'website',
    pr: 'wabsteed',
    tr: ['websteid', 'websteed', 'wabsite'],
    gr: 'n',
}, {
    sc: 'wark',
    en: 'work',
    tr: ['labour', 'labor', 'toil', 'wirk'],
    hl: 'wark',
    gr: 'n',
    or: [
        [G.notes.or.as, 'wark, werk'],
        [G.notes.or.ae, 'weorc']
    ],
    ex: [
        ['He gaed intae wark early for tae set furth a saftware update'],
        G.ex.w
    ]
}, {
    sc: 'wirker',
    sc_alt: 'warker',
    pr: ['wirkur', 'wurkur'],
    en: 'worker',
    gr: 'n',
    ex: 'He wis an awfu haurd wirker',
    or: [
        [G.notes.or.as, 'wirkar, wyrkar(e)']
    ]
}, {
    sc: 'wynd',
    def: '<em>mainly fund in street names</em> a nairae, aft-times windin street or pass, maist aften in touns an cíties',
    tr: ['street', 'alley', 'road', 'gate', 'gait'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'wynd, wyne, wind, weynd'],
        [G.notes.or.ae, 'gewind']
    ]
}, { // U
    sc: 'unionist',
    def: 'in a Scots context, a body that’s for the haudin gaun o the polítical union atween Scotland an England',
    gr: ['n']
}, { // Y
    sc: 'yoon',
    def: 'a derogatory term for unionist',
    gr: ['n', 'informal', 'derogatory']
}, { // Z
    sc: 'zoomer',
    def: 'a body that’s ragglish or allevolie',
    gr: ['n', 'informal', 'derogatory']
});
