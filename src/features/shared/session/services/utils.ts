import { AppDispatch } from "store";
import { closedSession } from "../slice";
import { resetAccountState } from "@features/shared/account/slice";

export const exitFromAccount = (dispatch: AppDispatch) => {
  dispatch(closedSession());
  dispatch(resetAccountState());
  localStorage.removeItem("token");
};
