import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";
import { lengthValidationMessage } from "./ValidationMessages";


const LengthValidation = ({
  value,
  fieldName = "",
  minlength = 6,
  maxlength = 32,
  locale = "en-US"
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
        <p style={defaultStyles}>
          {lengthValidationMessage(fieldName, minlength, maxlength, locale)}
        </p>
      )
    );
  }
};

export default LengthValidation;
