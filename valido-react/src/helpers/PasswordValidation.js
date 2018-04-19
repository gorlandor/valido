import React from 'react';
import validator from 'validator';
import defaultStyles from './Styles';

import RequiredValidation from './RequiredValidation';

const PasswordValidation = ({ value, alphanumeric = true, minlength = 8, showValue = false, required = false, styles = defaultStyles }) => {

  const isPassword = new RegExp(`(?=^.{${minlength},}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$`);

  if (required) {
    return (showValue)
      ? (
        <React.Fragment>
          <RequiredValidation fieldName={'Password'} value={value} styles={defaultStyles} />
          {!validator.isEmpty(value) && !isPassword.test(value) && <p style={defaultStyles}>{`${value} must be alphanumeric, contain capital letter(s), and have a min of ${minlength} chars.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <RequiredValidation fieldName={'Password'} value={value} styles={defaultStyles} />
          {!validator.isEmpty(value) && !isPassword.test(value) && <p style={defaultStyles}>{`Password must be alphanumeric, contain capital letter(s), and have a min of ${minlength} chars.`}</p>}
        </React.Fragment>
      )
  }
  else {
    return (showValue)
      ? (
        <React.Fragment>
          {!isPassword.test(value) && <p style={defaultStyles}>{`${value} must be alphanumeric, contain capital letter(s), and have a min of ${minlength} chars.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          {!isPassword.test(value) && <p style={defaultStyles}>{`Password must be alphanumeric, contain capital letter(s), and have a min of ${minlength} chars.`}</p>}
        </React.Fragment>
      )
  }

};

export default PasswordValidation;