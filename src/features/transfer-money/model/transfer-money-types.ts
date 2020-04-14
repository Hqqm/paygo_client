export type TransferMoneyData = {
  id: string;
  recipient_login: string;
  amount: number;
  comment: string;
};

export type TransferMoneyFormData = {
  recipientLogin: string;
  amount: string;
  comment: string;
};
