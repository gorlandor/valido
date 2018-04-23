import React from 'react';
import validator from 'validator';
import defaultStyles from './Styles';

import RequiredValidation from './RequiredValidation';

const PhoneValidation = ({ value, locale = 'en-US', showValue = false, required = false, styles = defaultStyles }) => {

  value = value.replace(/[-|\s|(|)]+/g, '');

  if (required) {
    return (showValue)
      ? (
        <React.Fragment>
          <RequiredValidation fieldName={'Phone'} value={value} styles={defaultStyles} />
          {!validator.isEmpty(value) && !validator.isMobilePhone(value, locale)
            && <p style={defaultStyles}>{`${value} is not a valid phone.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <RequiredValidation fieldName={'Phone'} value={value} styles={defaultStyles} />
          {!validator.isEmpty(value) && !validator.isMobilePhone(value, locale)
            && <p style={defaultStyles}>{`The value given is not a valid phone.`}</p>}
        </React.Fragment>
      )
  }
  else {
    return (showValue)
      ? (
        <React.Fragment>
          {!validator.isEmpty(value) && !validator.isMobilePhone(value, locale)
            && <p style={defaultStyles}>{`${value} is not a valid phone.`}</p>}
        </React.Fragment>
      )
      : (
        <React.Fragment>
          {!validator.isEmpty(value) && !validator.isMobilePhone(value, locale)
            && <p style={defaultStyles}>{`The value given is not a valid phone.`}</p>}
        </React.Fragment>
      )
  }

};

export default PhoneValidation;