/**
 * @function emailValidationMessage
 * @param {string} value 
 * @param {boolean} showValue 
 * @param {string} locale 
 * @returns string
 */
export const emailValidationMessage = (value, showValue, locale) => {
  const identifier = showValue
    ? `${value}`
    : locale === "es-PR"
      ? `El valor dado`
      : `The value given`;
  return locale === "es-PR"
    ? `${identifier} no es un email valido.`
    : `${identifier} is not a valid email.`;
};

/**
 * @function lengthValidationMessage
 * @param {string} fieldName 
 * @param {number} minlength 
 * @param {number} maxlength 
 * @param {string} locale 
 * @returns string
 */
export const lengthValidationMessage = (
  fieldName = "",
  minlength = 6,
  maxlength = 32,
  locale = "en-US"
) => {
  return locale === "es-PR"
    ? `${fieldName} debe tener entre ${minlength} y ${maxlength} carácteres.`
    : `${fieldName} must have a length of ${minlength} to ${maxlength} chars.`;
};

/**
 * @function shouldBeAlphanumeric
 * @param {boolean} alphanumeric 
 * @param {string} locale 
 * @returns string
 */
const shouldBeAlphanumeric = (alphanumeric = true, locale = "en-US") => {
  if (alphanumeric === false) {
    return "";
  } else {
    return locale === "es-PR"
      ? `debe ser alfanumérico,`
      : `should be alphanumeric,`;
  }
};

/**
 * @function shouldContainUpperCase
 * @param {boolean} containsUpperCase 
 * @param {string} locale 
 * @returns string
 */
const shouldContainUpperCase = (containsUpperCase = true, locale = "en-US") => {
  if (containsUpperCase === false) {
    return "";
  } else {
    return locale === "es-PR"
      ? `debe contener letra(s) mayúsculas,`
      : `should contain capital letter(s),`;
  }
};

/**
 * @function shouldHaveProperLength
 * @param {number} minlength 
 * @param {number} maxlength 
 * @param {string} locale 
 * @returns string
 */
const shouldHaveProperLength = (minlength, maxlength, locale = "en-US") => {
  return locale === "es-PR"
    ? `debe tener entre ${minlength} y ${maxlength} carácteres.`
    : `should have a length of ${minlength} to ${maxlength} chars.`;
};

/**
 * @function passwordValidationMessage
 * @param {string} value 
 * @param {boolean} alphanumeric 
 * @param {boolean} containsUpperCase 
 * @param {number} minlength 
 * @param {number} maxlength 
 * @param {boolean} showValue 
 * @param {string} locale 
 * @returns string
 */
export const passwordValidationMessage = (
  value,
  alphanumeric = true,
  containsUpperCase = true,
  minlength = 8,
  maxlength = 15,
  showValue,
  locale
) => {
  const identifier = showValue ? `${value}` : `Password`;

  return `${identifier} ${shouldBeAlphanumeric(alphanumeric, locale)} 
  ${shouldContainUpperCase(containsUpperCase, locale)} 
  ${shouldHaveProperLength(minlength, maxlength, locale)}`;
};

/**
 * @function phoneValidationMessage
 * @param {string} value 
 * @param {boolean} showValue 
 * @param {string} locale 
 * @returns string
 */
export const phoneValidationMessage = (value, showValue, locale) => {
  const identifier = showValue
    ? `${value}`
    : locale === "es-PR"
      ? `El valor dado`
      : `The value given`;
  return locale === "es-PR"
    ? `${identifier} no es un teléfono valido.`
    : `${identifier} is not a valid phone.`;
};

/**
 * @function requiredValidationMessage
 * @param {string} fieldName 
 * @param {string} locale 
 * @returns string
 */
export const requiredValidationMessage = (fieldName = "", locale = "en-US") => {
  return locale === "es-PR"
    ? `El campo ${fieldName} es requerido.`
    : `The field ${fieldName} is required.`;
};

export const dateValidationMessage = (value, showValue, fieldName, locale = "en-US") => {
  const identifier = showValue 
    ? `${value}` 
    : locale === "es-PR" 
      ? `El valor dado` + ((typeof fieldName === "string" && fieldName !== "") && (" para " + fieldName))
      : `The value given` + ((typeof fieldName === "string" && fieldName !== "") && (" for " + fieldName));
    return locale === "es-PR"
      ? `${identifier} no es una fecha valida (MM/dd/yyy).`
      : `${identifier} is not a valid date (MM/dd/yyy).`
}

/**
 * @function ssnValidationMessage
 * @param {string} value 
 * @param {boolean} showValue 
 * @param {string} locale 
 * @returns string
 */
export const ssnValidationMessage = (value, showValue, locale = "en-US") => {
  const identifier = showValue
    ? `${value}`
    : locale === "es-PR"
      ? `El valor dado`
      : `The value given`;
  return locale === "es-PR"
    ? `${identifier} no es un número de seguro social valido.`
    : `${identifier} is not a valid social security number.`;
}