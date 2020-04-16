import * as React from "react";
import { MainTempalte } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";
import { TransferMoneyForm } from "@features/transfer-money/ogranisms/transfer-money-form";

export const TransferMoneyPage = () => (
  <MainTempalte header={<Header />} main={<TransferMoneyForm />} />
);
