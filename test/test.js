const assert = require('assert')
const { getGender } = require('../index')

describe('Tests for Gender detection from name', () => {
  it('should return male for some english male names', () => {
    const names = ['Dave', 'John', 'Jacob', 'George', 'Lucas']
    for (let name of names) {
      assert.strictEqual(getGender(name, 'en'), 'male')
    }
  })
  it('should return female for some english female names', () => {
    const names = ['Anna', 'Jennifer', 'Lisa', 'Susanne', 'Andrea']
    for (let name of names) {
      assert.strictEqual(getGender(name, 'en'), 'female')
    }
  })
  it('should return male for some italian male names', () => {
    const names = ['Davide', 'Federico', 'Giacomo', 'Giorgio', 'Andrea']
    for (let name of names) {
      assert.strictEqual(getGender(name, 'it'), 'male')
    }
  })
  it('should return female for some italian female names', () => {
    const names = ['Anna', 'Azzurra', 'Luisa', 'Marta', 'Caterina']
    for (let name of names) {
      assert.strictEqual(getGender(name, 'it'), 'female')
    }
  })
  it('should return male for some names with no language', () => {
    const names = ['Dave', 'John', 'Giacomo', 'George', 'Luca']
    for (let name of names) {
      assert.strictEqual(getGender(name), 'male')
    }
  })
  it('should return female for some names with no language', () => {
    const names = ['Anna', 'Jennifer', 'Lisa', 'Marta', 'Catherine']
    for (let name of names) {
      assert.strictEqual(getGender(name), 'female')
    }
  })
  it('should return unknown for unknown names', () => {
    const names = ['Asdfgh', 'I do not exist', 'None']
    for (let name of names) {
      assert.strictEqual(getGender(name), 'unknown')
    }
  })
  it('should return unknown for empty string, undefined or null', () => {
    const names = ['', undefined, null]
    for (let name of names) {
      assert.strictEqual(getGender(name), 'unknown')
    }
  })
})
