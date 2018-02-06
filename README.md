Main ettle: enable users to look up common (and some more obscure) Scots words quickly and easily.

Presently at prototype phase.

# Featurs

1. Look up vocabulory in English or Scots using the single textbox
2. Get instant results as you type
3. Enter words using more established spellings, or phonetically
4. Returns both the Scots, and the English translation
4. Gives ‘correct’ spelling, basic pronunciation and grammar, along with any common alternative spellings
5. Lightweight wab-gibble accessible on desktop, tablet and mobile

Audience: Scots speakers, writers and learners.

# Dev

When splitting 'synonyms' with the pipe (`|`) character, sort the 'items' descending from the left in terms of number of words in the single meaning, e.g.:
`en: ['on no account|another three word|nowhere|no way']`

Trigger words (`tr`) will be highlighted in the UI by default. You can use the *highlight* property (`hl`) to override this. Note how typing *depute* vs *deputy* is handled. For a more complex example, see the verb *gae*.
