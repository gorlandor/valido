const validator = require("validator");

/**   
 * @typedef {Object} TextInputProps
 * @property {string} value - The input value
 * @property {string} fieldName - The input label or labeled-by, used for validation message
 * @property {string[]} errors - A collection of the validation errors
 * @property {string} [required] - Indicates whether the input is required
 * @property {string} [minLength] - Specifies the minimum character length of an input, if present
 * @property {string} [maxLength] - Specifies the maximum character length of an input, if present   
 * @property {boolean} dirty - Indicates whether the input has been edited by the user
 */

/**   
 * @typedef {Object} InputValidationResult
 * @property {boolean} valid - Indicates whether the input meets the validation tests 
 * @property {string[]} errors - A collection of the validation errors  
 */

/**
 * Validation library for handling checks for
 * valid Email, Password, Phone, SSN, TIN, Date (MM/dd/yyyy) and Alphanumeric formats,
 * as well as min and max length, and case sensitivity. 
 */
class Valido {

  /** @type {RegExp} */
  static containsNumbers = new RegExp(/(?=.*[\d])/, "g");
  /** @type {RegExp} */
  static containsLowerCase = new RegExp(/(?=.*[a-z])/, "g");
  /** @type {RegExp} */
  static containsUpperCase = new RegExp(/(?=.*[A-Z])/, "g");
  /** @type {RegExp} */
  static containsSpecialChar = new RegExp(`[!@#$%^&*(),.?":{}|<>]`);

  static IsAlphaNumericOnly(value = "") {
    if (!typeof value === "string") {
      return false;
    }

    const regex = new RegExp(/^[A-Za-z0-9]+$/);
    return regex.test(value);
  }

  static IsNumericOnly(value = "") {
    if (!typeof value === "string") {
      return false;
    }

    const regex = new RegExp(/^[0-9]+$/);
    return regex.test(value);
  }

  /**
   * @function Valido.HasProperLength
   * @param {string} value 
   * @param {number} minlength 
   * @param {number} maxlength 
   * @returns boolean
   */
  static HasProperLength(value = "", minlength = 8, maxlength = 15) {
    if (typeof value !== "string") return false;

    const length = `${value}`.length;
    return (length >= minlength && length <= maxlength);
  }

  /**
   * @function Valido.IsEmpty
   * @param {string} value 
   * @returns boolean
   */
  static IsEmpty(value = "") {
    if (typeof value !== "string") return false;

    const length = `${value}`.length;
    return length === 0;
  }

  static IsDate(value = "") {
    if (typeof value !== "string") return false;

    const date = new Date(value);
    const regex = new RegExp(/^(?:\d{2}\/\d{2}\/\d{4})$/);
    return regex.test(value) && date instanceof Date && !isNaN(date);
  }

  /**
   * @function Valido.IsEmail
   * @param {string} value 
   * @returns boolean
   */
  static IsEmail(value) {
    if (typeof value !== "string") return false;

    return validator.isEmail(value);
  }

  /**
   * @function Valido.IsPassword
   * @param {string} value 
   * @param {boolean} alphanumeric 
   * @param {boolean} containsUpperCase 
   * @param {number} minlength 
   * @param {number} maxlength 
   * @returns boolean
   */
  static IsPassword(value, alphanumeric = true, containsUpperCase = true, minlength = 8, maxlength = 15) {
    if (typeof value !== "string") return false;

    const shouldContainNumbers = alphanumeric ? `((?=.*\\d)|(?=.*\\W+))` : ``;
    const shouldContainUpperCase = containsUpperCase ? `(?=.*[A-Z])` : ``;
    const regex = new RegExp(`(?=^.{${minlength},${maxlength}}$)${shouldContainNumbers}(?![.\\n])${shouldContainUpperCase}(?=.*[a-z]).*$`);
    return regex.test(value);
  };

  /**
   * @function Valido.IsPhoneNumber
   * @param {string} value 
   * @param {string} locale 
   * @returns boolean
   */
  static IsPhoneNumber(value = "", locale = "en-US") {
    if (typeof value !== "string") return false;

    return validator.isMobilePhone(this.GetPhoneNumber(value), locale);
  }

  /**
   * @function Valido.GetPhoneNumber
   * @param {string} value 
   * @returns string
   */
  static GetPhoneNumber(value = "") {
    if (typeof value !== "string") return false;

    const regex = new RegExp(/[-|\s|(|)]+/, "g");
    return value.replace(regex, "");
  }

