export const emailValidator = () => ({
  pattern: /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/,
  validate: {
    isEmpty: (value: string) => value.length > 0,
    lessThenOne: (value: string) => value.length > 1,
  },
});

export const loginValidator = () => ({
  validate: {
    isEmpty: (value: string) => value.length > 0,
    lessThenOne: (value: string) => value.length > 1,
  },
});

export const passwordValidator = () => ({
  validate: {
    isEmpty: (value: string) => value.length > 0,
    lessThenThree: (value: string) => value.length > 3,
  },
});

export const amountValidator = () => ({
  validate: {
    isEmpty: (value: string) => value.length > 0,
    positiveValue: (value: string) => parseInt(value, 10) > 0,
  },
  pattern: /^\d+$/,
});

export const cardValidator = () => ({
  pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
  validate: {
    isEmpty: (value: string) => value.length > 0,
  },
});
