const emailRegexp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/; // tslint:disable-line
const nameRegexp = /^[А-Я][А-Яа-я_-]{2,55}$/;

export const emailValidator = (errors: any, field: string, value: string) => {
  if (!emailRegexp.test(value)) {
    return { ...errors, [field]: 'Введите правильный E-mail' };
  }
  return errors;
};

export const nameValidator = (errors: any, field: string, value: string) => {
  if (!nameRegexp.test(value)) {
    return { ...errors, [field]: 'Проверьте правильность ввода (с большой буквы, только кириллица)' };
  }
  return errors;
};

export const lengthValidator = (
  errors: any,
  field: string,
  value: string,
  minLength: number,
  maxLength: number,
) => {
  if (value.length < minLength || value.length > maxLength) {
    return { ...errors, [field]: `Поле должно содержать от ${minLength} до ${maxLength} символов` };
  }
  return errors;
};

export const requiredValidator = (errors: any, field: string, value: string) => {
  if (!value) {
    return { ...errors, [field]: 'Заполните поле' };
  }
  return errors;
};

export const passwordValidator = (
  errors: any,
  value: string,
  confirmfield: string,
  confirmvalue: string,
) => {
  if (value !== confirmvalue) {
    return { ...errors, [confirmfield]: 'Пароли не совпадают' };
  }
  return errors;
};
