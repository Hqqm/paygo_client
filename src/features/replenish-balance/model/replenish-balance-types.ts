export type ReplenishRequestData = {
  id: string;
  amount: number;
};

export type ReplenishBalanceFormData = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  amount: string;
};

export type ReplenisgBalanceState = {
  replenishRequest: "idle" | "pending" | "succeeded" | "failed";
  replenishErr: string | null;
};
