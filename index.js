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
  };

  const mapToUse = maps[lang];
  const primaryResult = mapToUse ? mapToUse.get(name) : null;

  return (
    primaryResult ||
    deMap.get(name) ||
    frMap.get(name) ||
    esMap.get(name) ||
    enMap.get(name) ||
    itMap.get(name) ||
    'unknown'
  );
}

exports.getGender = getGender;
