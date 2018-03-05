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
            en: 'did not go',
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

// v be
G.v.be = {
    sc: 'be',
    en: 'be',
    tpps: { // Third person present singular
        sc: 'is',
        en: 'is',
        neg: {
            sc: ['isna', 'isnae'],
            en: [
                ['is not', 'isn\'t']
            ],
        }
    },
    ps: { // Present singular
        sc: 'am',
        en: 'am',
        tr: 'um',
        neg: {
            sc: ['amna', 'amnae'],
            en: [
                ['am not', 'amn\'t']
            ],
            tr: ['umna', 'umnae']
        }
    },
    psp: { // Present singular and plural
        sc: 'are',
        en: 'are',
        tr: ['ur', 'ar'],
        neg: { // Present singular and plural
            sc: ['arena', 'arenae'],
            en: [
                ['are not', 'aren\'t']
            ],
            tr: ['urna', 'urnae', 'arna', 'arnae']
        }
    },
    neg: {
        sc: 'binna',
        en: 'is not',
        tr: ['binnae', 'is no', 'ins\'t']
    }
};
G.v.be.trigs = [].concat( // Control display of conjugated 'be'
    G.v.be.sc, G.v.be.en, // be
    'to be', 'tae be',
    G.v.be.ps.sc, G.v.be.ps.en, G.v.be.ps.tr, // be present singular
    G.v.be.ps.neg.sc, G.v.be.ps.neg.en, G.v.be.ps.neg.tr, // neg
    G.v.be.tpps.sc, G.v.be.tpps.en, // be third present present singular
    G.v.be.tpps.neg.sc, G.v.be.tpps.neg.en, // neg
    G.v.be.psp.sc, G.v.be.psp.en, // be present singular and plural
    G.v.be.psp.neg.sc, G.v.be.psp.neg.en, G.v.be.psp.neg.tr, // neg
    G.v.be.neg.sc, G.v.be.neg.en, G.v.be.neg.tr // be neg
);
// be end

// v wis
G.v.wis = {
    sc: 'wis',
    pr: ['waz', 'wez', 'wiz', 'wuz'],
    en: [
        ['was', 'had been']
    ],
    sc_alt: 'wes',
    tr: 'wus',
    neg: {
        sc: ['wisna', 'wisnae'],
        en: [
            ['was not', 'wasn\'t', 'had not been']
        ],
        tr: ['wasnae', 'wasna', 'wesna', 'wesnae', 'wiznae', 'wizna', 'wuznae', 'wuzna']
    }
};
G.v.wis.trigs = [].concat(
    G.v.wis.sc, G.v.wis.pr, G.v.wis.en, G.v.wis.sc_alt, G.v.wis.tr, // wis
    G.v.wis.neg.sc, G.v.wis.neg.en, G.v.wis.neg.tr // neg
);
// wis end

// v wis
G.v.war = {
    sc: 'war',
    pr: ['war', 'wir', 'wur'],
    en: [
        ['were', 'had been']
    ],
    sc_alt: 'were',
    neg: {
        sc: ['warna', 'warnae'],
        en: [
            ['were not', 'weren\'t', 'had not been']
        ],
        tr: ['werena', 'werenae', 'wirna', 'wirnae']
    }
};
G.v.war.trigs = [].concat(
    G.v.war.sc, G.v.war.pr, G.v.war.en, G.v.war.sc_alt, G.v.war.tr, // war
    G.v.war.neg.sc, G.v.war.neg.en, G.v.war.neg.tr // neg
);
// wis end

