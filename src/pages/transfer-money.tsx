import * as React from "react";
import { MainTempalte } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";
import { TransferForm } from "@features/money-operations/transfer/ogranisms/transfer-form";

export const TransferMoneyPage = () => <MainTempalte header={<Header />} main={<TransferForm />} />;
