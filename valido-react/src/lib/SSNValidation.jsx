import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";
import { ssnValidationMessage } from "./ValidationMessages";

/**
 * @function SSNValidation
 * @typedef {{ color: string, margin: string, padding: string }} Styles
 * @param {{value: string, fieldName: string, locale: string, required: boolean, showValue: boolean, styles: Styles, callback: function(boolean, string) }} param0 
 * @returns JSX.Element
 */
const SSNValidation = ({
  value,
  fieldName,
  locale = "en-US",
  required = false,
  showValue = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {
  const isSSN = Valido.IsSSN(value);
  const isEmpty = Valido.IsEmpty(value);
  callback(isSSN, "SSN");

  if (required) {
    return (
      <React.Fragment>
        <RequiredValidation
          fieldName={fieldName}
          locale={locale}
          value={value}
          styles={styles}
        />
        {!isEmpty &&
          !isSSN && (
            <p style={styles}>
              {ssnValidationMessage(value, showValue, locale)}
            </p>
          )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {!isSSN && (
          <p style={styles}>
            {ssnValidationMessage(value, showValue, locale)}
          </p>
        )}
      </React.Fragment>
    );
  }
};

export default SSNValidation;
