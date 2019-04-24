const enNames = require('./names/en')
const itNames = require('./names/it')

/**
 * Gender detection from first name and optional language
 * @param {String} name First name
 * @param {String} [lang] Language
 */
function main (name, lang = 'all') {
  // Lowercase name and lang to make the match
  name = name.toLowerCase()
  lang = lang.toLowerCase()
  // Create the Maps name => gender from arrays
  const enMap = new Map(enNames)
  const itMap = new Map(itNames)
  const maps = {
    en: enMap,
    it: itMap,
    all: new Map([...enMap, ...itMap])
  }
  // Use the Map of input lang
  const mapToUse = maps[lang]
  // Get the gender from the input lang Map, or try with all Map, else name is unknown
  const result = mapToUse.get(name) || maps.all.get(name) || 'unknown'
  return result
}

module.exports = main
