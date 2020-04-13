import * as React from "react";
import { SignUpState, RegisterAccountData } from "./sign-up-types";

export const useSignUpRequest = (): [SignUpState, (data: RegisterAccountData) => Promise<void>] => {
  const [state, setState] = React.useState<SignUpState>({
    loading: "idle",
    responseErr: "",
  });

  const makeRequest = React.useCallback(
    async (data: RegisterAccountData) => {
      setState({ loading: "pending", responseErr: "" });
      try {
        const response = await SignUpRequest(data);
        await checkSignUpErrors(response);
        setState({ loading: "succeeded", responseErr: "" });
      } catch (err) {
        setState({ loading: "failed", responseErr: err.message });
      }
    },
    [state, setState]
  );

  return [state, makeRequest];
};

const SignUpRequest = async (data: RegisterAccountData) => {
  return fetch("/server/auth/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const checkSignUpErrors = async (response: Response) => {
  if (!response.ok) {
    const errMsg = await response.text();
    if (errMsg.includes("Error occured while trying to proxy"))
      throw new Error("Ошибка соединения с сервером");
    if (errMsg.includes("duplicate key")) throw new Error("Данный пользователь уже существует");
    else throw new Error("Произошла неизвестная ошибка, повторите позже");
  }
};
