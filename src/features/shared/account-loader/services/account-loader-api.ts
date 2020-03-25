import { AppThunk } from "root-reducer";
import { AppDispatch } from "store";
import {
  loadingSession,
  loadedSession,
  loadingSessionError
} from "../account-loader-slice";

export const loadAccount = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(loadingSession());
  try {
    const response = await loadAccountRequest();
    const account = await response.json();
    dispatch(loadedSession({ account }));
  } catch (err) {
    dispatch(loadingSessionError({ error: err.message }));
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
