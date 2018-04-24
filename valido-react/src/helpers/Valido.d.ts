declare class Valido {

  static containsNumbers: RegExp;

  static containsLowerCase: RegExp;

  static containsUpperCase: RegExp;

  static HasProperLength(value: string, minlength: number, maxlength: number);

  static IsEmpty(value: string);

  static IsEmail(value: string);

  static IsPassword(value: string, alphanumeric: boolean, containsUpperCase: boolean, minlength: number, maxlength: number);

  static IsPhoneNumber(value: string, locale: string);

  static GetPhoneNumber(value: string);

}