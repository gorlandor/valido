import React from 'react';
import Valido from './Valido.util';
import defaultStyles from './Styles';

import RequiredValidation from './RequiredValidation';

const PhoneValidation = ({
  value,
  locale = 'en-US',
  showValue = false,
  required = false,
  styles = defaultStyles,
  callback = (valid = false, type = "") => { }
}) => {

  value = Valido.GetPhoneNumber(value);
  const isPhoneNumber = Valido.IsPhoneNumber(value, locale);
  const isEmpty = Valido.IsEmpty(value);
  callback(isPhoneNumber, "Phone");

  if (required) {
    return (showValue)
      ? (
        <React.Fragment>
          <RequiredValidation fieldName={'Phone'} value={value} styles={defaultStyles} />
          {!isEmpty && !isPhoneNumber
            && <p style={defaultStyles}>{`${value} is not a valid phone.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <RequiredValidation fieldName={'Phone'} value={value} styles={defaultStyles} />
          {!isEmpty && !isPhoneNumber
            && <p style={defaultStyles}>{`The value given is not a valid phone.`}</p>}
        </React.Fragment>
      )
  }
  else {
    return (showValue)
      ? (
        <React.Fragment>
          {!isPhoneNumber
            && <p style={defaultStyles}>{`${value} is not a valid phone.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          {!isPhoneNumber
            && <p style={defaultStyles}>{`The value given is not a valid phone.`}</p>}
        </React.Fragment>
      )
  }

};

export default PhoneValidation;