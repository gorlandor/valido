import validator from 'validator';
import RequiredValidation from './RequiredValidation';
import EmailValidation from './EmailValidation';
import PasswordValidation from './PasswordValidation';
import PhoneValidation from './PhoneValidation';

class Valido {

  static IsEmail (value) {
    return validator.isEmail(value);
  }

  static IsPassword (value, alphanumeric = true, minlength = 8) {
    const regex = new RegExp(`(?=^.{${minlength},}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$`);
    return regex.test(value);
  };

  static IsPhoneNumber (value = '', locale = 'en-US') {
    return validator.isMobilePhone(Valido.GetPhoneNumber(value), locale);
  }

  static GetPhoneNumber (value = '') {
    const regex = new RegExp(/[-|\s|(|)]+/, 'g');
    return value.replace(regex, '');
  }

}

export { Valido, RequiredValidation, EmailValidation, PasswordValidation, PhoneValidation };
