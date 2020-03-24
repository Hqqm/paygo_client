import { AppThunk } from "rootReducer";
import { AppDispatch } from "store";
import {
  loggingIntoAccount,
  loggingIntoAccountError,
  loggedIntoAccount
} from "../sign-in-slice";

export type SignInFormData = {
  login: string;
  password: string;
};

export const sigInIntoAccount = ({
  login,
  password
}: SignInFormData): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(loggingIntoAccount());
  try {
    const reponse = await sigInIntoAccountRequest({ login, password });
    await checkSignInErrors(reponse);
    const token = await reponse.json();
    dispatch(loggedIntoAccount({ token }));
  } catch (err) {
    dispatch(loggingIntoAccountError({ error: err.message }));
  }
};

const sigInIntoAccountRequest = async (formData: SignInFormData) => {
  return fetch("/api/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });
};

const checkSignInErrors = async (response: Response) => {
  if (!response.ok) {
    const errMsg = await response.text();
    if (errMsg.includes("incorrect login or password"))
      throw new Error("Неправильный логин или пароль");
    if (errMsg.includes("Error occured while trying to proxy"))
      throw new Error("Ошибка соединения с сервером");
    else throw new Error("Произошла неизвестная ошибка, повторите позже");
  }
};
