const enMap = require('./names/en');
const itMap = require('./names/it');
const esMap = require('./names/es');
const frMap = require('./names/fr');
const deMap = require('./names/de');

/**
 * Gender detection from first name and optional language
 * @param {String} name First name
 * @param {String} [lang] Language
 * @return {String} male, female, unknown
 */
function getGender(name, lang = 'all') {
  if (!name) {
    return 'unknown';
  }
  // Lowercase name and lang to make the match
  name = name.toLowerCase();
  lang = (lang || 'all').toLowerCase();
  const maps = {
    en: enMap,
    it: itMap,
    es: esMap,
    fr: frMap,
    de: deMap,
    all: new Map([...itMap, ...enMap, ...esMap, ...frMap, ...deMap]),
  };
  // Use the Map of input language, or use all
  const mapToUse = maps[lang] || maps.all;
  // Get the gender from the language Map or try with all, otherwise is unknown
  const result = mapToUse.get(name) || maps.all.get(name) || 'unknown';
  return result;
}

exports.getGender = getGender;
