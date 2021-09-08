const enMap = require('./names/en')
const itMap = require('./names/it')

const csv = require('csv-parser')
const fs = require('fs')

const frMap = new Map()
const allMap = new Map()
fs.createReadStream('names/data-gouv-fr-dataset-first-names-all-langages.csv')
  .pipe(csv({ separator: ';' }))
  .on('data', (row) => {
    if (row['03_langage'].indexOf('french') !== -1) {
      if (row['02_genre'] === 'm') frMap.set(row['01_prenom'], 'male')
      if (row['02_genre'] === 'f') frMap.set(row['01_prenom'], 'female')
    }
    if (row['02_genre'] === 'm') allMap.set(row['01_prenom'], 'male')
    if (row['02_genre'] === 'f') allMap.set(row['01_prenom'], 'female')
  })

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
    fr: frMap,
    all: new Map([...enMap, ...itMap, ...allMap]),
  }
  // Use the Map of input language, or use all
  const mapToUse = maps[lang] || maps.all
  // Get the gender from the input language Map, or try with all, otherwise is unknown
  const result = mapToUse.get(name) || maps.all.get(name) || 'unknown'
  return result
}


exports.getGender = getGender
