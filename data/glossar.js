var GLOSSAR = GLOSSAR || {};

var G = GLOSSAR;

G.notes = {
    a: 'protologism; frae analogy wi Dutch and French-influenced <em>Armenie</em>, <em>Roumainie</em>, <em>Roushie</em> etc., vs <em>-a</em> or <em>-ia</em> (meanin ‘land’ or ‘steid’) that English haes borraed frae the Laitin', // Californie et al
    b: '<em>-ae</em> and <em>-y/-ie</em> steid-name endins shaws Dutch and French influence, vs <em>-a</em> or <em>-ia</em> (meanin ‘land’ or ‘steid’) that English haes borraed frae the Laitin', // Slovakie et al
    c: 'The etymology o <em>no</em>, <em>nae</em>, <em>na</em> etc. is gey quirkie. Consult the <a href="https://dsl.ac.uk" target="_blank">DSL</a> and <a href="https://edinburghuniversitypress.com/catalog/product/view/id/19910/s/book-concise-scots-dictionary" target="_blank">CSD2</a> for mair',
    or: {
        af: 'Auld French',
        mf: 'Middle French',
        f: 'French',
        an: 'Anglo-Norman',
        l: 'Laitin',
        ga: 'Gaelic',
        nfd: 'northren French dialect',
        ae: 'Auld English',
        me: 'Middle English',
        lme: 'Late Middle English',
        ms: 'Middle Scots',
        es: 'Early Scots',
        ems: 'Early Middle Scots',
        lms: 'Late Middle Scots',
        mods: 'Modren Scots',
        emods: 'Early Modren Scots',
        emods2: 'Earlier Modren Scots',
        anor: 'Auld Norse',
        as: 'Aulder Scots',
        d: 'Dutch',
        md: 'Middle Dutch',
        eme: 'Early Modren English',
        mode: 'Modren English',
        mlg: 'Middle Laich German',
        rl: 'Roman Law',
        it: 'Italians',
        gk: 'Greek'
    }
};

G.ex = {
    a: "Alasdair and Ashley wis feart they wadna win at the kirk in time tae be mairit",
    b: "It wis that thrang Isobel didna ken whan she wad get oot o wark",
    c: "I kenna what ye mean — ye’r haiverin, mun!",
    d: "I wadna lat it fash ye",
    e: "The CEO luit skairhauders speir at him efter the meetin",
    f: "Her depute gree’d tae tak in haund the airtin o the policy and its pittin intil effect",
    g: "It wis a gey and braw day",
    h: "I ken brawly richt bi wrang!",
    i: "Jamie wis in a swither aboot what Hogmanay perty tae gang til",
    j: "As the ae guardian o Scots it faws til us tae gie this hamelt leid bield, and mak namely its pairt in Scotland’s identity nou and in time tae come",
    k: "We ar wirkin nou wi aw pairt-takars for tae deliver on the ettles that’s intil the policy",
    l: "In terms o tred, o the guids and services Scotland inbrings, aroond 60 per cent is thocht tae be frae the lave o the Unitit Kinrick",
    m: "The First Minister wrate til her cabinet secretar anent the forementiont policy",
    n: "I’m meetin up wi an auld freend the day",
    o: "The Fisk Secretar-depute will the day set furth new wittins anent the proponed tax exemptions",
    p: "The day’s gemm agin Aiberdeen will be played at hame",
    q: "Jeannie stuid anent him, fair pecht",
    r: "Mind aye tae be furthie til unco fowk",
    s: "A new pipe netwark inbrocht watter tae the hoose",
    t: "The netwark wis doun sae he couldna send ony emails",
    u: "The heezin up o hoose prices and financial mercat speculation thegither wis aye mair like tae gar the economy clyte",
    v: "He gied an unco braw performance",
    w: "The new symphony is a stuir and sonsie wark, if a bittie wrocht-up in pairts",
    x: "Shuirly the’r mair tae the story than that",
    y: "The pub wis mair thrang than they’d jaloused it wad be",
    z: "I jaloused I’d better haud ma tongue!",
    a1: "Dae ye hae anither ane o thir?",
    b1: "The’r ower muckle guid stuff on TV thir days that I hinna the time tae watch it aw",
    c1: "I wad luve tae stey and hae a bit blether wi ye, but I maun be gettin hame",
    d1: "Stewart haed aboot fower hunder poond in his bank accoont; Ruth haed mair",
    e1: "Oot o the lot o us I’d haen the maist beers",
    f1: "Rax me ane o thae ile filters, wad ye?",
    g1: "The app’s uiser interface is juist what the client’s ettlin efter",
    h1: "I’v juist gotten stertit the noo sae ye’ll hae tae gie me a bit mair time",
    i1: "The Green Pairty convener wis ettlin tae appynt a depute by the end o the simmer",
    j1: "Mind and steek the yett ahint ye",
    k1: "I wis in an awfie raivel",
    l1: "It’s yersel! Come awa ben the hoose",
    m1: "He’s as daft as a yett in a windy day",
    n1: "We can hoose the kye in the byre the nicht"
};