// v hae
G.v.hae = {
    sc: ['hae', 'hiv'],
    en: 'have',
    pr: ['hae', 'ha', 'a', 'hiv', 'huv', 'hev'],
    neg: {
        sc: ['haena', 'hinna', 'hivna'],
        sc_alt: ['haenae', 'hinnae', 'hivnae'],
        en: [
            ['have not', 'haven\'t']
        ],
        tr: ['huvnae', 'huvna', 'havenae']
    },
    ps: { // Present singular
        sc: 'haes',
        sc_alt: 'hes',
        en: 'has',
        pr: ['hez', 'hiz', 'huz'],
        tr: ['his', 'hus'],
        neg: {
            sc: ['haesna', 'haesnae'],
            en: [
                ['has not', 'hasn\'t']
            ],
            tr: ['hesna', 'hisnae', 'hisna', 'hiznae', 'husnae']
        }
    },
    pt: {
        sc: 'haed',
        en: 'had',
        pr: ['haid', 'hed', 'hid', 'hud'],
        neg: {
            sc: ['haedna', 'haednae'],
            en: [
                ['had not', 'hadn\'t']
            ],
            tr: ['hudnae', 'hidnae', 'hidna', 'hudna']
        }
    },
    ptp: {
        sc: ['haed', 'haen'],
        en: 'had',
        sc_alt: 'hed',
        pr: ['haid', 'hed', 'hid', 'hud', 'hain']
    }
};
G.v.hae.trigs = [].concat( // Control display of conjugated 'hae'
    G.v.hae.sc, G.v.hae.en, G.v.hae.pr, // hae
    G.v.hae.neg.sc, G.v.hae.neg.sc_alt, G.v.hae.neg.en, G.v.hae.neg.tr, // hae neg
    G.v.hae.ps.sc, G.v.hae.ps.sc_alt, G.v.hae.ps.en, G.v.hae.ps.pr, G.v.hae.ps.tr, // hae present singular
    G.v.hae.ps.neg.sc, G.v.hae.ps.neg.en, G.v.hae.ps.neg.tr, // hae neg present singular
    G.v.hae.pt.sc, G.v.hae.pt.en, G.v.hae.pt.pr, // hae past tense
    G.v.hae.pt.neg.sc, G.v.hae.pt.neg.en, G.v.hae.pt.neg.tr, // hae neg past tense
    G.v.hae.ptp.sc, G.v.hae.ptp.sc_alt, G.v.hae.ptp.pr // hae past participle
);
// hae end

// ken and knaw triggers
G.v.ken_knaw = {};
G.v.ken_knaw.trigs = ['ken', 'know', 'kenna', 'know not', 'kent', 'kenned', 'knew', 'kentna', 'knew not', 'did not know', 'didn\'t know', 'known', 'knaw', 'knawed', 'knawn'];

/**
 * Add verbs (both complex and more simple) to dictionary object
 */

