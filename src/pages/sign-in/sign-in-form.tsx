import * as React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";
import { loginErrMapper, passwordErrMapper } from "@lib/errMappers";
import { loadAccount } from "@lib/account-loader/account-loader-effects";
import { createSession } from "@features/shared/session/slice";
import { SignInFormData } from "./model/sign-in-types";
import { signInIntoAccount } from "./model/sign-in-effects";
import { selectSignInErr, selectIsSignInRequesting } from "./model/sign-in-selectors";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Box, Stack } from "@ui/layouts";

export const SignInForm = () => {
  const {
    signInErrors,
    isRequesting,
    errors,
    register,
    handleSubmit,
    onSubmitSignInForm,
  } = useEnhanseSignInForm();

  return (
    <Form onSubmit={handleSubmit(onSubmitSignInForm)}>
      <Stack small>
        <Box pt={1}>
          <H2 align="center">Вход</H2>
        </Box>
        <Input
          name="login"
          type="text"
          label="Логин"
          ariaLabel="Логин"
          errors={errors.login}
          errMapper={loginErrMapper}
          register={register({ required: true })}
        />
        <Input
          name="password"
          type="password"
          label="Пароль"
          ariaLabel="Пароль"
          errors={errors.password}
          errMapper={passwordErrMapper}
          register={register({ required: true })}
        />
        <Button type="submit" disabled={isRequesting}>
          Войти
        </Button>
        {signInErrors && (
          <Text color="#ce0000" align="center">
            {signInErrors}
          </Text>
        )}
      </Stack>
    </Form>
  );
};

const useEnhanseSignInForm = () => {
  const signInErrors = useSelector(selectSignInErr);
  const isRequesting = useSelector(selectIsSignInRequesting);
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<SignInFormData>();

  const onSubmitSignInForm = async ({ login, password }: SignInFormData, e: any) => {
    e.preventDefault();
    const result = await dispatch(signInIntoAccount({ login, password }));

    if (signInIntoAccount.fulfilled.match(result)) {
      const token = unwrapResult(result);
      await dispatch(loadAccount());
      dispatch(createSession(token));
      history.push("/");
    }
  };

  return {
    signInErrors,
    isRequesting,
    errors,
    register,
    handleSubmit,
    onSubmitSignInForm,
  };
};
