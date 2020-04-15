export const loginErrMapper = (errType: string): string => {
  switch (errType) {
    case "required":
      return "Пожалуйста, заполните поле логин";
    default:
      return "";
  }
};

export const passwordErrMaper = (errType: string): string => {
  switch (errType) {
    case "required":
      return "Пожалуйста, заполните поле пароль";
    default:
      return "";
  }
};
