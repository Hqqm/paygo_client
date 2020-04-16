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
