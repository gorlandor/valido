import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";
import { emailValidationMessage } from "./ValidationMessages";

/**
 * @function EmailValidation
 * @typedef {{ color: string, margin: string, padding: string }} Styles 
 * @param {{ value: string, locale: string, required: boolean, showValue: boolean, styles: Styles, callback: function(boolean, string) }} param0
 * @returns JSX.Element 
 */
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
          styles={styles}
        />
        {!isEmpty &&
          !isEmail && (
            <p style={styles}>
              {emailValidationMessage(value, showValue, locale)}
            </p>
          )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {!isEmail && (
          <p style={styles}>
            {emailValidationMessage(value, showValue, locale)}
          </p>
        )}
      </React.Fragment>
    );
  }
};

export default EmailValidation;
