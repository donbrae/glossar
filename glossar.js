var GLOSSAR = GLOSSAR || {};

var G = GLOSSAR;

G.notes = {
    a: "protologism; frae analogy wi Dutch an French-influenced <em>Catalonie</em>, <em>Slovenie</em>, <em>Austrailie</em> et al, vs <em>-a</em> or <em>-ia</em> (meanin ‘land’ or ‘steid’) that English haes borraed frae the Laitin", // Syrie, Californie et al
    b: "<em>-ae</em> an <em>-y/-ie</em> steid-name endins kythes Dutch an French influence, vs <em>-a</em> or <em>-ia</em> (meanin ‘land’ or ‘steid’) that English haes borraed frae the Laitin", // Americae, Slovakie et al
    or: {
        af: 'Auld French',
        mf: 'Middle French',
        f: 'French',
        an: 'Anglo-Norman',
        l: 'Laitin',
        nfd: 'northren French dialect',
        ae: 'Auld English',
        me: 'Middle English',
        ms: 'Middle Scots',
        es: 'Early Scots',
        ems: 'Early Middle Scots',
        lms: 'Late Middle Scots',
        emods: 'Early Modren Scots',
        emods2: 'Earlier Modren Scots',
        anor: 'Auld Norse',
        as: 'Aulder Scots',
        md: 'Middle Dutch',
        eme: 'Early Modren English',
        mode: 'Modren English',
        mlg: 'Middle Laich German',
        rl: 'Roman Law',
        it: 'Italians'
    }
};

G.ex = {
    a: "Alasdair an Ashley wis feart they wadna win at the kirk in time tae be mairit",
    b: "It wis sae thrang Isobel didna knaw whan she wad get out o wark",
    c: "I kenna whit ye mean — ye\'re haiverin, mun!",
    d: "I wadna lat it fash ye",
    e: "The CEO luit skarehauders speir at him efter the tele-collogue",
    f: "Her depute gree’d tae tak in haund the airtin o the policy an its pittin intil effect",
    g: "It wis a gey an braw day",
    h: "I ken brawly richt by wrang!",
    i: "Jamie wis in a swither about whit Hogmanay pairty tae gang til",
    j: "As the ae guardian o Scots it faws til us tae gie this hamelt leid beild, an mak namely its pairt in Scotland’s identity nou an in time tae come",
    k: "We are wirkin nou wi aw pairt-takars for tae deliver on the ettles that’s intil the policy",
    l: "In terms o tred, o the guids an services Scotland inbrings, around 60 per cent is thocht tae be frae the lave o the Unitit Kinrick"
};

G.dict = [{
    sc: ['an'],
    sc_alt: 'and',
    en: 'and',
    gr: ['conj']
}, {
    sc: 'anent',
    en: [
        ['opposite', 'in front of', 'before'],
        ['concerning', 'about', 'in view of'],

    ],
    gr: 'prep',
    tr: ['regarding', 're'],
    or: [
        [G.notes.or.as, 'anent'],
        [G.notes.or.ae, 'on efen']
    ]
}, {
    sc: 'anenst',
    en: [
        ['over against', 'opposite'],
        ['in respect of', 'concerning'],

    ],
    tr: ['about', 'regarding', 're'],
    gr: 'prep'
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
    gr: ['prep', 'líterar']
}, {
    sc: ['because', 'acause'],
    en: 'because',
    gr: ['conj']
}, { // F
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
    sc: 'gif',
    en: 'if',
    tr: 'gin',
    hl: 'gif',
    gr: ['conj'],
    or: [
        [G.notes.or.as + ' haes', 'gif, gyf, iff'],
        [G.notes.or.me + ' haes', 'if'],
        [G.notes.or.ae + ' haes', 'ᵹif']
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
    gr: ['pron']
}, {
    sc: 'ilka ane',
    en: [
        ['each one', 'everyone']
    ],
    gr: 'pron'
}, {
    sc: ['wha', 'fa'],
    pr: ['whah', 'whau', 'whae', 'whiu', 'fa', 'a', 'wha'],
    en: 'who',
    tr: ['whae', 'whay', 'whey'],
    gr: 'pron'
}, { // N
    sc: 'naewey',
    en: [
        ['on no account', 'nowhere', 'no way']
    ],
    tr: ['naewye', 'naewhaur', 'nowhere']
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
    hl: ['ane', 'ain', 'yin', 'wan', 'een', 'ann']
}, {
    sc: 'ony',
    en: [
        ['any', 'either']
    ],
    gr: ['pron'],
    or: 'see adj'
}, { // O
    sc: 'onyane',
    en: 'anyone',
    gr: ['pron']
}, {
    sc: 'our',
    sc_alt: 'oor',
    pr: 'oor',
    en: 'our',
    tr: 'wir',
    hl: 'our',
    gr: ['possesive pronoun']
}, {
    sc: 'wir',
    pr: ['wir', 'wur', 'war', 'weer', 'wor'],
    en: 'our',
    tr: 'oor',
    hl: 'wir',
    gr: ['possesive pronoun']
}, {
    sc: ['whaniver', 'faniver'],
    en: 'whenever',
    tr: ['wheniver', 'fanever']
}, {
    sc: ['whit', 'fit', 'what'],
    pr: ['whit', 'whut', 'what', 'whot', 'fit', 'fut', 'fat', 'ut'],
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
    sc: ['I', 'ah', 'A'],
    pr: ['ah', 'aw', 'eh', 'eye'],
    en: 'I',
    tr: ['A', 'Ah', 'E', 'Eh', 'eh'],
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
    sc: ['dinna', 'dinnae'],
    en: [
        ['don\'t', 'do not']
    ],
    tr: ['dinny', 'dont']
}, {
    sc: 'partícular',
    pr: ['purTikyulur', 'purTiklur', 'parTeekyulur', 'parTeeklur'],
    sc_alt: ['parteecular', 'parteicular'],
    en: 'particular',
    tr: 'partiecular',
    gr: 'adj'
}, { // T
    sc: 'til',
    en: 'to',
    gr: 'prep',
    inf: '<em>til</em> is niver uised afore a verb, an whiles juist afore vouels an the letter h',
    ex: ['I walkit owre an spak til him', G.ex.i]
}];

G.utils = {
    // Adds <span> around string 's'
    addSpan: function(s) {
        return '<span>' + s + '</span>';
    },
    // Works with filter method to get unique array values
    onlyUnique: function(value, index, self) {
        return self.indexOf(value) === index;
    }
};
