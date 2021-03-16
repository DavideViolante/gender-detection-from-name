import enMap from './names/en.js'
import itMap from './names/it.js'

/**
 * Gender detection from first name and optional language
 * @param {String} name First name
 * @param {String} [lang] Language
 * @returns {String} male, female, unknown
 */
function getGender (name, lang = 'all') {
  if (!name) {
    return 'unknown'
  }
  // Lowercase name and lang to make the match
  name = name.toLowerCase()
  lang = (lang || 'all').toLowerCase()
  const maps = {
    en: enMap,
    it: itMap,
    all: new Map([...itMap, ...enMap])
  }
  // Use the Map of input language, or use all
  const mapToUse = maps[lang] || maps.all
  // Get the gender from the input language Map, or try with all, otherwise is unknown
  const result = mapToUse.get(name) || maps.all.get(name) || 'unknown'
  return result
}

export default getGender