G.pr = {
    juist: ['jist', 'joost', 'jeest', 'jeust', 'doost', 'dist']
};

G.dict = [{
    sc: ['ay', 'aye'],
    en: 'yes',
    gr: 'exclamation'
}, {
    sc: 'and',
    pr: 'an',
    tr: 'an',
    en: 'and',
    gr: ['conj']
}, {
    sc: 'anent',
    en: [
        ['opposite', 'in front of', 'before'],
        ['concerning', 'about', 'in view of']

    ],
    gr: ['prep', 'formal'],
    tr: ['regarding', 're', 'anenst', 'about'],
    hl: ['regarding', 're', 'anent', 'aboot'],
    or: [
        [G.notes.or.as, 'anent'],
        [G.notes.or.ae, 'on efen']
    ],
    ex: [G.ex.q, G.ex.o]
}, { // B
    sc: 'ben',
    en: 'through the house, towards the inner part',
    gr: 'prep',
    or: [
        [G.notes.or.as, 'ben(n), bene'],
        [G.notes.or.ae, 'binnan']
    ],
    ex: G.ex.l1
}, {
    sc: 'binna',
    en: 'don\'t be',
    tr: ['do not be', 'binnae'],
    gr: ['imperative']
}, {
    sc: 'binna',
    en: [
        ['unless', 'except']
    ],
    tr: 'binnae',
    gr: 'conj',
    au: 'binna'
}, {
    sc: 'binna',
    en: 'except for',
    tr: 'binnae',
    gr: ['prep', 'literar']
}, {
    sc: ['because', 'acause'],
    en: 'because',
    gr: ['conj']
}, {
    sc: 'but',
    en: [
        ['out or away from', 'over', 'across', 'through toward the outer part of the house']
    ],
    tr: ['oot', 'out', 'awa frae', 'ower', 'athort', 'athwart'],
    hl: ['oot', 'out', 'awa frae', 'ower', 'athwart'],
    gr: 'prep',
    or: 'see adv'
}, { // E
    sc: 'efter',
    pr: ['efter', 'aifter'],
    en: ['after', 'later'],
    tr: 'syne',
    hl: [],
    gr: ['adv', 'prep', 'conj'],
    or: [
        [G.notes.or.as, 'efter, eftir'],
        [G.notes.or.ae, 'æfter']
    ],
    ex: 'I’ll see ye efter!',
    au: 'efter'
}, {
    sc: 'awbody',
    en: 'everyone',
    tr: 'everybody',
    gr: 'pronoon'
}, {
    sc: 'awthing',
    en: 'everything',
    tr: 'awthin',
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'all thing, althing']
    ]
}, { // F
    sc: 'for',
    pr: ['faur', 'fur', 'fir', 'fer'],
    en: 'for',
    gr: ['prep', 'conj'],
    or: [
        [G.notes.or.as, 'for, fore, foir'],
        [G.notes.or.ae, 'for']
    ],
    ex: ['Ar ye for gaun oot efter?', G.ex.k]
}, {
    sc: 'forby',
    sc_alt: 'forbye',
    pr: 'forBye',
    en: [
        ['besides', 'in addition to'],
        ['except'],
        ['beside', 'beyond'],
        ['let alone', 'not to mention', 'far from', 'much less']
    ],
    tr: 'also',
    hl: 'forby',
    gr: ['prep']
}, {
    sc: ['fae', 'frae', 'thrae'],
    en: 'from',
    gr: ['prep', 'conj'],
    or: [
        [G.notes.or.as, 'fra, frae'],
        [G.notes.or.anor, 'frá']
    ]
}, {
    sc: ['if', 'gif'],
    en: 'if',
    tr: 'gin',
    hl: 'gif',
    gr: ['conj'],
    or: [
        [G.notes.or.as, 'gef, gefe, geve']
    ]
}, {
    sc: 'gin',
    en: [
        ['if', 'whether'], 'if only'
    ],
    tr: 'gif',
    hl: 'gin',
    gr: ['conj'],
    or: [
        [G.notes.or.lms + ' haes', 'gin']
    ],
    au: 'gin'
}, {
    sc: 'hersel',
    en: 'herself',
    tr: 'hersell',
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'hirself, hirselwyn, hir sell'],
        [G.notes.or.ae, 'hire self']
    ]
}, { // H
    sc: 'her',
    pr: 'hur',
    en: 'her',
    tr: 'hir',
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'hir, hyr(e)'],
        [G.notes.or.ae, 'hire']
    ]
}, {
    sc: 'him',
    en: 'him',
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'him, hym'],
        [G.notes.or.ae, 'him']
    ]
}, {
    sc: 'himsel',
    en: 'himself',
    gr: 'pronoon',
    tr: ['hissel', 'himsell'],
    hl: 'himsell',
    or: [
        [G.notes.or.as, 'himself, himsell'],
        [G.notes.or.ae, 'him self']
    ]
}, {
    sc: 'hissel',
    en: 'himself',
    gr: 'pronoon',
    tr: ['himsel', 'hissell'],
    hl: 'hissell',
    or: [
        [G.notes.or.as, 'his( )self, his sel']
    ]
}, { // I
    sc: 'ilk',
    en: [
        ['each one', 'every one']
    ],
    tr: 'ilka',
    hl: 'ilk',
    gr: 'pronoon'
}, {
    sc: ['ilka ane', 'ilkane'],
    en: [
        ['each one', 'everyone']
    ],
    gr: 'pronoon'
}, {
    sc: ['in', 'i'],
    en: 'in',
    tr: 'i\'',
    gr: ['prep', 'adv', 'adj', 'v'],
    or: [
        [G.notes.or.as, 'in'],
        [G.notes.or.ae, 'in']
    ]
}, {
    sc: ['wha', 'fa'],
    pr: ['whah', 'whau', 'whae', 'whiu', 'fa', 'a'],
    en: 'who',
    tr: ['whae', 'whay', 'whey'],
    gr: 'pronoon'
}, { // M
    sc: 'maist',
    def: [
        ['the mucklest amoont, the lairgest nummer, the majority']
    ],
    tr: ['most', 'majority', 'maste'],
    gr: 'determiner and pronoon',
    or: [
        [G.notes.or.as, 'mast(e), maist(e)'],
        [G.notes.or.ae, 'mǣst, māst']
    ],
    ex: [G.ex.e1, 'Maist o the dishes wis duin']
}, {
    sc: 'michty',
    def: 'for tae shaw surprise or that ye’r aw het up anent something',
    gr: 'interj',
    ex: ['Michty me!', 'Michty, what a weather!']
}, { // N
    sc: 'naebody',
    en: [
        ['no one', 'nobody']
    ],
    tr: ['no-one', 'noone'],
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'na body']
    ]
}, {
    sc: 'naewey',
    en: [
        ['on no account', 'nowhere', 'no way']
    ],
    tr: ['naewye', 'nae wey', 'naewhaur', 'on nae accoont']
}, {
    sc: 'naewhaur',
    en: 'nowhere',
    tr: ['naewhere']
}, {
    sc: 'nor',
    pr: ['naur', 'nir', 'nar'],
    en: ['than', 'and not', '(but) that'],
    gr: ['conj'],
    tr: ['but that'],
    or: [
        [G.notes.or.as, 'nor'],
        [G.notes.or.me, 'nor']
    ]
}, {
    sc: 'ane',
    pr: ['ane', 'een', 'yin', 'wan'],
    en: 'one',
    gr: 'cardinal nummer',
    tr: ['ae', 'ain', 'ann', 'yae', 'yay'],
    hl: ['ane', 'ain', 'yin', 'wan', 'een', 'ann'],
    inf: '<span>Ane</span> is aften uised the day as an adjective (as weel as bein the cardinal nummer <span>ane</span>), whauras in traditional spoken Modren Scots ye’r mair likely tae hear <span>ae</span> (also pronounced ‘yae’) as the adjective. <span>Ane</span> wis typically the written adjective in Aulder Scots'
}, {
    sc: 'twa',
    pr: ['twah', 'twae'],
    en: 'two',
    gr: ['cardinal nummer', 'adj'],
    or: [
        [G.notes.or.as, 'twa, tua, twae'],
        [G.notes.or.ae, 'twā']
    ]
}, {
    sc: 'three',
    en: 'three',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'fower',
    en: 'four',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'five',
    en: 'five',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'sax',
    en: 'six',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'seiven',
    en: 'seven',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'echt',
    en: 'eight',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'nine',
    en: 'nine',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'ten',
    en: 'ten',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'eleiven',
    en: 'eleven',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'twal',
    en: 'twelve',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'thirteen',
    en: 'thirteen',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'fowerteen',
    en: 'fourteen',
    gr: ['cardinal nummer', 'adj'],
    au: ['fowerteen', 'fowerteen1']
}, {
    sc: 'fifteen',
    en: 'fifteen',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'saxteen',
    en: 'sixteen',
    gr: ['cardinal nummer', 'adj']
}, {
    sc: 'ony',
    en: [
        ['any', 'either']
    ],
    gr: 'pronoon',
    or: 'see adj'
}, { // O
    sc: 'o',
    pr: ['oh', 'ae', 'uh'], // Eikit to tr[] due to word-length threshold
    en: 'of',
    tr: ['ey', 'ay', 'y', 'u', 'o\'', 'ae', 'uh', 'oh'],
    gr: 'prep',
    or: [
        [G.notes.or.as, 'of, off'],
        [G.notes.or.ae, 'of']
    ],
    au: ['o', 'o1']
}, {
    sc: 'onyane',
    en: 'anyone',
    gr: ['pronoon']
}, {
    sc: 'oor',
    pr: 'oor',
    en: 'our',
    tr: 'wir',
    gr: ['possesive pronoon']
}, {
    sc: 'ower',
    pr: ['uower', 'oar', 'oor', 'err'],
    en: [
        ['above', 'cross'],
        ['down from', 'out of', 'out at'],
        ['beyond the control or capabilities of', 'too much for']
    ],
    tr: ['owre', 'over'],
    gr: 'prep',
    or: 'see adv'
}, {
    sc: 'wir',
    pr: ['wir', 'wur', 'war', 'weer', 'wor'],
    en: 'our',
    tr: 'oor',
    hl: 'wir',
    gr: ['possesive pronoon'],
    au: 'wir'
}, {
    sc: ['whaniver', 'faniver'],
    en: 'whenever',
    tr: ['wheniver', 'fanever']
}, {
    sc: ['what', 'fat'],
    sc_alt: ['whit', 'fit'],
    pr: ['what', 'whaut', 'whit', 'whut', 'fit', 'fut', 'fat', 'ut'],
    en: 'what',
    gr: ['adj', 'adv', 'pronoon', 'conj']
}, {
    sc: 'wi',
    pr: ['wi', 'wae', 'w'],
    en: 'with',
    gr: ['preposition']
}, {
    sc: ['whiles', 'fyles'],
    pr: ['whilez', 'filez'],
    en: [
        ['while', 'whilst']
    ],
    gr: ['conj']
}, {
    sc: ['thay', 'they'],
    en: 'they',
    tr: ['thai']
}, {
    sc: ['I', 'A', 'ah', 'eh'],
    pr: ['ah', 'aw', 'eh', 'eye'],
    en: 'I',
    tr: ['e'],
    gr: 'first personal pronoon',
    ex: ['I ken whit ye mean', 'I stey in the wast end o Edinburgh'],
    or: [
        [G.notes.or.as, 'I'],
        [G.notes.or.ae, 'ic']
    ]
}, {
    sc: 'the',
    en: 'the'
}, {
    sc: ['thare', 'there'],
    en: 'there',
    au: 'the'
}, {
    sc: 'particular',
    pr: ['purTikyulur', 'purTiklur', 'parTeekyulur', 'parTeeklur'],
    sc_alt: ['parteecular'],
    en: 'particular',
    tr: 'partiecular',
    gr: 'adj'
}, {
    sc: 'syne',
    pr: ['sine', 'seen'],
    en: 'after',
    tr: 'efter',
    gr: 'prep',
    or: 'see adv'
}, {
    sc: 'syne',
    pr: ['sine', 'seen'],
    en: [
        ['since', 'from the time that'],
        ['since', 'because', 'seeing that']
    ],
    gr: 'conj',
    or: 'see adv'
}, { // T
    sc: 'til',
    en: 'to',
    gr: 'prep',
    inf: '<em>til</em> is whiles uised only afore vouels and the letter h, and aften no afore verbs',
    ex: ['I walkit ower and spak til him', G.ex.i]
}, {
    sc: 'thae',
    en: 'those',
    tr: ['they', 'thai', 'ey'],
    gr: 'pron pl, dem adj',
    or: [
        [G.notes.or.as, 'tha(i), thay, thae'],
        [G.notes.or.ae, 'ðā']
    ],
    ex: [G.ex.f1, 'Lat’s hae a blether aboot thae twa issues ye brocht up in the meetin']
}, {
    sc: ['than', '’an'],
    en: 'than',
    pr: ['than', 'thaun', 'thin', 'dan'],
    gr: 'conj',
    tr: ['nor', 'an'],
    hl: ['than', 'an'],
    ex: 'Ye maun can dae better than that!',
    or: [
        [G.notes.or.as, 'than, then'],
        [G.notes.or.ae, 'ðanne']
    ]
}, {
    sc: ['theirsel', 'themsel'],
    en: 'themselves (collectively)',
    tr: ['thairsel', 'thirsel', 'themselves', 'themself', 'theirself', 'themselfs', 'theirsels', 'themsels', 'theirselves'],
    hl: ['thairsel', 'thirsel', 'themselves', 'themself', 'theirself', 'theirselves'],
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'thair self, thar self, thair sell'],
        [G.notes.or.as, 'thame sell, them sel']
    ]
}, {
    sc: 'them',
    en: 'them',
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'thaim, tham(e)'],
        [G.notes.or.anor, 'þeim']
    ]
}, {
    sc: ['theirsels', 'themsels'],
    en: 'themselves (individually)',
    tr: ['thairsels', 'thirsels', 'themselves', 'themselfs', 'theirselfs', 'theirsel', 'themsel', 'theirselves'],
    hl: ['thairsels', 'thirsels', 'themselves', 'themselfs', 'theirselfs', 'theirselves'],
    gr: 'pronoon',
    or: [
        [G.notes.or.as, 'there selfs'],
        [G.notes.or.as, 'thame sellffis, themsels, them sellis']
    ]
}, {
    sc: 'thir',
    pr: ['thir', 'thur'],
    en: 'these',
    gr: 'dem pron, dem adj',
    or: [
        [G.notes.or.as, 'thir']
    ],
    ex: [G.ex.a1, G.ex.b1]
}, {
    sc: 'sklent',
    en: 'across',
    tr: ['athwart', 'athort'],
    hl: 'athwart',
    gr: 'prep'
}, { // Test
    sc: 'almichty',
    en: 'almighty',
    gr: 'test'
}];

G.utils = {
    // Adds <span> around string 's'
    addSpan: function (s) {
        return '<span>' + s + '</span>';
    },
    // Works with filter method to get unique array values
    onlyUnique: function (value, index, self) {
        return self.indexOf(value) === index;
    },
    // Replaces ‘ and ’ with '
    replaceQo: function (s) {
        return s.replace(/‘|’/g, "'");
    },
    // Replaces ' with ’
    curlyQuotes: function (s) {
        return s.replace(/'/g, "’");
    },
    reverseChildren: function (parent) {
        for (let i = 1; i < parent.childNodes.length; i++) {
            parent.insertBefore(parent.childNodes[i], parent.firstChild);
        }
    }
};
