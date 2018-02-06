/**
 * Verbs
 */

G.v = {}; // Verbs

// v gae
G.v.gae = {
    sc: ['gae', 'gang', 'gan'],
    en: ['go'],
    tr: ['ging'],
    // tps: // > Third person singular
    // {
    //     sc: ['gaes', 'gangs', 'gans'],
    //     en: 'goes',
    //     tr: ['gings'],
    // },
    neg: {
        sc: ['gaena', 'gangna'],
        en: 'do not go',
        tr: ['ganna', 'gingna', 'gona', 'don\'t go'],
        // > tps: {
        // sc: ['gaesna', 'gangsna', 'gansna'],
        // en: 'goes not',
        // tr: ['gingsna', 'goesna']
        // },
    },
    pt: {
        sc: ['gaed', 'went'],
        en: 'went',
        tr: ['gad', 'goed', 'ginged', 'ganged'],
        neg: {
            sc: ['gaedna'],
            en: ['did not go']
        }
    },
    pp: {
        sc: 'gane',
        en: 'gone',
        tr: ['ganed', 'goan', 'gaen'],
    },
    ing: {
        sc: ['gaun', 'gangin', 'gaein'],
        en: 'going',
        tr: ['gingin', 'goin', 'gawn', 'gawin'],
    }
};
G.v.gae.trigs = [].concat( // Control display of conjugated 'gae'
    G.v.gae.sc, G.v.gae.en, G.v.gae.tr, // Gae
    G.v.gae.neg.sc, G.v.gae.neg.en, G.v.gae.neg.tr, // Gae neg
    G.v.gae.pt.sc, G.v.gae.pt.en, G.v.gae.pt.tr, // Gae pt
    G.v.gae.pt.neg.sc, G.v.gae.pt.neg.en, // Gae pt neg
    G.v.gae.pp.sc, G.v.gae.pp.en, G.v.gae.pp.tr, // Gae pp
    G.v.gae.ing.sc, G.v.gae.ing.en, G.v.gae.ing.tr // Gae -ing form
);
// gae end

/**
 * Add verbs to dictionary object
 */

G.dict.push(
    // v gae
    { // v gae
        sc: G.v.gae.sc,
        en: G.v.gae.en,
        tr: G.v.gae.trigs, // Highlighted by default
        hl: [].concat(G.v.gae.en, G.v.gae.tr), // Overrides tr highlighting above, as here we don't want all the tr words being highlighted
        gr: 'v'
    }, { // v gae neg
        sc: G.v.gae.neg.sc,
        en: G.v.gae.neg.en,
        tr: G.v.gae.trigs,
        hl: [].concat(G.v.gae.neg.en, G.v.gae.neg.tr)
    }, { // v gae pt
        sc: G.v.gae.pt.sc,
        en: G.v.gae.pt.en,
        tr: G.v.gae.trigs, // So this is triggered when 'go' is entered
        hl: G.v.gae.pt.tr, // Which trigger words should cause the headwords to be highlighted
        gr: ['pt o ' + [].concat(G.v.gae.sc).join(', ')]
    }, { // v gae pt neg
        sc: G.v.gae.pt.neg.sc,
        en: G.v.gae.pt.neg.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.pt.neg.en
    }, { // v gae pp
        sc: G.v.gae.pp.sc,
        en: G.v.gae.pp.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.pp.tr,
        gr: ['pp o ' + [].concat(G.v.gae.sc).join(', ')]
    }, { // v gae -ing form
        sc: G.v.gae.ing.sc,
        en: G.v.gae.ing.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.ing.tr
    },
    // v gae end);
    {
        sc: 'jalouse',
        en: ['to suspect', ['to suppose', 'guess', 'surmise']],
        pr: 'jalooz',
        // > pt: 'jaloused',
        gr: 'v',
        tr: ['jaloose', 'suspect'],
        or: ['Fr|jalouser|To regard with jealousy']
    }, {
        sc: 'remuive',
        en: 'remove',
        tr: 'remeeve',
        gr: 'v',
        or: []
    }, {
        sc: 'dounlaid',
        en: 'download',
        pr: 'doonlaid',
        gr: ['n', 'v'],
        tr: ['doonload', 'downlaid'],
        or: []
    }, {
        sc: 'uplaid',
        en: 'upload',
        gr: ['n', 'v'],
        or: []
    }
);
