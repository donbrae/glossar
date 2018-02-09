/**
 * Verbs
 */

G.v = {}; // Verbs

// Complex Verbs

// v gae
G.v.gae = {
    sc: ['gae', 'gang', 'gan'],
    en: ['go'],
    tr: ['ging'],
    neg: {
        sc: ['gaena', 'gangna'],
        en: [
            ['do not go', 'go not']
        ],
        tr: ['ganna', 'gingna', 'gona', 'don\'t go'],
        tps: { // > Third person singular
            sc: ['gaesna', 'gangsna', 'gansna'],
            en: [
                ['does not go', 'goes not']
            ],
            tr: ['gingsna', 'goesna', 'doesn\'t go']
        }
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
    },
    tps: {
        sc: ['gaes', 'gangs', 'gans'],
        en: 'goes',
        tr: ['gings'],
    }
};
G.v.gae.trigs = [].concat( // Control display of conjugated 'gae'
    G.v.gae.sc, G.v.gae.en, G.v.gae.tr, // gae
    G.v.gae.neg.sc, G.v.gae.neg.en, G.v.gae.neg.tr, // gae neg
    G.v.gae.neg.tps.sc, G.v.gae.neg.tps.en, G.v.gae.neg.tps.tr, // gae neg third person singular
    G.v.gae.pt.sc, G.v.gae.pt.en, G.v.gae.pt.tr, // gae pt
    G.v.gae.pt.neg.sc, G.v.gae.pt.neg.en, // gae pt neg
    G.v.gae.pp.sc, G.v.gae.pp.en, G.v.gae.pp.tr, // gae pp
    G.v.gae.ing.sc, G.v.gae.ing.en, G.v.gae.ing.tr, // gae -ing form
    G.v.gae.tps.sc, G.v.gae.tps.en, G.v.gae.tps.tr // gae third person singular
);
G.v.gae.meta = { // Metadata
    gr_hw: G.utils.addSpan(G.v.gae.sc[0]) + ' etc.' // Which headwords should appear in the grammar definition
};
// gae end

/**
 * Add verbs (both complex and more simple) to dictionary object
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
        hl: [].concat(G.v.gae.neg.en, G.v.gae.neg.tr),
        gr: 'neg o ' + G.v.gae.meta.gr_hw
    }, { // v gae neg third person singular
        sc: G.v.gae.neg.tps.sc,
        en: G.v.gae.neg.tps.en,
        tr: G.v.gae.neg.tps.tr,
        hl: [].concat(G.v.gae.neg.tps.en, G.v.gae.neg.tps.tr),
        gr: 'neg third person singular o ' + G.v.gae.meta.gr_hw
    }, { // v gae pt
        sc: G.v.gae.pt.sc,
        en: G.v.gae.pt.en,
        tr: G.v.gae.trigs, // So this is triggered when 'go' is entered
        hl: G.v.gae.pt.tr, // Which trigger words should cause the headwords to be highlighted
        // gr: ['pt o <span>' + [].concat(G.v.gae.sc).join(', ')] + '</span>'
        gr: 'pt o ' + G.v.gae.meta.gr_hw
    }, { // v gae pt neg
        sc: G.v.gae.pt.neg.sc,
        en: G.v.gae.pt.neg.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.pt.neg.en,
        gr: 'neg pt o ' + G.v.gae.meta.gr_hw
    }, { // v gae pp
        sc: G.v.gae.pp.sc,
        en: G.v.gae.pp.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.pp.tr,
        gr: 'pp o ' + G.v.gae.meta.gr_hw
    }, { // v gae -ing form
        sc: G.v.gae.ing.sc,
        en: G.v.gae.ing.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.ing.tr
    }, { // v Third person singular
        sc: G.v.gae.tps.sc,
        en: G.v.gae.tps.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.tps.tr,
        gr: 'third person singular o ' + G.v.gae.meta.gr_hw

    },
    // v gae end);
    {
        sc: 'jalouse',
        en: ['to suspect', ['to suppose', 'guess', 'surmise']],
        pr: 'jalooz',
        // > pt: 'jaloused',
        gr: 'v',
        tr: ['jaloose', 'suspect', 'suppose'],
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
    }, {
        sc: ['fash', 'merp'],
        en: [
            ['to annoy', 'irritate', 'trouble', 'bother', 'enrage', 'inconvenience'],
            ['to fret', 'be angry']
        ],
        pt: {
            sc: 'fasht',
            en: [
                ['annoyed', 'irritated', 'troubled', 'bothered', 'enraged', 'inconvenienced', 'angered', 'fretted']
            ],
            tr: 'fashed'
        },
        pp: {
            sc: 'fasht'
        },
        neg: {
            sc: 'fashna'
        },
        ing: {
            sc: ['fashin'],
        },
        gr: 'v',
    }
);
