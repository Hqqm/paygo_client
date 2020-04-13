import { AppDispatch } from "store";
import { closedSession } from "../slice";
import { resetAccount } from "@features/shared/account/slice";

export const exitFromAccount = (dispatch: AppDispatch) => {
  dispatch(closedSession());
  dispatch(resetAccount());
  localStorage.removeItem("token");
};
