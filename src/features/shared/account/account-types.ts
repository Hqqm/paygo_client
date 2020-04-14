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
  replenishRequest: "idle" | "pending" | "succeeded" | "failed";
  replenishErr: string | null;
  transferRequest: "idle" | "pending" | "succeeded" | "failed";
  transferErr: string | null;
};
