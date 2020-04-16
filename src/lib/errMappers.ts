export const loginErrMapper = (errType: string): string => {
  switch (errType) {
    case "required":
      return "Пожалуйста, заполните поле логин";
    default:
      return "";
  }
};

export const passwordErrMapper = (errType: string): string => {
  switch (errType) {
    case "required":
      return "Пожалуйста, заполните поле пароль";
    default:
      return "";
  }
};

export const emailErrMapper = (errType: string): string => {
  switch (errType) {
    case "required":
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
