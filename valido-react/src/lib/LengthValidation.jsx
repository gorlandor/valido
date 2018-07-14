import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";
import { lengthValidationMessage } from "./ValidationMessages";

/**
 * @function LengthValidation
 * @typedef {{ color: string, margin: string, padding: string }} Styles
 * @param {{ value: string, fieldName: string, minlength: number, maxlength: number, locale: string, styles: Styles, callback: function(boolean, string) }} param0 
 * @returns JSX.Element
 */
const LengthValidation = ({
  value,
  fieldName = "",
  minlength = 6,
  maxlength = 32,
  locale = "en-US",
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {
  const isEmpty = Valido.IsEmpty(value);
  const hasProperLength = Valido.HasProperLength(value, minlength, maxlength);
  if (isEmpty) {
    return (
      <RequiredValidation fieldName={fieldName} value={value} locale={locale} />
    );
  } else {
    return (
      !hasProperLength && (
        <p style={styles}>
          {lengthValidationMessage(fieldName, minlength, maxlength, locale)}
        </p>
      )
    );
  }
};

export default LengthValidation;
