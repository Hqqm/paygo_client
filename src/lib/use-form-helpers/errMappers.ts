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
    case "required":
      return "Пожалуйста, заполните поле номер карты";
    case "pattern":
      return "Пожалуйста, введите корректный номер карты";
    default:
      return "";
  }
};

export const amountErrMapper = (errType: string): string => {
  switch (errType) {
    case "required":
      return "Пожалуйста, заполните поле сумма";
    case "pattern":
      return "Пожалуйста, введите корректную сумму";
    case "min":
      return "Cумма должна быть больше 0";
    default:
      return "";
  }
};
