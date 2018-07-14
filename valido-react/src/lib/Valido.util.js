import validator from "validator";

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

}

export default Valido;
