const enMap = require('./names/en')
const itMap = require('./names/it')

/**
 * Gender detection from first name and optional language
 * @param {String} name First name
 * @param {String} [lang] Language
 * @returns {String} male, female, unknown
 */
function genderFromName (name, lang = 'all') {
  if (!name) {
    return 'unknown'
  }
  // Lowercase name and lang to make the match
  name = name.toLowerCase()
  lang = lang.toLowerCase()
  const maps = {
    en: enMap,
    it: itMap,
    all: new Map([...itMap, ...enMap])
  }
  // Use the Map of input language
  const mapToUse = maps[lang]
  // Get the gender from the input language Map, or try with all, otherwise is unknown
  const result = mapToUse.get(name) || maps.all.get(name) || 'unknown'
  return result
}

exports.genderFromName = genderFromName
