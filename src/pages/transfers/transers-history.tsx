import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainTempalte } from "@ui/templates/main-template";
import { fetchingTranfers } from "./model/transfer-store";
import { selectTransfers } from "./model/transfers-selectors";
import { Header } from "@features/shared/header";
import { TransferHistory } from "./molecules/transfer-card";

export const TransfersHistoryPage = () => {
  const transfers = useSelector(selectTransfers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchingTranfers());
  }, []);

  return <MainTempalte header={<Header />} main={<TransferHistory transfers={transfers} />} />;
};
