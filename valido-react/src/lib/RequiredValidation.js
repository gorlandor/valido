import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";
import { requiredValidationMessage } from "./ValidationMessages";

const RequiredValidation = ({
  value,
  fieldName = "",
  locale = "en-US",
  styles = defaultStyles
}) =>
  Valido.IsEmpty(value) && (
    <p style={defaultStyles}>{requiredValidationMessage(fieldName, locale)}</p>
  );

export default RequiredValidation;
