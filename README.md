Main ettle: enable users to look up common (and some more obscure) Scots words quickly and easily.

Presently at prototype stage.

# Featurs

1. Look up vocabulary in English or Scots using a single textbox
2. Get instant results as you type
3. Enter words using more established spellings, or phonetically
4. Returns both the Scots, and the English translation
4. Gives ‘correct’ spelling, basic pronunciation and grammar, along with any common alternative spellings
5. Lightweight wab-gibble accessible on desktop, tablet and mobile

Audience: Scots speakers, writers and learners.

# Dev

index-dev.html

Trigger words (`tr`), pronunciations (`pr`) and alternative spellings (`sc_alt`) will be highlighted in the UI by default. You can use the *highlight* property (`hl`) to override this. Note how typing *depute* (Scots) vs *deputy* (English) is handled. For a more complex example, see the verb tae *gae*.

When pushing past tenses and past participles to `G.dict` (via properties `pt`, `pp` and `pt_pp`), note that both the English and trigger words should be added to the `tr` property — there is no separate `en` property.

# Biggin

Run `build.sh` to write to **glossar-bundle.min.js**
