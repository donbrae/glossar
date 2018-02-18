/**
 * Nouns
 */

G.n = {}; // More complex nouns

/**
 * Add nouns to dictionary object
 */

G.dict.push({
    sc: 'associe',
    pr: 'aSosee',
    en: 'association',
    gr: ['n'],
    or: [
        ['?' + G.notes.or.f, 'associé']
    ]

}, {
    sc: 'certificat',
    sc_alt: 'certificate',
    en: 'certificate',
    gr: ['n'],
    or: [
        [G.notes.or.mf, 'certificat']
    ],
}, {
    sc: 'claes',
    en: 'clothes',
}, {
    sc: 'dask',
    en: [
        ['desk', 'seat', 'church pew']
    ],
    gr: ['n']
}, {
    sc: 'contrair',
    en: [
        ['the contrary', 'the opposite']
    ],
    tr: ['contrary', 'opposite', 'on the contrary', 'to the contrary'],
    hl: ['contrary', 'opposite'],
    gr: 'n',
    or: [
        [G.notes.or.af, 'contraire']
    ]
}, {
    sc: 'depute',
    en: 'a deputy',
    gr: ['n'],
    tr: 'deputy',
}, {
    sc: 'hous',
    sc_alt: ['hoose'],
    pr: 'hooss',
    en: 'house',
    tr: ['houss', 'hooss'],
    gr: 'n',
}, {
    sc: 'uiss',
    pr: ['yös', 'yis', 'ees', 'yoos'],
    tr: ['yiss', 'uise', 'yaise', 'yaize'],
    hl: ['uiss', 'yiss', 'ees'],
    en: 'use',
    gr: ['n']
}, {
    sc: 'springheid',
    pr: 'springheed',
    en: [
        ['source', 'origin']
    ],
    gr: ['n']
}, {
    sc: 'toun',
    pr: 'toon',
    en: 'town',
    gr: ['n'],
    or: [
        [G.notes.or.ae, 'tūn']
    ]
}, {
    sc: 'wabsteid',
    en: 'website',
    pr: 'wabsteed',
    tr: ['websteid', 'websteed', 'wabsite'],
    gr: 'n',
});
