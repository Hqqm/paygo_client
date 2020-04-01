import { AppDispatch } from "store";
import { session } from "../session-slice";
import { logout } from "@features/auth/sign-in/sign-in-slice";

export const exitFromAccount = (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(session.actions.closedSession());
  dispatch(logout());
};
