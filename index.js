const enNames = require('./names/en')
const itNames = require('./names/it')

const enMap = new Map(enNames)
const itMap = new Map(itNames)

const maps = {
  en: enMap,
  it: itMap,
  all: new Map([...enMap, ...itMap])
}

const supportedLangs = Object.keys(maps)

const input = { name: 'Mark', lang: 'en' }
const name = input.name.toLowerCase()
const lang = input.lang
const isLangSupported = supportedLangs.includes(lang)

const mapToUse = maps[input.lang] || maps.all
const result = mapToUse.get(name) || maps.all.get(name) || 'unknown'

console.log(isLangSupported)
console.log(result)
