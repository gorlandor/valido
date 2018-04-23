import validator from "validator";

class Valido {

  static containsNumbers = new RegExp(/(?=.*[\d])/, "g");
  static containsLowerCase = new RegExp(/(?=.*[a-z])/, "g");
  static containsUpperCase = new RegExp(/(?=.*[A-Z])/, "g");

  static HasProperLength(value = "", minlength = 8, maxlength = 15) {
    const length = `${value}`.length;
    return (length >= minlength && length <= maxlength);
  }

  static IsEmpty(value = "") {
    const length = `${value}`.length;
    return length === 0;
  }

  static IsEmail(value) {
    return validator.isEmail(value);
  }

  static IsPassword(value, alphanumeric = true, containsUpperCase = true, minlength = 8, maxlength = 15) {
    const shouldContainUpperCase = containsUpperCase ? `(?=.*[A-Z])` : ``;
    const regex = new RegExp(`(?=^.{${minlength},${maxlength}}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])${shouldContainUpperCase}(?=.*[a-z]).*$`);
    return regex.test(value);
  };

  static IsPhoneNumber(value = "", locale = "en-US") {
    return validator.isMobilePhone(this.GetPhoneNumber(value), locale);
  }

  static GetPhoneNumber(value = "") {
    const regex = new RegExp(/[-|\s|(|)]+/, "g");
    return value.replace(regex, "");
  }

}

export default Valido;
