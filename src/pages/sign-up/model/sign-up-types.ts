export type RegisterAccountData = {
  id: string;
  email: string;
  login: string;
  password: string;
};

export type SignUpFormData = {
  email: string;
  login: string;
  password: string;
};

export type SignUpState = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  responseErr: string;
};
