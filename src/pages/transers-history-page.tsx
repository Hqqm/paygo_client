import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "@features/shared/header";
import { selectTransfers } from "@features/transfers-history/model/transfers-selectors";
import { fetchingTranfers } from "@features/transfers-history/model/transfers-effects";
import { TransferHistory } from "@features/transfers-history/molecules/transfer-history";
import { TransferMoneyTemplate } from "@ui/templates/transfer-money-teplate";
import { WithAuthentication } from "@lib/with-authentication/with-authentication";

export const TransfersHistoryPage = () => {
  const transfers = useSelector(selectTransfers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchingTranfers());
  }, []);

  return (
    <TransferMoneyTemplate
      header={<Header />}
      main={
        <WithAuthentication>
          <TransferHistory transfers={transfers} />{" "}
        </WithAuthentication>
      }
    />
  );
};
