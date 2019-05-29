# Gender detection from name
This simple project detects the gender of a first name. An optional language parameter can be specified to improve the detection, for example: Andrea in EN is female, in IT is male. If no language is specified, EN has priority.

### Install
`npm i gender-detection-from-name`

### Example
```js
const { getGender } = require('gender-detection-from-name')

function main() {
  const genderEN = getGender('Andrea', 'en')
  const genderIT = getGender('Andrea', 'it')
  const gender = getGender('Jennifer')
  console.log(genderEN) // female
  console.log(genderIT) // male
  console.log(gender) // female
}
```

### Run tests
- `npm test`

### Run lint
- `npm run lint`
