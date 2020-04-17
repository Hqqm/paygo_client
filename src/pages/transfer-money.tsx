import * as React from "react";
import { WithAuthentication } from "@lib/with-authentication/with-authentication";
import { Header } from "@features/shared/header";
import { TransferMoneyForm } from "@features/transfer-money/ogranisms/transfer-money-form";
import { MainTempalte } from "@ui/templates/main-template";

export const TransferMoneyPage = () => (
  <MainTempalte
    header={<Header />}
    main={
      <WithAuthentication>
        <TransferMoneyForm />
      </WithAuthentication>
    }
  />
);
