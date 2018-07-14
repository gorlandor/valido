import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";
import { requiredValidationMessage } from "./ValidationMessages";

/**
 * @function RequiredValidation
 * @typedef {{ color: string, margin: string, padding: string }} Styles
 * @param {{ value: string, fieldName: string, locale: string, styles: Styles }} param0 
 * @returns JSX.Element
 */
const RequiredValidation = ({
  value,
  fieldName = "",
  locale = "en-US",
  styles = defaultStyles
}) =>
  Valido.IsEmpty(value) && (
    <p style={styles}>{requiredValidationMessage(fieldName, locale)}</p>
  );

export default RequiredValidation;
