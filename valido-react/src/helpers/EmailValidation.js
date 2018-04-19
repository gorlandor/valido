import React from 'react';
import validator from 'validator';
import defaultStyles from './Styles';

import RequiredValidation from './RequiredValidation';

const EmailValidation = ({ value, showValue = false, required = false, styles = defaultStyles }) => {
  if (required) {
    return (showValue)
      ? (
        <React.Fragment>
          <RequiredValidation fieldName={'Email'} value={value} styles={defaultStyles} />
          {!validator.isEmpty(value) && !validator.isEmail(value) && <p style={defaultStyles}>{`${value} is not a valid email.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <RequiredValidation fieldName={'Email'} value={value} styles={defaultStyles} />
          {!validator.isEmpty(value) && !validator.isEmail(value) && <p style={defaultStyles}>{`The value given is not a valid email.`}</p>}
        </React.Fragment>
      )
  }
  else {
    return (showValue)
      ? (
        <React.Fragment>
          {!validator.isEmail(value) && <p style={defaultStyles}>{`${value} is not a valid email.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          {!validator.isEmail(value) && <p style={defaultStyles}>{`The value given is not a valid email.`}</p>}
        </React.Fragment>
      )
  }
};

export default EmailValidation;