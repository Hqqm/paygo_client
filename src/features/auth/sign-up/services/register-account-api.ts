import * as React from "react";

export type RegisterAccountData = {
  id: string;
  email: string;
  login: string;
  password: string;
};

export type AuthState = {
  fetchingState: "none" | "requesting" | "success" | "fail";
  responseErr: string;
};

export const useAuthRequest = (url: string): [AuthState, (data: any) => Promise<void>] => {
  const [state, setState] = React.useState<AuthState>({
    fetchingState: "none",
    responseErr: "",
  });

  const makeRequest = React.useCallback(
    async (data: RegisterAccountData) => {
      setState({ fetchingState: "requesting", responseErr: "" });
      try {
        const response = await authRequest(url, data);
        await checkSignUpErrors(response);
        setState({ fetchingState: "success", responseErr: "" });
      } catch (err) {
        setState({ fetchingState: "fail", responseErr: err.message });
      }
    },
    [state, setState]
  );

  return [state, makeRequest];
};

const authRequest = async (url: string, data: any) => {
  return fetch(url, {
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
