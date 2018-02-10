/**
 * Adjectives
 */

G.adj = {}; // More complex adjectives

G.adj.guid = {
    trigs: ['gwid', 'geed'],
    pr: ['gid', 'gyid', 'göd', 'gweed']
};

/**
 * Add adjectives to dictionary object
 */

G.dict.push({
        sc: 'ae',
        pr: ['ae', 'yae'],
        en: 'one',
        gr: 'adj',
        tr: ['ane', 'yay', 'ain', 'yin', 'wan', 'een', 'ann'],
        hl: ['ae', 'yae', 'yay'],
    }, {
        sc: 'guid',
        en: 'good',
        tr: G.adj.guid.trigs,
        pr: G.adj.guid.pr,
        gr: 'adj'
    }, {
        sc: 'depute',
        gr: ['adj'],
        tr: 'deputy',
        hl: 'depute',
        def: 'apointit as, or exercein the duties o, depute',
    }, {
        sc: 'acquent',
        en: [
            ['acquainted', 'known', 'familiar with']
        ],
        pr: ['akWant', 'akWent'],
        tr: ['acquant', 'acquaint', 'aquent', 'aquaint', 'kent'],
        hl: ['acquant', 'acquaint', 'aquent', 'aquaint'],
        gr: 'adj',
        or: [
            ['ME', 'aquointe'],
            ['MFr', 'accointe']
        ],
        ex: [
            'I’m no yet fully acquent wi the policy'
        ]
    }


);
