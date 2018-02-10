var GLOSSAR = GLOSSAR || {};

var G = GLOSSAR;

G.dict = [{
        sc: ['wha', 'fa'],
        en: 'who',
        tr: ['whae', 'whay', 'whey']
    },
    {
        sc: ['whan', 'fan'],
        en: 'when'
    },
    {
        sc: 'naewey',
        en: [
            ['on no account', 'nowhere', 'no way']
        ],
        tr: ['naewye', 'naewhaur', 'nowhere']
    },
    {
        sc: 'naewhaur',
        en: 'nowhere',
        tr: ['naewhere']
    },
    {
        sc: 'ane',
        pr: ['ane', 'een', 'yin', 'wan'],
        en: 'one',
        gr: 'cardinal number',
        tr: ['ae', 'ain', 'ann', 'yae', 'yay'],
        hl: ['ane', 'ain', 'yin', 'wan', 'een', 'ann']
    },
    {
        sc: ['whaniver', 'faniver'],
        en: 'whenever',
        tr: ['wheniver', 'fanever']
    },
    {
        sc: ['thay', 'they'],
        en: 'they',
        tr: ['thai']
    },
    {
        sc: ['I', 'A', 'ah'],
        en: 'I',
        tr: ['A', 'Ah', 'E', 'Eh', 'eh']
    },
    {
        sc: 'the',
        en: 'the'
    },
    {
        sc: ['thare', 'there'],
        en: 'there'
    },
    {
        sc: ['dinna', 'dinnae'],
        en: [
            ['don\'t', 'do not']
        ],
        tr: ['dinny', 'dont']
    },
    {
        sc: 'partícular',
        pr: ['purTikyulur', 'purTiklur', 'parTeekyulur', 'parTeeklur'],
        sc_alt: ['parteecular', 'parteicular'],
        en: 'particular',
        tr: 'partiecular',
        gr: 'adj'
    }
];

G.utils = {
    // Adds <span> around string 's'
    addSpan: function(s) {
        return '<span>' + s + '</span>';
    }
};
