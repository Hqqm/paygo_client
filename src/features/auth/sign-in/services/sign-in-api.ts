import { createAsyncThunk } from "@reduxjs/toolkit";

export type SignInFormData = {
  login: string;
  password: string;
};

type SignInResponse = {
  token: "string";
};

export const signInIntoAccount = createAsyncThunk(
  "auth/signIn",
  async ({ login, password }: SignInFormData): Promise<string> => {
    try {
      const reponse = await signInIntoAccountRequest({ login, password });
      await checkSignInErrors(reponse);
      const data = (await reponse.json()) as SignInResponse;
      localStorage.setItem("token", data.token);
      return data.token;
    } catch (err) {
      throw err;
    }
  }
);

const signInIntoAccountRequest = async (formData: SignInFormData) => {
  return fetch("/server/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
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
