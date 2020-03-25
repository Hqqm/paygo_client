import { AppDispatch } from "store";
import { closedSession } from "../account-loader-slice";
import { logout } from "@features/auth/sign-in/sign-in-slice";

export const exitFromAccount = (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(closedSession());
  dispatch(logout());
};
