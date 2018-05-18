import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";

const getValidationMessage = (value, showValue, locale) => {
  const identifier = showValue
    ? `${value}`
    : locale === "es-PR"
      ? `El valor dado`
      : `The value given`;
  return locale === "es-PR"
    ? `${identifier} no es un email valido.`
    : `${identifier} is not a valid email.`;
};

const EmailValidation = ({
  value,
  locale = "en-US",
  required = false,
  showValue = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {
  const isEmail = Valido.IsEmail(value);
  const isEmpty = Valido.IsEmpty(value);
  callback(isEmail, "Email");

  if (required) {
    return (
      <React.Fragment>
        <RequiredValidation
          fieldName={"email"}
          locale={locale}
          value={value}
          styles={defaultStyles}
        />
        {!isEmpty &&
          !isEmail && (
            <p style={defaultStyles}>
              {getValidationMessage(value, showValue, locale)}
            </p>
          )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {!isEmail && (
          <p style={defaultStyles}>
            {getValidationMessage(value, showValue, locale)}
          </p>
        )}
      </React.Fragment>
    );
  }
};

export default EmailValidation;
