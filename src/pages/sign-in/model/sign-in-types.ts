export type SignInState = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

export type SignInFormData = {
  login: string;
  password: string;
};

export type SignInResponse = {
  token: string;
};