  static IsResidentialAddress(value = "") {
    if (typeof value !== "string") return false;

    const regex = new RegExp(/^po|^po box|^p.o.|^p.o. box|^post office box|^pmb|^private mailbox|^hc|^rr|hc [0-9]+ box [0-9]+|po box [0-9]+|rr [0-9]+ box [0-9]+/gim);
    return regex.test(value) === false;
  }

  /**
   * @function Valido.IsSSN
   * @param {string} value
   * @returns boolean
   */
  static IsSSN(value = "") {
    if (typeof value !== "string") return false;

    const regex = new RegExp(/^(?:\d{3}-\d{2}-\d{4})$/);
    return regex.test(value);
  }

  /**
   * @function Valido.IsTIN
   * @param {string} value 
   * @returns boolean
   */
  static IsTIN(value = "") {
    if (typeof value !== "string") return false;

    const regex = new RegExp(/^(?:\d{2}-\d{7})$/);
    return regex.test(value);
  }


  /**
   * Validates the email address given meets the appropriate format
   * @param {string} value 
   */
  static validateEmail(value) {
    let errors = [];

    if (value.length > 0) {
      if (!Valido.IsEmail(value)) {
        errors.push("The value given is not a valid email address");
      }
    }

    return { valid: errors.length === 0, errors };
  }

  static validatePassword(value, name, props) {
    let errors = [];

    if (value.length > 0) {
      if (
        !Valido.IsPassword(
          value,
          props[name].alphanumeric,
          props[name].containsUpperCase,
          props[name].minLength,
          props[name].maxLength
        )
      ) {
        if ('containsUpperCase' in props[name] && Valido.containsUpperCase.test(value) === false) {
          errors.push(`Password must contain at least one uppercase characters`);
        }

        if ('alphanumeric' in props[name] && Valido.containsNumbers.test(value) === false) {
          errors.push(`Password must contain at least one number`);
        }
      }
      if ('containsSpecialChar' in props[name] && Valido.containsSpecialChar.test(value) === false) {
        errors.push(`Password must contain at least one special character`);
      }
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Validates if the input meets the specified min length and returns a collection of the validation errors
   * @param {TextInputProps} props 
   * @returns {InputValidationResult} 
   */
  static validateMinLength(props) {
    let errors = [];

    if (props.minLength && props.value.length < props.minLength && props.value.length > 0) {
      errors.push(`The field ${props.fieldName} must be at least ${props.minLength} characters long`);
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Validates if the input meets the specified max length and returns a collection of the validation errors
   * @param {TextInputProps} props 
   * @returns {InputValidationResult} 
   */
  static validateMaxLength(props) {
    let errors = [];

    if (props.maxLength && props.value.length > props.maxLength) {
      errors.push(`The field ${props.fieldName} does not meet the maximum length`);
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Validates if the input meets the specified min length and returns a collection of the validation errors
   * @param {TextInputProps} props 
   * @returns {InputValidationResult} 
   */
  static validateProperLength(props) {
    let errors = [];

    if (props.minLength && props.value.length < props.minLength && props.value.length > 0) {
      errors.push(`The field ${props.fieldName} must be at least ${props.minLength} characters long`);
    }

    if (props.maxLength && props.value.length > props.maxLength) {
      errors.push(`The field ${props.fieldName} does not meet the maximum length`);
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Validates if the input is required and has a value, and returns a valid flag along with a collection of the validation errors
   * @param {TextInputProps} props 
   * @returns {InputValidationResult} 
   */
  static validateRequired(props) {
    let errors = [];

    if (props.required && props.value.length === 0 && (props.dirty)) {
      errors.push(`The field ${props.fieldName} is required`);
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * 
   * @param {{[x: string]: TextInputProps }} values 
   * @returns {Promise<boolean>} result
   */
  static isFormValid(values) {
    const inputKeys = Object.keys(values);

    const result = inputKeys.every(function (propertyName) {

      /**
       * @type {boolean}
       */
      const propertyIsRequired = typeof values[propertyName] === "object" && values[propertyName].required;

      // if not required then it evaluates to true, otherwise it checks that there are no errors and the input is not empty
      const isValid =
        !propertyIsRequired ||
        (values[propertyName].errors.length === 0 && values[propertyName].value.length > 0);

      return isValid;
    });

    return Promise.resolve(result);
  }

}

module.exports = Valido;
