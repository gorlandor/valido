import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";

const PasswordValidation = ({
  value,
  alphanumeric = true,
  containsUpperCase = true,
  minlength = 8,
  maxlength = 15,
  locale = "en-US",
  showValue = false,
  required = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => {}
}) => {
  const isPassword = Valido.IsPassword(
    value,
    alphanumeric,
    containsUpperCase,
    minlength,
    maxlength
  );

  const isEmpty = Valido.IsEmpty(value);

  callback(isPassword, "Password");

  const validationMessageES = {
    alphanumeric: alphanumeric ? `ser alfanumérico,` : ``,
    shouldContainUpperCase: containsUpperCase
      ? `contener letra(s) mayúsculas,`
      : ``,
    properLength: `tener entre ${minlength} y ${maxlength} carácteres.`
  };

  const validationMessage = {
    alphanumeric: alphanumeric ? `be alphanumeric,` : ``,
    shouldContainUpperCase: containsUpperCase
      ? `contain capital letter(s),`
      : ``,
    properLength: `have a length of ${minlength} to ${maxlength} chars.`
  };

  const getValidationMessage = (
    value,
    showValue,
    locale,
    validationMessage,
    validationMessageES
  ) => {
    const identifier = showValue
      ? `${value}`
      : `Password`;

    return locale === "es-PR"
      ? `${identifier} debe ${validationMessageES.alphanumeric} ${
          validationMessageES.shouldContainUpperCase
        } ${validationMessageES.properLength}`
      : `${identifier} must ${validationMessage.alphanumeric} ${
          validationMessage.shouldContainUpperCase
        } ${validationMessage.properLength}`;
  };

  if (required) {
    return (
      <React.Fragment>
        <RequiredValidation
          fieldName={"password"}
          value={value}
          locale={locale}
          styles={defaultStyles}
        />
        {!isEmpty &&
          !isPassword && (
            <p style={defaultStyles}>
              {getValidationMessage(
                value,
                showValue,
                locale,
                validationMessage,
                validationMessageES
              )}
            </p>
          )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {!isPassword && (
          <p style={defaultStyles}>
            {getValidationMessage(
              value,
              showValue,
              locale,
              validationMessage,
              validationMessageES
            )}
          </p>
        )}
      </React.Fragment>
    );
  }
};

export default PasswordValidation;
