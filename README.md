# Gender detection from name
This simple project detects the gender of a first name. An optional language parameter can be specified to improve the detection, for example: Andrea in EN is female, in IT is male. If no language is specified, EN has priority.

### Example
```js
const { genderFromName } = require('gender-detection-from-name')

function main() {
  const genderEN = genderFromName('Andrea', 'en')
  const genderIT = genderFromName('Andrea', 'it')
  const gender = genderFromName('Jennifer')
  console.log(genderEN) // female
  console.log(genderIT) // male
  console.log(gender) // female
}
```

### Run tests
- `npm test`
