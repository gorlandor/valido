# valido
Valido — A helper library for form validation built on top of .@chriso's validator.js 

## install

1. Clone the repository: `$ git clone https://github.com/giovanni0918/valido.git`  

2. Navigate into the valido folder: `$ cd valido`  

3. Install deps using yarn: `$ yarn install`  

4. Test using jest `$ yarn jest`  

# example usage

```javascript

const Valido = require('../lib/Valido.util');
const idNumber = '$not_alpha_numeric_only#(u)123';

if (Valido.IsAlphaNumericOnly(idNumber) === true) {
    alert('Valid id');
} else {
    alert('Not Valido');
}

```