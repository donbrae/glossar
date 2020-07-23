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
    h1: "I’v juist gotten stertit the nou sae ye’ll hae tae gie me a bit mair time",
    i1: "The Green Pairty convener wis ettlin tae appynt a depute by the end o the simmer",
    j1: "Mind and steek the yett ahint ye",
    k1: "I wis in an awfie raivel"
};

G.pr = {
    juist: ['jist', 'joost', 'jeest', 'jeust', 'doost', 'dist']
};

G.dict = [{
    sc: ['ay', 'aye'],
    en: 'yes',
    gr: 'exclamation'
}, {
    sc: ['an', 'and'],
    pr: 'an',
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
    gr: ['conj']
}, {
    sc: 'binna',
    en: 'except for',
    tr: 'binnae',
    gr: ['prep', 'literar']
}, {
    sc: ['because', 'acause'],
    en: 'because',
    gr: ['conj']
}, { // E
    sc: 'efter',
    pr: ['efter', 'aifter'],
    en: ['after', 'later'],
    tr: 'syne',
    gr: ['adv', 'prep', 'conj'],
    or: [
        [G.notes.or.as, 'efter, eftir'],
        [G.notes.or.ae, 'æfter']
    ],
    ex: 'I’ll see ye efter!',
    au: 'efter'
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
    ]
}, { // I
    sc: 'ilk',
    en: [
        ['each one', 'every one']
    ],
    tr: 'ilka',
    hl: 'ilk',
    gr: ['pron']
}, {
    sc: ['ilka ane', 'ilkane'],
    en: [
        ['each one', 'everyone']
    ],
    gr: 'pron'
}, {
    sc: ['wha', 'fa'],
    pr: ['whah', 'whau', 'whae', 'whiu', 'fa', 'a'],
    en: 'who',
    tr: ['whae', 'whay', 'whey'],
    gr: 'pron'
}, { // M
    sc: 'maist',
    def: [
        ['the mucklest amoont, the lairgest nummer, the majority']
    ],
    tr: ['most', 'majority', 'maste'],
    gr: 'determiner and pronoun',
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
    gr: 'cardinal number',
    tr: ['ae', 'ain', 'ann', 'yae', 'yay'],
    hl: ['ane', 'ain', 'yin', 'wan', 'een', 'ann'],
    inf: '<span>Ane</span> is aften uised the day as an adjective (as weel as bein the cardinal nummer <span>ane</span>), whauras in traditional spoken Modren Scots ye’r mair likely tae hear <span>ae</span> (also pronounced ‘yae’) as the adjective. <span>Ane</span> wis typically the written adjective in Aulder Scots'
}, {
    sc: 'ony',
    en: [
        ['any', 'either']
    ],
    gr: ['pron'],
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
    ]
}, {
    sc: 'onyane',
    en: 'anyone',
    gr: ['pron']
}, {
    sc: 'oor',
    pr: 'oor',
    en: 'our',
    tr: 'wir',
    gr: ['possesive pronoun']
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
    gr: ['possesive pronoun'],
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
    gr: ['adj', 'adv', 'pron', 'conj']
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
    gr: 'first personal pronoun',
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
    en: 'there'
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
    sc: 'thir',
    pr: ['thir', 'thur'],
    en: 'these',
    gr: 'dem pron, dem adj',
    or: [
        [G.notes.or.as, 'thir']
    ],
    ex: [G.ex.a1, G.ex.b1]
}];

G.utils = {
    // Adds <span> around string 's'
    addSpan: function(s) {
        return '<span>' + s + '</span>';
    },
    // Works with filter method to get unique array values
    onlyUnique: function(value, index, self) {
        return self.indexOf(value) === index;
    },
    // Replaces ‘ and ’ with '
    replaceQo: function(s) {
        return s.replace(/‘|’/g, "'");
    },
    // Replaces ' with ’
    curlyQuotes: function(s) {
        return s.replace(/'/g, "’");
    }
};
