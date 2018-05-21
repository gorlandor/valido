import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

import RequiredValidation from "./RequiredValidation";
import { phoneValidationMessage } from "./ValidationMessages";


const PhoneValidation = ({
  value,
  locale = "en-US",
  showValue = false,
  required = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {
  value = Valido.GetPhoneNumber(value);
  const isPhoneNumber = Valido.IsPhoneNumber(value, "en-US");
  const isEmpty = Valido.IsEmpty(value);
  callback(isPhoneNumber, "Phone");

  if (required) {
    return (
      <React.Fragment>
        <RequiredValidation
          fieldName={locale === "es-PR" ? "teléfono" : "phone"}
          locale={locale}
          value={value}
          styles={defaultStyles}
        />
        {!isEmpty &&
          !isPhoneNumber && (
            <p style={defaultStyles}>
              {phoneValidationMessage(value, showValue, locale)}
            </p>
          )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {!isPhoneNumber && (
          <p style={defaultStyles}>
            {phoneValidationMessage(value, showValue, locale)}
          </p>
        )}
      </React.Fragment>
    );
  }
};

export default PhoneValidation;
