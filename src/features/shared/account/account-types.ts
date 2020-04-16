export type Account = {
  id: string;
  email: string;
  login: string;
  balance: number;
  createAt: string;
};

export type AccountState = {
  entity: Account | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  err: string | null;
};
