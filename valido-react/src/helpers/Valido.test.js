import Valido from "./helpers/Valido.util";

const strings = [
  "cake",
  "cake by the ocean",
  "Cake by the ocean!",
  "^Apple123$",
  "__APPLE1234"
];

let passesTest = false;

strings.map((str, i, arr) => {
  return Valido.containsNumbers.test(str)
    && Valido.containsLowerCase.test(str)
    && Valido.containsUpperCase.test(str)
    && Valido.HasProperLength(str, 8, 15)
}).reduce((accumulator, cursor) => {
  return accumulator && cursor;
});
