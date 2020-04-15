export const cardErrConverter = (err: any): string => {
  if (err.type === "required") return "Пожалуйста, заполните поле 'Номер карты'";
  else if (err.type === "pattern") return "Пожалуйста, введите корректный номер карты";
  else return "";
};

export const amountErrConverter = (err: any): string => {
  if (err.type === "required") return "Пожалуйста, заполните поле 'Сумма'";
  else if (err.type === "pattern") return "Пожалуйста, введите корректную сумму";
  else return "";
};
