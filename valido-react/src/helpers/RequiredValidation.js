import React from 'react';
import validator from 'validator';
import defaultStyles from './Styles';

const RequiredValidation = ({ value, fieldName, styles = defaultStyles }) => (
  validator.isEmpty(value) && <p style={defaultStyles}>{`The field ${fieldName} is required.`}</p>
);

export default RequiredValidation;