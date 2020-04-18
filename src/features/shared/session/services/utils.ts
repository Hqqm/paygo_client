import { AppDispatch } from "store";
import { closedSession } from "../slice";
import { resetAccountState } from "@features/shared/account/slice";
import { resetTransferHistoryState } from "@features/transfers-history/model/transfers-slice";

export const exitFromAccount = (dispatch: AppDispatch) => {
  dispatch(closedSession());
  dispatch(resetTransferHistoryState());
  dispatch(resetAccountState());
  localStorage.removeItem("token");
};
