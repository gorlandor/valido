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

const shouldBeAlphanumeric = (alphanumeric = true, locale = "en-US") => {
  if (alphanumeric === false) {
    return "";
  } else {
    return locale === "es-PR"
      ? `debe ser alfanumérico,`
      : `should be alphanumeric,`;
  }
};

const shouldContainUpperCase = (containsUpperCase = true, locale = "en-US") => {
  if (containsUpperCase === false) {
    return "";
  } else {
    return locale === "es-PR"
      ? `debe contener letra(s) mayúsculas,`
      : `should contain capital letter(s),`;
  }
};

const shouldHaveProperLength = (minlength, maxlength, locale = "en-US") => {
  return locale === "es-PR"
    ? `debe tener entre ${minlength} y ${maxlength} carácteres.`
    : `should have a length of ${minlength} to ${maxlength} chars.`;
};

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

export const requiredValidationMessage = (fieldName = "", locale = "en-US") => {
  return locale === "es-PR"
    ? `El campo ${fieldName} es requerido.`
    : `The field ${fieldName} is required.`;
};
