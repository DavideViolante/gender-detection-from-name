const assert = require('assert');
const { getGender } = require('../index');

describe('Tests for Gender detection from name', () => {
  it('should return male for some english male names', () => {
    const names = ['Dave', 'John', 'Jacob', 'George', 'Lucas'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'en'), 'male');
    }
  });
  it('should return female for some english female names', () => {
    const names = ['Anna', 'Jennifer', 'Lisa', 'Susanne', 'Andrea'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'en'), 'female');
    }
  });
  it('should return male for some italian male names', () => {
    const names = ['Davide', 'Federico', 'Giacomo', 'Giorgio', 'Andrea'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'it'), 'male');
    }
  });
  it('should return female for some italian female names', () => {
    const names = ['Anna', 'Azzurra', 'Luisa', 'Marta', 'Caterina'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'it'), 'female');
    }
  });
  it('should return male for some spanish male names', () => {
    const names = ['Manolo', 'Fernando', 'Markel', 'Miguel'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'es'), 'male');
    }
  });
  it('should return male for some spanish female names', () => {
    const names = ['Maria', 'Luisa', 'Juana', 'Aintzane', 'Gemma'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'es'), 'female');
    }
  });
  it('should return male for some french male names', () => {
    const names = ['David', 'Presley', 'Giacomo', 'Giorgio', 'Anastase'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'fr'), 'male');
    }
  });
  it('should return female for some french female names', () => {
    const names = ['Pome', 'Princesse', 'Sahana', 'Marta', 'Elida'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'fr'), 'female');
    }
  });
  it('should return male for some names with wrong language', () => {
    const names = ['Dave', 'John', 'Giacomo', 'George', 'Luca'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'de'), 'male');
    }
  });
  it('should return female for some names with wrong language', () => {
    const names = ['Anna', 'Jennifer', 'Lisa', 'Marta', 'Catherine'];
    for (const name of names) {
      assert.strictEqual(getGender(name, 'de'), 'female');
    }
  });
  it('should return male for some names with no language', () => {
    const names = ['Dave', 'John', 'Giacomo', 'George', 'Luca'];
    for (const name of names) {
      assert.strictEqual(getGender(name), 'male');
    }
  });
  it('should return female for some names with no language', () => {
    const names = ['Anna', 'Jennifer', 'Lisa', 'Marta', 'Catherine'];
    for (const name of names) {
      assert.strictEqual(getGender(name), 'female');
    }
  });
  it('should return unknown for unknown names', () => {
    const names = ['Asdfgh', 'I do not exist', 'None'];
    for (const name of names) {
      assert.strictEqual(getGender(name), 'unknown');
    }
  });
  it('should return unknown for null names', () => {
    const names = ['', undefined, null];
    for (const name of names) {
      assert.strictEqual(getGender(name), 'unknown');
    }
  });
  it('should return male for known name with null lang', () => {
    const langs = ['', undefined, null];
    for (const lang of langs) {
      assert.strictEqual(getGender('Dave', lang), 'male');
    }
  });
  it('should return unknown for null name and lang', () => {
    assert.strictEqual(getGender(''), 'unknown');
    assert.strictEqual(getGender('', ''), 'unknown');
    assert.strictEqual(getGender('', null), 'unknown');
    assert.strictEqual(getGender('', undefined), 'unknown');
    assert.strictEqual(getGender(null, ''), 'unknown');
    assert.strictEqual(getGender(undefined, ''), 'unknown');
    assert.strictEqual(getGender(null, undefined), 'unknown');
    assert.strictEqual(getGender(undefined, null), 'unknown');
  });
});
