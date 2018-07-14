import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";
import { dateValidationMessage } from "./ValidationMessages";

/**
 * @function DateValidation
 * @typedef {{ color: string, margin: string, padding: string }} Styles
 * @param {{ value: string, fieldName: string, locale: string, required: boolean, showValue: boolean, styles: Styles, callback: function(boolean, string) }} param0 
 * @returns JSX.Element
 */
const DateValidation = ({
  value,
  fieldName = "",  
  locale = "en-US",
  required = false,
  showValue = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {
  const isEmpty = Valido.IsEmpty(value);
  const isDate = Valido.IsDate(value);
  if (isEmpty && required) {
    return (
      <RequiredValidation fieldName={fieldName} value={value} locale={locale} />
    );
  } else {
    return (
      !isDate && (
        <p style={styles}>
          {dateValidationMessage(value, showValue, fieldName, locale)}
        </p>
      )
    );
  }
};

export default DateValidation;
