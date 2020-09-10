/**
 * Nouns
 */

G.n = {}; // More complex nouns

/**
 * Add nouns to dictionary object
 */

G.dict.push({
    sc: 'abbreviate',
    en: [
        ['an abstract', 'abridgement', 'summary']
    ],
    tr: 'abstract',
    gr: 'n',
    or: [
        [G.notes.or.as, 'abbreviat'],
        [G.notes.or.l, 'abbreviātum']
    ],
    au: 'abbreviate'
}, {
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
    sc: 'aipple',
    en: 'apple',
    tr: 'epple',
    gr: 'n',
    or: [
        [G.notes.or.as, 'appil, aipill'],
        [G.notes.or.ae, 'æppel']
    ],
    au: 'aipple'
}, {
    sc: 'airmy',
    en: 'army',
    tr: 'ermy',
    gr: 'n',
    or: [
        [G.notes.or.as, 'airmie, erme, armie'],
        [G.notes.or.af, 'armee']
    ]
}, {
    sc: 'associe',
    pr: 'aSosee',
    en: 'association',
    gr: 'n',
    or: [
        ['?' + G.notes.or.f, 'associé']
    ],
    au: 'associe'
}, { // B
    sc: ['bam', 'bammer', 'bampot', 'bamstick'],
    def: 'a fuil, eejit, stupit person; a nutcase',
    tr: ['stupit', 'stupid', 'idiot', 'fool', 'fuil', 'feel', 'eejit', 'nutcase', 'eediot', 'nutter', 'nutcase', 'numpty'],
    hl: ['idiot', 'fool', 'fuil', 'feel', 'eejit', 'nutcase', 'eediot', 'nutter', 'nutcase'],
    gr: 'n, informal',
    ex: 'He’s a richt bam'
}, {
    sc: 'bam',
    def: 'petty criminal, delinquent; a ned',
    tr: ['numpty', 'ned', 'criminal', 'delinquent'],
    gr: 'n'
}, {
    sc: 'bairn',
    def: [
        ['a child', 'a baby', 'a young person', 'a son or dochter']
    ],
    tr: ['wean', 'child', 'son', 'daughter', 'dochter', 'baby', 'infant'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'barne, bairn, bern'],
        [G.notes.or.ae, 'bearn'],
        [G.notes.or.anor, 'barn']
    ],
    au: 'bairn'
}, {
    sc: ['boak', 'boke', 'bowk'],
    en: [
        ['an eructation', 'belch', 'retch', 'vomit'],
        ['nausea', 'disgust', 'revulsion']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'bok, bock']
    ]
}, {
    sc: ['the boak', 'the boke'],
    en: 'belching',
    tr: ['boak', 'boke', 'bowk'],
    hl: [],
    gr: 'n',
    or: [
        [G.notes.or.as, 'the bok']
    ],
    ex: 'The fish fair gied me the boak',
    au: 'the-boak'
}, {
    sc: 'but',
    en: 'the kitchen or outer room, e.g. in a but and ben',
    tr: ['kitchen', 'outer room'],
    gr: 'n',
    or: 'see adv',
}, {
    sc: 'but and ben',
    def: 'a twa-roomed cottage',
    tr: ['but', 'ben'],
    hl: [],
    gr: 'n',
    or: [
        [G.notes.or.as, 'but and ben']
    ]
}, {
    sc: ['baw', 'baa'],
    en: 'ball',
    tr: ['ba', 'ba\''],
    gr: 'n',
    or: [
        [G.notes.or.as, 'ball, baw, baa'],
        ['likely ' + G.notes.or.me, 'bale']
    ]
}, {
    sc: 'ben',
    en: 'the inner room in a house',
    gr: 'n',
    or: 'see prep',
}, {
    sc: 'breid',
    en: 'bread',
    pr: ['breed', 'brehd'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'breid, brede, braid'],
        [G.notes.or.ae, 'brēad']
    ],
    au: 'breid'
}, {
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
    ex: 'The tapmaist file bouk permitit is 8MB'
}, {
    sc: 'boy',
    def: 'a man',
    tr: ['man', 'lad', 'laddie', 'loun'],
    hl: ['boy', 'man'],
    gr: ['n', 'informal'],
    ex: ['The boy wi the bustit timin belt is sittin waitin in the office', 'Ach, he’s an auld boy sae I wisna gonnae argue wi him', 'That boy taks nae shite frae naeb’dy!'],
    au: 'boy'
}, {
    sc: 'brae',
    def: ['the (stey or sclentin) banks o a river, loch or seashore', 'a bank or lenth o grund wi a fairly strait upwart sclent til it', 'a gate wi a stey upcome (aft-times in street names)', 'the brou o a hill'],
    tr: ['hillside', 'hill', 'slope', 'incline', 'road', 'street', 'bank', 'knowe', 'brow', 'brou', 'gate', 'gait'],
    hl: ['brae', 'hillside', 'brow', 'bank', 'street', 'road'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'bra', 'bray', 'brae'],
        [G.notes.or.anor, 'brá'],
        [G.notes.or.ga, 'bràighe']
    ]
}, {
    sc: 'breeks',
    pr: ['breeks', 'briks'],
    en: ['trousers', ['underpants', 'knickers']],
    tr: ['breeches', 'troosers', 'bricks'],
    gr: 'n pl',
    or: [
        [G.notes.or.as, 'brekis, breikis'],
        [G.notes.or.ae, 'brōc']
    ],
    au: 'breeks'
}, {
    sc: ['brur', 'brither'],
    tr: 'brer',
    en: 'brother',
    gr: 'n',
    or: [
        [G.notes.or.as, 'brother, bruthir, broder']
    ],
    au: 'brur'
}, {
    sc: 'broun',
    pr: 'broon',
    en: 'brown',
    gr: ['adj, n'],
    or: [
        [G.notes.or.as, 'broun(e)'],
        [G.notes.or.ae, 'brūn']
    ],
    au: 'broun'
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
    ]
}, {
    sc: 'claes',
    en: 'clothes',
    gr: 'n',
    or: [
        [G.notes.or.as, 'claise, claes, clathis'],
        [G.notes.or.ae, 'claðas']
    ]
}, {
    sc: 'coo',
    tr: 'cou',
    en: 'cow',
    pl: {
        sc: ['kye', 'coos'],
        tr: 'cows',
        au: 'kye'
    },
    gr: 'n',
    or: [
        [G.notes.or.as, 'cow, cou'],
        [G.notes.or.ae, 'cū']
    ],
    ex: G.ex.n1,
    au: 'coo',
}, {
    sc: 'cloot',
    def: ['a bit claith, rag, dishclaith, patch'],
    tr: ['cloth', 'clout', 'cloth', 'rag', 'patch', 'dishclaith', 'dishcloth'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'clout, clowt'],
        [G.notes.or.ae, 'clūt']
    ],
    au: 'cloot'
}, {
    sc: 'close',
    def: ['an enclosed area neist til a biggin; a courtyaird', ['a passage atween biggins', 'a nairae loan wi hoosees on ilka side'], 'a fermyaird', 'the passage gien ingate til a common stair; the mean area in a block o flats', 'a tenement biggin'],
    tr: ['passage', 'farmyard', 'farm yard', 'stairwell', 'tenement', 'building', 'courtyard', 'coortyaird'],
    hl: ['passage', 'farmyard', 'farm yard', 'stairwell', 'tenement', 'courtyard', 'coortyaird'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'clos, clois, close'],
        [G.notes.or.mf, 'clos'],
        [G.notes.or.l, 'clausum']
    ],
    au: 'close'
}, {
    sc: 'collectorie',
    def: 'the office o (tax) collector',
    tr: 'tax collector',
    gr: ['n', 'obsolete'],
    or: [
        ['Aiblins ' + G.notes.or.af, 'collecterie']
    ]
}, {
    sc: 'complouther',
    pr: 'comploother',
    en: [
        ['a mix up', 'confusion'], 'a mixture', 'a conversation'
    ],
    tr: ['mix up', 'mix-up', 'mixture', 'conversation', 'compluter', 'compluther'],
    gr: 'n',
    or: ['unkent, but mak compare wi ' + G.notes.or.af + ' <span>complote</span>, ‘a raivelt thrang o fowk’']
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
    ex: ['Her client haed naething tae say in the contrair', 'Na, na; I dinna haud wi that — I ken tae the contrair!', 'I wis expectin the play tae be awfu dreich, but it turnt oot the contrair wis true']
}, {
    sc: 'cooncil',
    en: 'council',
    gr: 'n',
    or: [
        [G.notes.or.as, 'council(l), counsale, councell, counsell'],
        [G.notes.or.me, 'counseil'],
        [G.notes.or.l, 'concilium']
    ],
    ex: 'Edinburgh City Council the day set furth new wittins anent the raxin oot o the tram netwark til Newhaven',
    au: 'cooncil'
}, { // D
    sc: 'daeins',
    en: 'activity',
    gr: 'n',
    au: 'daeins'
}, {
    sc: 'daftie',
    en: [
        ['an imbecile', 'a foolish person'],
        'a person with learning difficulties'
    ],
    tr: ['imbecile', 'fool', 'fuil', 'feel', 'eejit', 'bam', 'bammer', 'bampot', 'bamstick'],
    hl: ['imbecile', 'fool', 'fuil', 'feel'],
    gr: 'n',
    au: 'daftie'
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
    gr: 'n',
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
    ],
    au: 'defect'
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
    ],
    au: 'defection'
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
    gr: 'n',
    au: 'development'
}, {
    sc: 'differ',
    en: [
        ['a difference of opinion', 'a disagreement or dispute'],
        ['a difference', 'a dissimilarity']
    ],
    tr: ['disagreement', 'dispute', 'difference', 'dissimilarity'],
    gr: 'n',
    or: ['see v'],
    au: 'differ'
}, {
    sc: ['ditter'],
    en: 'dither',
    tr: 'swither',
    hl: 'dither',
    gr: ['n', 'v'],
    ex: ['Ay, he’s a richt ditter', 'The’r nae time tae be ditterin aboot'],
    au: 'ditter'
}, {
    sc: 'documentar',
    en: 'documentary',
    gr: ['n', 'adj']
}, {
    sc: 'dree',
    pt_pp: {
        sc: 'dree’d',
        tr: ['dree\'d', 'endured'],
        au: 'dree’d'
    },
    def: [
        'tae endure; tae thole pyne and ill sonse',
        'tae lest; tae haud gaun'
    ],
    tr: ['endure', 'suffer', 'thole', 'lest', 'haud gaun'],
    hl: ['endure', 'suffer'],
    gr: 'v',
    or: [
        [G.notes.or.as, 'drie, dre(e)'],
        [G.notes.or.ae, 'drēogan']
    ],
    au: 'dree'
}, {
    sc: 'dreeper',
    en: [
        ['strainer', 'draining board']
    ],
    tr: ['colander', 'sieve'],
    hl: [],
    gr: 'n',
    or: [
        [G.notes.or.as, 'dreiper'],
    ],
    au: 'dreeper'
}, {
    sc: 'dreich',
    en: [
        ['dreariness', 'gloom']
    ],
    tr: 'dule',
    hl: [],
    gr: 'n',
    or: 'see adj',
}, { // E
    sc: 'ee',
    en: 'eye',
    tr: 'e',
    pl: {
        sc: 'een',
        tr: ['ees', 'e\'en', 'eyes'],
        au: 'een'
    },
    gr: 'n',
    or: [
        [G.notes.or.as, 'ee'],
        ['(plural)', 'een(e), eeis'],
        [G.notes.or.ae, 'ēage']
    ],
    au: 'ee'
}, {
    sc: ['eediot', 'eejit'],
    en: 'idiot',
    tr: ['fool', 'fuil', 'feel', 'eedyit', 'idiwut'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'idiot'],
        [G.notes.or.me, 'idiot']
    ]
}, {
    sc: 'efternuin',
    tr: ['efternin', 'efterneen', 'efternoon'],
    en: 'afternoon',
    gr: 'noun',
    or: [
        [G.notes.or.as, 'efternone, efter none']
    ]
}, {
    sc: 'eneuch',
    en: 'enough',
    pr: ['inyuch', 'inyooch', 'unyooch', 'unooch', 'unyoch', 'eneugh'],
    tr: 'sufficient',
    hl: [],
    gr: ['n', 'adj', 'adv'],
    ex: 'I’v haed juist aboot eneuch o your haiverin'
}, {
    sc: 'environs',
    en: [
        ['the environment', 'surrounds']
    ],
    tr: 'environment',
    gr: 'n',
    or: [
        '?uissage as noun frae Modren English',
        G.notes.or.as + ' haes the verb <em>enveron, inviroun, inveroun</em> <em>(to encircle, surroond)</em>', ['frae the ' + G.notes.or.me, 'envirounen'],
        [G.notes.or.af, 'environner']
    ]
}, {
    sc: 'erse',
    pr: ['erse', 'airse'],
    en: 'arse',
    gr: 'n'
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
    sc: 'examination',
    en: [
        ['testing', 'a test', 'investigation', 'interrogation']
    ],
    tr: 'test',
    gr: 'n',
    or: [
        [G.notes.or.as, 'examinatioun, exemenatioun'],
        [G.notes.or.l, 'exāminātio']
    ],
    au: 'examination'
}, {
    sc: 'examinator',
    en: 'examiner',
    gr: 'n',
    or: [
        [G.notes.or.as, 'examinato(u)r'],
        [G.notes.or.l, 'examinator']
    ],
    au: 'examinator'
}, { // F
    sc: 'fankle',
    en: [
        ['tangle', 'muddle']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'fang'],
        [G.notes.or.anor, 'fang']
    ],
    au: 'fankle'
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
    sc: 'fecht',
    en: 'fight',
    tr: ['ficht', 'struggle', 'battle'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'fecht, feicht'],
        [G.notes.or.ae, 'feoht']
    ]
}, {
    sc: 'fechter',
    en: 'a fighter',
    tr: 'fighter',
    gr: 'n',
    or: [
        [G.notes.or.as, 'fichter, fechtar']
    ],
    ex: 'She’s a bonnie fechter, that ane!',
    au: 'fechter'
}, {
    sc: 'fechtin',
    en: 'fighting',
    tr: 'fechting',
    gr: 'vbl n',
    or: [
        [G.notes.or.as, 'fechting']
    ],
    ex: 'He wis liftit by the polis for fechtin'
}, {
    sc: 'film-makar',
    en: 'film-maker',
    tr: ['filmmaker', 'filmmakar'],
    gr: 'n'
}, {
    sc: 'film-makkin',
    en: 'film-making',
    tr: ['filmmaking', 'film making', 'filmmakkin'],
    gr: 'n',
    au: 'film-makkin'
}, {
    sc: 'finnd',
    en: [
        ['a find', 'discovery']
    ],
    tr: ['find', 'fin'],
    gr: 'n',
    or: 'noun isna fund in Aulder Scots',
}, {
    sc: 'fitba',
    pr: ['fitbaw', 'fitbaa'],
    en: 'football',
    gr: 'n',
    inf: 'The ‘l’ at the end o the Aulder Scots spellins (sic as ‘futebal’) is what’s kent as a ‘vouel lenth merker’ and wadna aye hae been soondit',
    or: [
        G.notes.or.as + ' <span>futebal(l), fuitbal, futbaw</span>', [G.notes.or.lme, 'fotebal']
    ]
}, {
    sc: 'foond',
    en: 'foundation',
    gr: 'n',
    or: 'see v',
    ex: 'They pit doun the foonds o the biggin'
}, {
    sc: 'foost',
    en: [
        ['staleness', 'mould', 'mustiness']
    ],
    gr: 'n',
    tr: ['fustiness', 'mildew', 'damp', 'must'],
    or: 'see adj'
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
    sc_alt: 'furthsettar',
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
    ],
    au: 'gloriosity'
}, {
    sc: 'gowk',
    en: [
        'the cuckoo',
        ['a fool', 'simpleton'],
        ['a joke, trick']
    ],
    gr: 'n',
    tr: ['cuckoo', 'fool', 'fuil', 'feel', 'joke'],
    or: [
        [G.notes.or.as, 'gowk, gouk'],
        [G.notes.or.anor, 'gaukr']
    ]
}, {
    sc: 'greet',
    en: 'a fit of weeping',
    tr: 'tears',
    hl: 'greet',
    gr: 'n',
    or: 'see v',
    ex: 'She felt better for hivin haed a guid greet'
}, {
    sc: 'guids',
    en: 'goods',
    gr: 'n',
    ex: 'The guids wis delivert in the efternuin'
}, { // H
    sc: 'haik',
    en: ['a person or animal given to roaming about', ['a trek', 'journey']],
    tr: 'trek',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'hame',
    en: 'home',
    gr: ['n', 'adv'],
    or: [
        [G.notes.or.as, 'hame, haim(e)'],
        [G.notes.or.ae, 'hām']
    ],
    ex: ['I’m awa hame'],
    au: 'hame'
}, {
    sc: 'haudin gaun',
    en: 'continuation',
    gr: 'n',
    au: 'haudin-gaun'
}, {
    sc: 'heat',
    pr: ['heet', 'hait'],
    en: 'heat',
    tr: ['warmth', 'hotness', 'hate'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'hete, heit, het, heyt'],
        [G.notes.or.ae, 'hǽtu']
    ],
    ex: 'Fit a heat!'
}, {
    sc: 'heid',
    pr: 'heed',
    en: 'head',
    gr: 'n',
    or: [
        [G.notes.or.as, 'heid, hede'],
        [G.notes.or.ae, 'hēafod']
    ],
    au: 'heid'
}, {
    sc: 'hirple',
    en: [
        ['a limp', 'the act of limping']
    ],
    tr: 'limp',
    gr: 'n'
}, {
    sc: 'horse',
    def: 'a huift, plant-eatin domesticatit mammal',
    pl: {
        sc: 'horse',
        tr: 'horses'
    },
    tr: 'hors',
    gr: 'n',
    or: [
        [G.notes.or.as, 'hors, horse'],
        [G.notes.or.ae, 'hors']
    ]
}, {
    sc: 'oor',
    sc_alt: 'hour',
    pr: 'oor',
    en: 'hour',
    gr: 'n',
    or: [
        [G.notes.or.as, 'hour, howr'],
        [G.notes.or.me, 'houre']
    ],
    ex: 'The forgaitherin o the management comatee is tae stert at twa oors, juist efter denner'
}, {
    sc: 'hoose',
    def: 'A place whaur fowk bides, the biggin whaur ye stey; a dwallin (ane o several in a biggin)',
    tr: ['hous', 'house'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'hous, hows, hus(e)'],
        [G.notes.or.ae, 'hūs']
    ],
    ex: [
        ['They’d juist aboot pit by eneuch siller for a deposit on a hoose'],
        G.ex.l1,
    ],
    au: 'hoose'
}, {
    sc: 'meat',
    sc_alt: 'mait',
    pr: 'mait',
    en: [
        ['food', 'sustenance'],
        'a meal',
        'meat'
    ],
    tr: ['meal', 'maet'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'mete, meit, met, mait, meat'],
        [G.notes.or.ae, 'mete']
    ],
    au: 'meat'
}, { // I
    sc: 'ilk',
    en: [
        ['a family', 'a race', 'a kind', 'a type']
    ],
    tr: ['family', 'race', 'kind', 'type', 'ilka'],
    hl: ['family', 'race', 'kind', 'type'],
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
        ['<em>law</em> the chyngin or replacement o a legal servitude or provision'],
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
    sc: 'jaiket',
    tr: 'jaicket',
    en: [
        ['coat', 'jacket']
    ],
    gr: 'n',
    au: 'jaiket'
}, {
    sc: 'accress',
    en: 'increase',
    gr: ['n', 'obsolete'],
    or: 'see v'
}, {
    sc: 'keech',
    def: ['a lump o excrement; filth, clart', 'haivers, bletheration'],
    tr: ['excrement', 'filth', 'clart', 'haivers', 'bletheration', 'nonsense', 'rubbish', 'pish', 'shite', 'jobby'],
    hl: ['excrement', 'filth', 'nonsense', 'rubbish'],
    gr: 'n',
    or: 'frae the Scots <i>cack</i>',
    ex: 'Ye’r talkin keech!',
    au: 'keech'
}, {
    sc: 'knawledge',
    en: 'knowledge',
    gr: 'n',
    au: 'knawledge'
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
    ],
    au: 'lad'
}, {
    sc: 'laddie',
    en: ['a young man', 'a male child', 'a male sweetheart', 'a son'],
    tr: ['young man', 'male child', 'male sweetheart', 'son', 'boy', 'loun', 'lad', 'man'],
    hl: ['young man', 'male child', 'male sweetheart', 'son', 'boy'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'laddie']
    ],
    ex: 'That’s Eck’s laddie, is it no?',
    au: 'laddie'
}, {
    sc: 'lair',
    en: [
        'lore',
        'teaching',
        ['learning', 'knowledge', 'education']
    ],
    gr: 'n',
    tr: ['instruct', 'lare'],
    au: 'lair'
}, {
    sc: 'lassie',
    en: ['a girl', 'a woman', 'a sweetheart', 'a female child'],
    tr: ['girl', 'woman', 'wuman', 'sweetheart', 'child', 'lass', 'quine', 'quinie', 'quean'],
    hl: ['girl', 'woman', 'wuman', 'sweetheart'],
    gr: 'n',
    au: 'lassie'
}, {
    sc: 'lawmakar',
    en: [
        ['lawmaker', 'legislator']
    ],
    gr: 'n',
    or: 'protologism steidit on English <em>lawmaker</em>',
    au: 'law-makar'
}, {
    sc: 'licht',
    en: 'light',
    gr: ['n', 'adj'],
    or: [
        [G.notes.or.as, 'licht, lycht, lyght'],
        [G.notes.or.ae, 'lēoht']
    ]
}, {
    sc: 'loan',
    def: ['an unpedmentit or girssie track for cattle; aft-times in steid names', 'a througate, street or road', ['the ferm gate airtin til the fermhoose', 'the grund adjynin a fermhoose', 'the causey']],
    tr: ['lane', 'track', 'street', 'road', 'path', 'causey', 'gate', 'gait', 'througate'],
    hl: ['lane', 'track', 'street', 'road', 'path'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'lone, loan, loyne'],
        [G.notes.or.ae, 'lanu']
    ],
    au: 'loan'
}, {
    sc: 'loch',
    def: [
        ['a natural-formed area o watter surroundit by laund (rangin in bouk frae muckle doun til lairge pownds); aft-times in street names', 'an inlat o the sea'], 'a dub'
    ],
    tr: ['lake', 'pond', 'puddle', 'pool', 'inlet', 'inlat', 'watter', 'dub'],
    hl: ['lake', 'pond', 'puddle', 'pool'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'loch, louch(e)'],
        [G.notes.or.ga, 'loch']
    ],
    au: 'loch'
}, {
    sc: 'loun',
    pr: 'loon',
    en: [
        ['a young man', 'boy', 'youth'],
        ['a young farm worker'],
        ['a male child', 'son', 'baby boy']
    ],
    tr: ['young man', 'farm-boy', 'farm boy', 'lad', 'laddie', 'man', 'son', 'child', 'bairn', 'wean', 'baby'],
    hl: ['young man', 'farm-boy', 'farm boy', 'son'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'loun']
    ],
    au: 'loun'
}, { // M
    sc: 'maiter',
    en: 'matter',
    tr: ['maitter', 'metter', 'material', 'substance', 'subject', 'theme', 'undertaking', 'concern', 'business', 'issue'],
    gr: ['n', 'v'],
    or: [
        [G.notes.or.as, 'mater(e)'],
        [G.notes.or.me, 'mater'],
        [G.notes.or.l, 'māteria']
    ],
    ex: 'That’s aa I hiv tae sae aboot the maiter!'
}, {
    sc: 'mak',
    en: [
        ['form', 'shape', 'a (distinctive) style of manufacture'],
        ['the action or process of manufacturing (an object) or developing (a character)']
    ],
    tr: ['style', 'build', 'appearance'],
    hl: [],
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
    sc: 'micht',
    en: 'might',
    tr: ['ability', 'capacity', 'strength', 'strenth', 'power', 'pouer', 'authority', 'wealth', 'violence', 'force'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'mycht, micht'],
        [G.notes.or.ae, 'meaht']
    ],
    ex: 'He poued the pleuch wi aw his micht',
    au: 'micht'
}, {
    sc: 'mind',
    tr: 'mynd',
    def: 'the mind; that whilk is brocht back tae mind or mindit, memory, a mindin',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'mindin',
    en: [
        ['a memory', 'a recollection']
    ],
    tr: ['memory', 'recollection', 'mynd'],
    gr: 'n'
}, {
    sc: 'money',
    en: [
        ['money', 'wealth'],
        ['coinage', 'currency']
    ],
    tr: 'siller',
    hl: [],
    gr: 'n',
    or: [
        [G.notes.or.as, 'money, mone, mony, monay'],
        [G.notes.or.me, 'monei']
    ],
    au: 'money'
}, { // N
    sc: 'narrative',
    def: [
        ['an accoont o events', 'the action o relatin']
    ],
    tr: ['account', 'accoont', 'recital', 'statement'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'narrative'],
        [G.notes.or.mf, 'narrative']
    ],
    au: 'narrative'
}, {
    sc: 'naturality',
    en: [
        ['innate ability or intelligence', 'talent']
    ],
    tr: 'brilliance',
    gr: 'n',
    or: [
        [G.notes.or.as, 'naturalité, naturalty'],
        [G.notes.or.f, 'naturalité'],
        [G.notes.or.l, 'nātūrālitas']
    ]
}, {
    sc: 'netwark',
    en: 'network',
    gr: 'n',
    ex: [G.ex.s, G.ex.t]
}, {
    sc: 'nicht',
    en: 'night',
    gr: 'n',
    au: 'nicht'
}, {
    sc: 'nieve',
    en: 'fist',
    gr: 'n',
    or: [
        [G.notes.or.as, 'neiv(e), neve, nefe, neif(f'],
        [G.notes.or.anor, 'hnefi']
    ],
    au: 'nieve'
}, {
    sc: 'niffer',
    en: [
        ['an exchange', 'barter']
    ],
    tr: ['exchange', 'transaction', 'deal', 'business'],
    hl: ['exchange', 'transaction', 'deal'],
    gr: 'n'
}, { // O
    sc: 'onhaudin',
    en: 'continuation',
    gr: 'n',
    au: 'onhaudin'
}, {
    sc: 'onybody',
    en: 'anybody',
    tr: ['oniebody', 'emdie', 'emdy'],
    gr: 'n'
}, {
    sc: 'oot',
    en: 'out',
    gr: ['n', 'v', 'adj', 'adv', 'prep', 'interj'],
    or: [
        [G.notes.or.as, 'out, owt'],
        [G.notes.or.ae, 'ūt']
    ],
    au: 'oot'
}, {
    sc: 'ordinar',
    en: [
        ['the usual state of things', 'what is customary or habitual']
    ],
    tr: 'ordinary',
    gr: 'n',
    or: [
        [G.notes.or.me, 'ordiner, ordinārī'],
        [G.notes.or.mf, 'ordinaire']
    ]
}, {
    sc: 'origin',
    en: 'origin',
    gr: 'n',
    au: 'origin'
}, {
    sc: 'ocht',
    en: [
        ['aught', 'anything'], 'nothing'
    ],
    gr: 'n',
    ex: ['Jamie didna hae the time tae mak ocht for the bake sale', 'Haivers! That’s ocht ava tae dae wi it'],
    au: 'ocht'
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
    ex: 'The Labour Pairty tyned owerance o the cooncil'
}, {
    sc: 'pairlament',
    en: 'parliament',
    gr: 'n',
    or: [
        [G.notes.or.as, 'perlament, pairliament, parliament'],
        [G.notes.or.me, 'parlement']
    ],
    au: 'pairlament'
}, { // P
    sc: 'pairt-takar',
    tr: 'pairt takar',
    en: ['stakeholder', 'supporter'],
    gr: 'n',
    ex: G.ex.k
}, {
    sc: 'parrock',
    def: ['an enclosure or pen', 'a pen for sheep', 'a boorach o fowk, bease or objects croudelt close thegither'],
    tr: ['enclosure', 'pen', 'paddock', 'sheep pen', 'boorach', 'bourach', 'parreck', 'parroch'],
    hl: ['enclosure', 'paddock', 'sheep pen', 'pen'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'parrok'],
        [G.notes.or.ae, 'pearroc']
    ]
}, {
    sc: 'paven',
    en: 'pavane',
    tr: ['pavene', 'paven'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'paven, pavin, pavane']
    ]
}, {
    sc: 'pey',
    en: [
        ['pay', 'wages', 'salary']
    ],
    gr: 'n',
    tr: ['compensation', 'payment', 'peyment', 'wage'],
    hl: ['compensation', 'payment', 'wage'],
    or: [
        [G.notes.or.as, 'pay, pey'],
        [G.notes.or.an, 'paie, pay']
    ]
}, {
    sc: 'peyment',
    en: 'payment',
    gr: 'n',
    or: [
        [G.notes.or.as, 'payment, peyment'],
        [G.notes.or.an + ', ' + G.notes.or.mf, 'paiement']
    ],
    au: 'peyment'
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
        [G.notes.or.as, 'poet, poiet, poyet']
    ],
    au: 'poyet'
}, {
    sc: 'poyem',
    en: 'poem',
    gr: 'n',
    or: [
        [G.notes.or.as, 'poyeme, poyam']
    ]
}, {
    sc: 'poyetry',
    en: 'poetry',
    gr: 'n',
    or: [
        [G.notes.or.as, 'poetry, poetrie, poyetrie']
    ],
    au: 'poyetry'
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
    hl: ['young woman', 'wench', 'girl', 'schoolgirl', 'sweetheart', 'daughter'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'quene, quein'],
        [G.notes.or.ae, 'cwēn, cwene']
    ],
    au: 'quine'
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
    pr: ['yös', 'yis', 'ees', 'yoos', 'ös', 'yees'],
    tr: ['yiss', 'uise', 'yaise', 'yaize', 'yuise', 'euse', 'yeuse', 'eese'],
    hl: ['yiss', 'ees', 'yuise', 'ös', 'euse', 'yeuse', 'yeese', 'eese'],
    en: 'use',
    gr: 'n',
    au: 'uiss'
}, {
    sc: 'raivel',
    en: [
        ['a muddle', 'tangle', 'confusion']
    ],
    tr: ['ravel', 'raffle', 'muddle', 'disorder'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'ravel'],
        'see v'
    ],
    ex: 'I wis in a raivel'
}, {
    sc: 'raivelment',
    en: [
        ['confusion', 'a tangle']
    ],
    tr: 'ravelment',
    gr: 'n',
    au: 'raivelment'
}, {
    sc: 'rax',
    def: [
        ['streetch', 'a streetch', 'a pull'],
        'a stave (o a body pairt)',
        ['reakin', 'a reak']
    ],
    tr: ['streetch', 'stretch', 'pull', 'stave', 'reakin', 'reak', 'stretching', 'strain', 'sprain', 'reaching', 'reach'],
    gr: 'n',
    or: 'see verb'
}, { // R
    sc: 'remeid',
    en: [
        ['remedy', 'redress']
    ],
    tr: ['remeed', 'relief', 'cure'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'remed(e)'],
        [G.notes.or.an, 'remeide'],
        [G.notes.or.an + ', ' + G.notes.or.mf, 'remede']
    ]
}, {
    sc: 'retiral',
    pr: 'reteeral',
    en: 'retirement',
    gr: 'n',
    or: [
        ['a Modren Scots coinage; Aulder Scots haes the verb <em>retere, reteir</em>, frae the ' + G.notes.or.mf, 'retirer']
    ]
}, {
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
    sc: 'rift',
    en: [
        ['a belch', 'fart']
    ],
    tr: ['belch', 'boak', 'boke', 'bowk'],
    hl: 'belch',
    gr: 'n',
    or: [
        [G.notes.or.as, 'rift, ryfft'],
        'see v'
    ],
    au: 'rift'
}, {
    sc: 'road',
    def: [
        ['a braid route atween twa steids', 'a gate']
    ],
    tr: ['gate', 'gait', 'route', 'raid', 'street'],
    hl: ['route', 'street'],
    gr: 'n',
    or: 'SND states that the mak <em>road</em> (frae Auld English <em>rād</em>) is a 16t century borraein frae English, the historical Scots mak bein <em>raid</em>'
}, {
    sc: 'roaster',
    def: 'a body that haivers, fashes fowk wi their ill laits, or is thocht tae be makkin an idiot o theirsels',
    gr: ['n', 'informal', 'derogatory']
}, { // S
    sc: 'sair',
    en: [
        ['an injury', 'wound', 'disease'],
        ['sorrow', 'grief', 'anguish']
    ],
    tr: ['injury', 'affliction', 'sadness', 'suffering', 'sare'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'sar(e), sair'],
        [G.notes.or.ae, 'sār']
    ],
    ex: ['He wis saufed frae seekness and frae sair'],
}, {
    sc: 'sair heid',
    en: 'headache',
    tr: ['sore head', 'sore heed', 'sair heed', 'sore heid', 'sair head'],
    gr: 'comp. n',
    or: [
        [G.notes.or.as, 'sair hede']
    ]
}, {
    sc: 'sel-law',
    en: 'self-governance',
    tr: ['sel law', 'self governance'],
    gr: 'n',
    or: 'protologism'
}, {
    sc: 'sib',
    en: 'a relative, or kinsman or kinswoman',
    tr: ['relative', 'kinsman', 'kinswoman'],
    gr: 'n',
    or: 'see adj'
}, {
    sc: 'signatur',
    en: 'signature',
    gr: 'n'
}, {
    sc: 'siller',
    en: ['money', 'silver'],
    tr: ['funds', 'cash', 'wealth', 'money'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'silver, siller'],
        [G.notes.or.ae, 'seolfor']
    ],
    ex: 'I’ll send ye the siller',
    au: 'siller'
}, {
    sc: 'sklent',
    en: [
        ['a slope', 'an incline'],
        ['a sidelong glance', 'a squint']
    ],
    tr: ['brae', 'slope', 'incline', 'glance', 'squint'],
    hl: ['slope', 'incline', 'glance', 'squint'],
    gr: 'n',
    au: 'sklent'
}, {
    sc: 'sklent',
    en: [
        ['a rip', 'a tear']
    ],
    tr: ['rip', 'tear'],
    gr: 'n'
}, {
    sc: ['snaw', 'snaa'],
    en: 'snow',
    tr: 'sna',
    gr: 'n',
    or: [
        [G.notes.or.as, 'snaw'],
        [G.notes.or.xx, 'snāw']
    ]
}, {
    sc: 'springheid',
    pr: 'springheed',
    en: [
        ['source', 'origin']
    ],
    gr: 'n',
    au: 'springheid'
}, {
    sc: 'steerar',
    sc_alt: 'steerer',
    en: 'activist',
    gr: 'n',
    or: '<span>steer</span> ‘tae steer, gie airt til’ wi <span>-ar</span> suffix. Baith <span>-ar</span> an <span>-er</span> kythe on the SLC wabsite. Waled <span>-ar</span> here by analogy wi <span>co-airtar</span>, <span>pairt-takar</span> and <span>lawmakar</span>'
}, {
    sc: 'street',
    en: 'a street',
    tr: 'street',
    gr: 'n',
    or: [
        [G.notes.or.as, 'streit, stret(e), street, streyt'],
        [G.notes.or.ae, 'strǣt']
    ]
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
    sc: 'system',
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
    ex: 'We shoud hae it finisht by than',
    or: [
        [G.notes.or.as, 'than, thyne'],
        [G.notes.or.ae, 'ðanne']
    ]
}, {
    sc: 'thesaurer',
    en: 'treasurer',
    gr: 'n',
    or: [
        [G.notes.or.as, 'thesaurar(e), ~tresorare'],
        [G.notes.or.l, 'thēsaurārius'],
        [G.notes.or.af, 'tresorer']
    ],
    au: 'thesaurer'
}, {
    sc: 'thesaurery',
    en: 'treasury',
    gr: 'n',
    tr: 'treasurership',
    or: [
        [G.notes.or.as, 'thesaurary, thesaurie, tresory']
    ]
}, {
    sc: 'thesis',
    pl: {
        sc: 'theses'
    },
    en: 'thesis',
    gr: 'n',
    or: [
        [G.notes.or.as, 'thesis, these'],
        ['(plural)', 'theses'],
        [G.notes.or.gk, 'θέσις'],
        [G.notes.or.l, 'thesis'],
        [G.notes.or.mf, 'thèse']
    ]
}, {
    sc: 'think',
    en: 'think',
    gr: 'n',
    tr: ['thought', 'idea', 'opinion', 'thinking'],
    hl: ['thought', 'idea', 'opinion'],
    or: 'see v',
    ex: 'I’ll hae a think',
}, {
    sc: ['thinking', 'hinking'],
    pr: ['thinkin', 'hinkin'],
    en: 'thinking',
    tr: 'considering',
    gr: 'n',
    ex: 'I wis hinkin I’d gie the perty a miss gin it’s awricht wi yoursel',
}, {
    sc: 'thocht',
    en: 'thought',
    gr: 'n',
    tr: ['idea', 'intention', 'purpose', 'opinion', 'anxiety', 'care', 'sorrow', 'burden', 'worry'],
    or: [
        [G.notes.or.as, 'thocht, thoucht, thought'],
        [G.notes.or.ae, 'ðōht']
    ],
    ex: ['It’s a thocht tae walk the dug whan it’s sae cauld ootside']
}, {
    sc: ['a thocht', 'a thochtie'],
    def: 'a wee bit, somewhat',
    tr: ['bit', 'thocht', 'thochtie'],
    gr: 'n',
    ex: 'He arrived at the perty a thochtie afore us'
}, {
    sc: 'toun',
    pr: 'toon',
    def: [
        ['an area wi a name and boonds whaur fowk haes sattelt', 'a burgh', 'a city']
    ],
    en: 'town',
    gr: 'n',
    or: [
        [G.notes.or.as, 'toun, town(e), ton(e)'],
        [G.notes.or.ae, 'tūn']
    ],
    au: 'toun'
}, {
    sc: 'tred',
    en: 'trade',
    gr: 'n',
    ex: ['He\'s a jyner tae tred', G.ex.l]
}, {
    sc: 'troosers',
    en: 'trousers',
    tr: 'breeks',
    gr: 'n'
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
    sc: ['wabsteid', 'wabsite'],
    en: 'website',
    pr: ['wabsteed', 'wabsyt'],
    tr: ['websteid'],
    gr: 'n',
    au: ['wabsite', 'wabsteid']
}, {
    sc: 'wale',
    en: 'choice',
    gr: 'n',
    tr: ['pick', 'selection'],
    or: [
        [G.notes.or.as, 'waill'],
        [G.notes.or.an, 'val']
    ]
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
    ],
    au: 'wark'
}, {
    sc: 'watter',
    en: 'water',
    gr: ['n', 'v'],
    or: [
        [G.notes.or.as, 'watter, wattir'],
        [G.notes.or.ae, 'wæter <span>(noun)</span>, wæterian <span>(verb)</span>']
    ],
    au: 'watter'
}, {
    sc: 'wirker',
    sc_alt: 'warker',
    pr: ['wirkur', 'wurkur'],
    en: 'worker',
    gr: 'n',
    ex: 'He’s an awfu haurd wirker',
    or: [
        [G.notes.or.as, 'wirkar, wyrkar(e)']
    ]
}, {
    sc: 'wuman',
    en: 'woman',
    pl: {
        sc: 'wemen',
        tr: ['weemen', 'weemin', 'weimen', 'wimmen', 'wimen', 'women']
    },
    gr: 'n',
    tr: ['wummin', 'wumman'],
    or: [
        [G.notes.or.as, 'woman, weman'],
        ['(plural)', 'wemen, weimen, weemen'],
        [G.notes.or.ae, 'wīfmann']
    ],
    au: 'wuman'
}, {
    sc: 'wynd',
    def: '<em>fund mainly in street names</em> a nairae, aft-times windin street or pass, maist aften in touns an cities',
    tr: ['street', 'alley', 'road', 'gate', 'gait'],
    hl: ['street', 'alley', 'road'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'wynd, wyne, wind, weynd'],
        [G.notes.or.ae, 'gewind']
    ]
}, {
    sc: 'yett',
    en: ['gate', 'a pass between hills'],
    tr: ['yate', 'entrance', 'pass'],
    gr: 'n',
    ex: [G.ex.j1, G.ex.m1],
    or: [
        [G.notes.or.as, 'yett, Ȝet(t), yate'],
        [G.notes.or.ae, 'geat']
    ]
}, { // Y
    sc: 'yoon',
    def: 'a derogatory term for unionist; a body that’s in favours o the union atween Scotland and England',
    gr: ['n', 'informal', 'derogatory']
}, { // Z
    sc: 'zoomer',
    def: 'a body that’s ragglish or allevolie',
    gr: ['n', 'informal', 'derogatory']
});
