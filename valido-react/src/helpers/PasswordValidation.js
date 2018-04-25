import React from 'react';
import Valido from './Valido.util';
import defaultStyles from './Styles';

import RequiredValidation from './RequiredValidation';

const PasswordValidation = ({ value,
  alphanumeric = true,
  containsUpperCase = true,
  minlength = 8,
  maxlength = 15,
  showValue = false,
  required = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {

  const isPassword = Valido.IsPassword(value, alphanumeric, containsUpperCase, minlength, maxlength);
  const isEmpty = Valido.IsEmpty(value);
  callback(isPassword, "Password");

  const validationMessage = {
    alphanumeric: alphanumeric ? `be alphanumeric,` : ``,
    shouldContainUpperCase: containsUpperCase ? `contain capital letter(s),` : ``,
    properLength: `have a length of ${minlength} to ${maxlength} chars.`
  };

  if (required) {
    return (showValue)
      ? (
        <React.Fragment>
          <RequiredValidation fieldName={'Password'} value={value} styles={defaultStyles} />
          {!isEmpty && !isPassword
            && <p style={defaultStyles}>
              {`${value} must ${validationMessage.alphanumeric} ${validationMessage.shouldContainUpperCase} ${validationMessage.properLength}`}
            </p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <RequiredValidation fieldName={'Password'} value={value} styles={defaultStyles} />
          {!isEmpty && !isPassword
            && <p style={defaultStyles}>
              {`Password must ${validationMessage.alphanumeric} ${validationMessage.shouldContainUpperCase} ${validationMessage.properLength}`}
            </p>}
        </React.Fragment>
      )
  }
  else {
    return (showValue)
      ? (
        <React.Fragment>
          {!isPassword
            && <p style={defaultStyles}>
              {`${value} must ${validationMessage.alphanumeric} ${validationMessage.shouldContainUpperCase} ${validationMessage.properLength}`}
            </p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          {!isPassword
            && <p style={defaultStyles}>
              {`Password must ${validationMessage.alphanumeric} ${validationMessage.shouldContainUpperCase} ${validationMessage.properLength}`}
            </p>}
        </React.Fragment>
      )
  }

};

export default PasswordValidation;
