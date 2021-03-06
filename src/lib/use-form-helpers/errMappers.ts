export const loginErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Пожалуйста, заполните поле логин";
    case "lessThenOne":
      return "Длина логина должна быть больше 1 символа";
    default:
      return "";
  }
};

export const passwordErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Пожалуйста, заполните поле пароль";
    case "lessThenThree":
      return "Длина Пароля должна быть больше 3 символов";
    default:
      return "";
  }
};

export const emailErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Пожалуйста, заполните поле почта";
    case "pattern":
      return "Пожалуйста, введите корректный адрес почты";
    default:
      return "";
  }
};

export const cardErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Заполните поле номер карты";
    case "pattern":
      return "Введите корректный номер карты";
    default:
      return "";
  }
};

export const amountErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Заполните поле сумма";
    case "pattern":
      return "Сумма может содержать только цифры";
    case "positiveValue":
      return "Cумма должна быть больше 0";
    default:
      return "";
  }
};

export const fullNameErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Заполните поле имя";
    case "pattern":
      return "Введите корректное имя";
    default:
      return "";
  }
};

export const expiryErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Заполните поле окончание времени действия";
    case "pattern":
      return "Введите корректное значение";
    default:
      return "";
  }
};

export const cvcErrMapper = (errType: string): string => {
  switch (errType) {
    case "isEmpty":
      return "Заполните поле окончание cvc";
    case "pattern":
      return "Введите корректное значение";
    default:
      return "";
  }
};