G.dict.push({
        sc: 'accress',
        pt_pp: {
            sc: 'accressed',
            tr: ['increased', 'accrued', 'grown', 'grew']
        },
        en: ['accrue', ['increase', 'grow']],
        gr: 'v',
        tr: 'added',
        hl: 'accress',
        or: [
            [G.notes.or.as, 'accress, accresce'],
            ['frae the ' + G.notes.or.rl + ' term', 'accrescere']
        ]
    }, { // A
        sc: 'adduce',
        en: ['cite as pertinent, quote as evidence'],
        tr: 'pertain',
        hl: 'adduce',
        gr: 'v',
        or: [
            [G.notes.or.l, 'adūcere']
        ]
    }, {
        sc: 'adduce',
        def: ['lat see (an item o) evidence in proof', 'bring forrit a witness'],
        gr: ['v', 'law']
    },
    // v be
    {
        sc: G.v.be.sc,
        en: G.v.be.en,
        tr: G.v.be.trigs, // Highlighted by default
        hl: [].concat(G.v.be.en, 'to be', 'tae be'),
        gr: 'v'
    }, { // am
        sc: G.v.be.ps.sc,
        en: G.v.be.ps.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.ps.en, G.v.be.ps.tr),
        gr: 'praisent singular o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // amna
        sc: G.v.be.ps.neg.sc,
        en: G.v.be.ps.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.ps.neg.en, G.v.be.ps.neg.tr),
        gr: 'praisent singular neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // is
        sc: G.v.be.tpps.sc,
        en: G.v.be.tpps.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.tpps.en),
        gr: 'third person praisent singular o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // isna
        sc: G.v.be.tpps.neg.sc,
        en: G.v.be.tpps.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.tpps.neg.en),
        gr: 'third person praisent singular neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // are
        sc: G.v.be.psp.sc,
        en: G.v.be.psp.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.psp.en, G.v.be.psp.tr),
        gr: 'praisent singular an plural o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // arena
        sc: G.v.be.psp.neg.sc,
        en: G.v.be.psp.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.psp.neg.en, G.v.be.psp.neg.tr),
        gr: 'praisent singular an plural neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // binna
        sc: G.v.be.neg.sc,
        en: G.v.be.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.neg.en, G.v.be.neg.tr),
        gr: 'neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc) + '; líterar'
    },
    // v be end
    { // C
        sc: 'contrair',
        en: [
            ['oppose', 'contradict', 'go contrary to']
        ],
        gr: 'v',
        or: 'see n'
    }, { // D
        sc: 'defeat',
        pr: ['defait', 'defeet'],
        en: 'defeat',
        pt_pp: {
            sc: 'defeat',
            tr: ['defeated', 'defait', 'defeet']
        },
        ex: 'Hibs war defeat by Hearts in the Cup final on Seturday',
        gr: 'v',
        or: [
            [G.notes.or.as, 'defait', 'defett'], G.notes.or.af + ' <span>desfait</span>, ptp o <span>desfaire</span>'
        ]
    }, { // E
        sc: 'ettle',
        en: [
            ['intend', 'plan', 'propose'],
            'take aim at', ['attempt', 'venture'],
            'desire very much'
        ],
        tr: ['aim', 'desire', 'ettlin'],
        hl: ['aim', 'desire'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'ettle, ettill'],
            [G.notes.or.anor, 'ætla']
        ]
    }, {
        sc: 'ettlin',
        en: [
            ['endeavouring', 'trying']
        ],
        tr: ['attempting', 'ettle'],
        hl: ['ettlin'],
        gr: ['v']
    },
    // v gae
    { // v gae
        sc: G.v.gae.sc,
        en: G.v.gae.en,
        tr: G.v.gae.trigs,
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
        tr: G.v.gae.trigs,
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
    // v gae end
    {
        sc: 'compone',
        en: [
            ['come to an agreement', 'settle a dispute with payment'],
            ['compound', 'combine'],
            'compose in speech or writing',
            'compound a payment for a certain sum',
            'compose or calm oneself'
        ],
        tr: ['compose', 'calm', 'settle'],
        gr: ['v', 'merkit obsolete in CSD2']
    }, {
        sc: 'compone',
        en: 'compose (in music, speech or writing)',
        tr: ['compose', 'write'],
        hl: 'compose',
        gr: ['v'],
        or: [
            ['protologism, frae the ' + G.notes.or.as, 'compone <span>‘to compose, make by combination’</span>'],
            [G.notes.or.l, 'compōnere']
        ]
    }, {
        sc: 'jalouse',
        en: ['suspect', ['suppose', 'guess', 'surmise']],
        pr: 'jaLooz',
        pt: {
            sc: 'jaloused'
        },
        gr: 'v',
        tr: ['jaloose'],
        or: [
            'this uissage first kythes in ' + G.notes.or.lms, [G.notes.or.f, 'jalouser']
        ]
    }, {
        sc: 'dounlaid',
        pt: {
            sc: 'dounlaidit',
            en: 'downloaded',
            tr: 'doonloadit'
        },
        def: '<em>v</em> copy data frae ae computer sýstem til anither, for ordinar ower the internet; <em>n</em> the data (file) dounlaidit',
        pr: 'doonlaid',
        gr: ['v', 'n'],
        tr: ['doonload', 'download'],
        or: [
            [G.notes.or.mode, 'download']
        ]
    }, {
        sc: 'edify',
        en: [
            ['instruct', 'enlighten']
        ],
        gr: 'v',
        or: [
            [G.notes.or.mf, 'edifier'],
            [G.notes.or.l, 'aedificāre']
        ]
    }, {
        sc: 'effeir',
        pr: 'iFeer',
        en: [
            ['belong to', 'pertain to', 'be appropriate to', 'be fitting or proper']
        ],
        gr: 'v',
        tr: ['effeirin tae', 'effeirin til'],
        hl: ['effeir', 'be fitting', 'be proper'],
        or: [
            [G.notes.or.an + ', ' + G.notes.or.af, 'aferir']
        ]
    }, {
        sc: ['effeirin tae/til'],
        pr: ['iFeerin tae', 'iFeerin til'],
        en: [
            ['pertaining to', 'belonging to'],
            ['in relation to', 'in proportion to', 'corresponding to']
        ],
        tr: ['effeir', 'relating to', 'according to'],
        hl: ['effeirin tae', 'effeirin til', 'relating to'],
        or: [
            [G.notes.or.an + ', ' + G.notes.or.af, 'aferir']
        ]
    }, {
        sc: 'haud',
        pr: ['haud', 'hod', 'hud', 'had'],
        en: [
            ['have', 'keep in the hand', 'hold onto', 'possess'],
            ['confine', 'detain', 'hinder', 'restrain'],
            ['continue as before'],
            'arrange an event', ['continue', 'proceed', 'keep to a path or route'],
            ['observe', 'adhere to', 'maintain'],
            ['contain', 'keep within'],
            ['restrain oneself', 'prevent']
        ],
        pt: {
            sc: ['haudit', 'held']
        },
        gr: 'v'
    }, {
        sc: 'hauden',
        en: 'be obliged or required to do something',
        tr: ['obliged', 'required'],
        gr: ['pp o v <span>haud</span>']
    }, {
        sc: 'haud aff',
        en: 'keep off or away',
        tr: ['keep off', 'keep away'],
        gr: 'phrasal v'
    }, {
        sc: 'haud at',
        en: [
            ['persist in', 'keep at']
        ],
        tr: ['haud at', 'persist at', 'persevere at'],
        gr: 'phrasal v'
    }, {
        sc: 'haud awa',
        en: [
            ['keep away', 'keep out or off'],
            ['continue on one\'s way', 'go away']
        ],
        tr: ['keep out', 'keep off', 'continue'],
        gr: 'phrasal v'
    }, {
        sc: 'haud for',
        en: [
            ['aim at', 'make for']
        ],
        gr: 'phrasal v'
    }, {
        sc: 'haud forrit',
        en: 'continue to improve (in health)',
        tr: 'continue to improve',
        gr: 'phrasal v'
    }, {
        sc: 'haud gaun',
        en: 'keep going',
        gr: 'phrasal v'
    }, {
        sc: 'haud haul',
        en: [
            ['offer resistance', 'prop', 'support']
        ],
        gr: 'phrasal v'
    }, {
        sc: 'haud in',
        en: [
            ['confine', 'retain', 'restrain', 'keep in order'],
            ['save', 'economize', 'be miserly']
        ],
        gr: 'phrasal v'
    }, {
        sc: 'haud in about',
        pr: 'haud in aboot',
        en: [
            ['keep in order', 'restrain', 'control'],
            ['bring', 'come closer']
        ],
        gr: ['phrasal v']
    }, {
        sc: 'haud in wi',
        en: [
            ['keep in with', 'curry favour with'],
        ],
        gr: ['phrasal v']
    }, {
        sc: 'haud on',
        en: [
            ['carry on', 'continue'],
        ],
        gr: ['phrasal v']
    }, {
        sc: 'haud on',
        en: 'stop',
        gr: ['imp phrasal v']
    }, { // I
        sc: 'inbring',
        pt_pp: {
            sc: 'inbrocht',
            tr: ['imported', 'importit', 'conveyed']
        },
        en: [
            ['bring to or into a place', 'convey', 'import']
        ],
        tr: ['bring to a place', 'bring into a place'],
        gr: 'v',
        or: [
            [G.notes.or.ae, 'inbrengan']
        ],
        ex: ['O the guids an services Scotland inbrings, around 60 per cent is thocht tae be frae the lave o the Unitit Kinrick', 'a new pipe netwark inbrocht watter tae the hous']
    }, {
        sc: 'ken',
        en: 'know',
        neg: {
            sc: 'kenna',
            en: 'know not'
        },
        tr: G.v.ken_knaw.trigs,
        hl: 'ken',
        gr: 'v'
    }, {
        sc: ['kent', 'kenned'],
        en: ['knew'],
        neg: {
            sc: 'kentna',
            tr: ['knew not', 'did not know', 'didn\'t know']
        },
        tr: G.v.ken_knaw.trigs,
        hl: ['kent', 'kenned'],
        gr: 'pt o v ' + G.utils.addSpan('tae ken')
    }, {
        sc: 'kent',
        en: 'known',
        gr: ['adj, an ptp o v ' + G.utils.addSpan('tae ken')],
        ex: 'Brian is a weel kent face on the Edinburgh jazz scene',
        tr: G.v.ken_knaw.trigs,
        hl: 'kent'
    }, {
        sc: 'knaw',
        en: 'know',
        pt: {
            sc: ['knew', 'knawed'],
            tr: ['knew']
        },
        pp: {
            sc: 'knawn',
            tr: 'known'
        },
        tr: G.v.ken_knaw.trigs,
        hl: 'knaw',
        gr: 'v'
    }, { // M
        sc: 'maun',
        pr: ['maun', 'mon', 'man', 'mun'],
        en: 'must',
        neg: {
            sc: ['maunna', 'maunnae'],
            tr: ['must not', 'mustn\'t']
        },
        gr: ['v'],
        or: [
            [G.notes.or.as, 'man'],
            [G.notes.or.me + ' (afore 1400-50)', 'man'],
            [G.notes.or.anor, 'muna > man']
        ]
    }, {
        sc: 'mind',
        pt: {
            sc: 'mindit',
            en: ['reminded', 'remembered', 'recollected', 'called to mind']
        },
        en: ['remind', ['remember', 'recollect', 'call to mind']],
        gr: 'v',
        or: [
            [G.notes.or.as, 'minde, mynd(e)'],
            [G.notes.or.ae, 'mynd']
        ]
    }, {
        sc: 'uplaid',
        tr: 'upload',
        pt: {
            sc: 'uplaidit',
            en: 'uploaded',
            tr: 'uploadit'
        },
        def: '<em>v</em> copy data frae ae computer sýstem til anither, for ordinar til a server, an aften ower the internet; <em>n</em> the data (file) uplaidit',
        gr: ['v', 'n'],
        or: [
            [G.notes.or.mode, 'upload']
        ]
    }, {
        sc: ['fash'],
        en: [
            ['irritate', 'annoy', 'anger', 'inconvenience'],
            ['take trouble over', 'take pains with'],
            ['vex', 'bother'],
            ['fret']
        ],
        pt_pp: {
            sc: 'fasht',
            tr: [
                ['irritated', 'annoyed', 'angered', 'inconvenienced', 'troubled', 'vexed', 'bothered', 'fretted', 'fashed']
            ]
        },
        neg: {
            sc: 'fashna',
            tr: ['fash not', 'fash na']
        },
        gr: 'v',
        or: [
            [G.notes.or.ms, 'fasch, fash'],
            [G.notes.or.mf, 'faschier']
        ]
    }, // H
    { // hae
        sc: G.v.hae.sc,
        pr: G.v.hae.pr,
        en: G.v.hae.en,
        tr: G.v.hae.trigs,
        hl: G.v.hae.sc,
        gr: 'v'
    }, { // hae neg
        sc: G.v.hae.neg.sc,
        sc_alt: G.v.hae.neg.sc_alt,
        pr: G.v.hae.neg.pr,
        en: G.v.hae.neg.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.neg.sc, G.v.hae.neg.tr),
        gr: 'neg o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae present singular
        sc: G.v.hae.ps.sc,
        sc_alt: G.v.hae.ps.sc_alt,
        en: G.v.hae.ps.en,
        pr: G.v.hae.ps.pr,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.ps.sc, G.v.hae.ps.tr),
        gr: 'present singular o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae present singular neg
        sc: G.v.hae.ps.neg.sc,
        en: G.v.hae.ps.neg.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.ps.neg.sc, G.v.hae.ps.neg.tr),
        gr: 'neg present singular o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae past tense
        sc: G.v.hae.pt.sc,
        pr: G.v.hae.pt.pr,
        en: G.v.hae.pt.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.pt.sc),
        gr: 'pt o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae neg past tense
        sc: G.v.hae.pt.neg.sc,
        en: G.v.hae.pt.neg.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.pt.neg.sc, G.v.hae.pt.neg.tr),
        gr: 'neg pt o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae past par
        sc: G.v.hae.ptp.sc,
        en: G.v.hae.ptp.en,
        pr: G.v.hae.ptp.pr,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.ptp.sc, G.v.hae.ptp.pr),
        gr: 'pp o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // O
        sc: 'ocht',
        en: 'ought',
        gr: 'v'
    }, {
        sc: 'rax',
        en: [
            ['reach', 'stretch']
        ],
        gr: 'v',
        pt_pp: {
            sc: ['raxed', 'raxt'],
            en: ['reached', 'stretched']
        }
    }, {
        sc: 'redd',
        en: [
            ['clear', 'rid'], 'clarify'
        ],
        gr: 'v'
    }, { // S
        sc: 'skare',
        en: 'share',
        gr: 'v',
        or: [
            [G.notes.or.as, 'skar, scar(e), schare'],
            ['?' + G.notes.or.anor, 'skera'],
            ['?' + G.notes.or.md, 'scare, scaer']
        ]
    }, {
        sc: 'swither',
        en: [
            ['doubt', 'falter', 'hesitate', 'dither']
        ],
        tr: ['ditter', 'doiter'],
        hl: 'swither',
        gr: 'v',
        ex: '“Dinna swither, min — haud gaun!”',
        or: ['doutsome; first kythes (as a verb) in ' + G.notes.or.ms]
    }, {
        sc: 'uise',
        pr: ['yöz', 'yüz', 'öz', 'yaiz', 'ees'],
        en: 'use',
        tr: ['yaise', 'uiss', 'yiss', 'yaize'],
        hl: ['yaise', 'yaize', 'uise', 'yaiz', 'ees'],
        gr: 'v'
    }, {
        sc: 'upsteer',
        sc_alt: 'upsteir',
        en: [
            ['stir up', 'throw into turmoil', 'stimulate', 'encourage', 'arouse', 'incite']
        ],
        tr: 'rouse',
        gr: 'v'
    },
    // v wis
    {
        sc: G.v.wis.sc,
        sc_alt: G.v.wis.sc_alt,
        pr: G.v.wis.pr,
        en: G.v.wis.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.wis.sc, G.v.wis.pr, G.v.wis.tr),
        gr: 'v'
    }, { // wis neg
        sc: G.v.wis.neg.sc,
        en: G.v.wis.neg.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.wis.neg.sc, G.v.wis.neg.tr),
        gr: ['neg o v ' + G.utils.addSpan(G.v.wis.sc)]
    },
    // v wis end
    // v war
    {
        sc: G.v.war.sc,
        sc_alt: G.v.war.sc_alt,
        pr: G.v.war.pr,
        en: G.v.war.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.war.sc, G.v.war.pr),
        gr: 'v'
    }, { // war neg
        sc: G.v.war.neg.sc,
        en: G.v.war.neg.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.war.neg.sc, G.v.war.neg.tr),
        gr: ['neg o v ' + G.utils.addSpan(G.v.war.sc)]
    }
    // v war end
);
