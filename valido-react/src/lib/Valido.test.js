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

test('String should be Residential Address (not postal)', () => {

  expect(Valido.IsResidentialAddress('calle las casas arbol #2')).toEqual(true);
  expect(Valido.IsResidentialAddress('PO las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('P.O. las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('PO BOX 1195 las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('P.O. BOX 1195 las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('POST OFFICE BOX las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('PMB las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('PMB 234 RR 1 BOX 12')).toEqual(false);
  expect(Valido.IsResidentialAddress('Private Mailbox las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('HC las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('HC 1 BOX 18')).toEqual(false);
  expect(Valido.IsResidentialAddress('RR las casas arbol #2')).toEqual(false);
  expect(Valido.IsResidentialAddress('RR 2 BOX 1980')).toEqual(false);
  expect(Valido.IsResidentialAddress('URB LAS GLADIOLAS 150 CALLE A')).toEqual(true);
  expect(Valido.IsResidentialAddress('1234 CALLE AURORA')).toEqual(true);
  expect(Valido.IsResidentialAddress('1234 URB LOS OLMOS')).toEqual(true);
  expect(Valido.IsResidentialAddress('23 RES LLORENS TORRES')).toEqual(true);
  expect(Valido.IsResidentialAddress('COND ASHFORD PALACE 1234 AVE ASHFORD APT 1A')).toEqual(true);
  expect(Valido.IsResidentialAddress('1 COND MIRAFLOR APT 104')).toEqual(true);
  expect(Valido.IsResidentialAddress('123 oppo offices')).toEqual(true);
  expect(Valido.IsResidentialAddress('1 ferrocarril centro')).toEqual(true);
  expect(Valido.IsResidentialAddress('1 beachcomb st')).toEqual(true);

});