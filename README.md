# valido
Valido — A helper library for form validation built on top of .@chriso's validator.js 

## install

1. Clone the repository: `$ git clone https://github.com/giovanni0918/valido.git`  

2. Navigate into the valido folder: `$ cd valido`  

3. Install deps using npm: `$ npm install`  

4. Test using jest `$ npm run jest`  

# example usage

```javascript

const Valido = require("../lib/Valido.util");
const expect = require('expect');

test('String does not meet specified length', () => {

  const username = "bass";

  const { valid, errors } = Valido.validateProperLength({
    value: username,
    minLength: 8,
    maxLength: 15
  });

  expect(errors.length).toBeGreaterThan(0);
  expect(valid).toEqual(false);

});

```