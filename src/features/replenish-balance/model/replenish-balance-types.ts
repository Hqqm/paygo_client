export type ReplenishRequestData = {
  id: string;
  amount: number;
};

export type ReplenishBalanceFormData = {
  cardNumber: string;
  amount: string;
};

export type ReplenisgBalanceState = {
  replenishRequest: "idle" | "pending" | "succeeded" | "failed";
  replenishErr: string | null;
};
