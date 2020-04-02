import { AppDispatch } from "store";
import { closedSession } from "../slice";

export const exitFromAccount = (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(closedSession());
};
