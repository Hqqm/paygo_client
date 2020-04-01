import { AppThunk } from "root-reducer";
import { AppDispatch } from "store";
import { session, Account } from "../session-slice";

export const loadAccount = (): AppThunk => async (dispatch: AppDispatch) => {
  const { loadingSession, loadedSession, loadingSessionError } = session.actions;
  dispatch(loadingSession());

  try {
    const response = await loadAccountRequest();
    const account = (await response.json()) as Account;
    dispatch(loadedSession(account));
  } catch (err) {
    dispatch(loadingSessionError(err.message as string));
  }
};

const loadAccountRequest = async () => {
  return fetch("server/api/getAccount", {
    method: "GET",
    headers: {
      "X-Access-Token": localStorage.getItem("token") || ""
    }
  });
};
