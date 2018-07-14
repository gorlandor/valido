import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";
import { passwordValidationMessage } from "./ValidationMessages";

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
  callback = (valid = false, type = "") => { }
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


  if (required) {
    return (
      <React.Fragment>
        <RequiredValidation
          fieldName={"password"}
          value={value}
          locale={locale}
          styles={styles}
        />
        {!isEmpty &&
          !isPassword && (
            <p style={styles}>
              {passwordValidationMessage(
                value,
                alphanumeric,
                containsUpperCase,
                minlength,
                maxlength,
                showValue,
                locale
              )}
            </p>
          )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {!isPassword && (
          <p style={styles}>
          {passwordValidationMessage(
            value,
            alphanumeric,
            containsUpperCase,
            minlength,
            maxlength,
            showValue,
            locale
          )}
          </p>
        )}
      </React.Fragment>
    );
  }
};

export default PasswordValidation;
