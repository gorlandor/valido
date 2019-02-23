const Valido = require("./Valido.util");
const expect = require('expect');

test('String should be Alphanumeric Only', () => {
  expect(Valido.IsAlphaNumericOnly("cake")).toEqual(true);
  expect(Valido.IsAlphaNumericOnly("cake by the ocean")).toEqual(false);
  expect(Valido.IsAlphaNumericOnly("Cake by the ocean!")).toEqual(false);
  expect(Valido.IsAlphaNumericOnly("^Apple123$")).toEqual(false);
  expect(Valido.IsAlphaNumericOnly("__APPLE1234")).toEqual(false);
  expect(Valido.IsAlphaNumericOnly("Apple1234")).toEqual(true);
  expect(Valido.IsAlphaNumericOnly("1234")).toEqual(true);
  expect(Valido.IsAlphaNumericOnly("")).toEqual(false);
});

test('String should be Numeric Only', () => {
  expect(Valido.IsNumericOnly("cake")).toEqual(false);
  expect(Valido.IsNumericOnly("cake by the ocean")).toEqual(false);
  expect(Valido.IsNumericOnly("Cake by the ocean!")).toEqual(false);
  expect(Valido.IsNumericOnly("^Apple123$")).toEqual(false);
  expect(Valido.IsNumericOnly("__APPLE1234")).toEqual(false);
  expect(Valido.IsNumericOnly("Apple1234")).toEqual(false);
  expect(Valido.IsNumericOnly("1234")).toEqual(true);
  expect(Valido.IsNumericOnly("")).toEqual(false);
});