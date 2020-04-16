export type Tranfser = {
  id: string;
  sender_login: string;
  recipient_login: string;
  comment: string;
  amount: number;
  date: string;
};

export type TranfersState = {
  entities: Tranfser[];
  loading: "idle" | "pending" | "succeeded" | "failed";
};
