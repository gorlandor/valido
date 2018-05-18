import React from "react";
import Valido from "./Valido.util";
import defaultStyles from "./Styles";

const getValidationMessage = (fieldName = "", locale = "en-US") => {
  return locale === "es-PR"
    ? `El campo ${fieldName} es requerido.`
    : `The field ${fieldName} is required.`;
};

const RequiredValidation = ({
  value,
  fieldName = "",
  locale = "en-US",
  styles = defaultStyles
}) =>
  Valido.IsEmpty(value) && (
    <p style={defaultStyles}>{getValidationMessage(fieldName, locale)}</p>
  );

export default RequiredValidation;
