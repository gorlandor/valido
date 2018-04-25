import React from 'react';
import Valido from './Valido.util';
import defaultStyles from './Styles';

import RequiredValidation from './RequiredValidation';

const EmailValidation = ({
  value,
  showValue = false,
  required = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {

  const isEmail = Valido.IsEmail(value);
  const isEmpty = Valido.IsEmpty(value);
  callback(isEmail, "Email");

  if (required) {
    return (showValue)
      ? (
        <React.Fragment>
          <RequiredValidation fieldName={'Email'} value={value} styles={defaultStyles} />
          {!isEmpty && !isEmail && <p style={defaultStyles}>{`${value} is not a valid email.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <RequiredValidation fieldName={'Email'} value={value} styles={defaultStyles} />
          {!isEmpty && !isEmail && <p style={defaultStyles}>{`The value given is not a valid email.`}</p>}
        </React.Fragment>
      )
  }
  else {
    return (showValue)
      ? (
        <React.Fragment>
          {!isEmail && <p style={defaultStyles}>{`${value} is not a valid email.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          {!isEmail && <p style={defaultStyles}>{`The value given is not a valid email.`}</p>}
        </React.Fragment>
      )
  }
};

export default EmailValidation;
