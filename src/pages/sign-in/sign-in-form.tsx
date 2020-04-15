import * as React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { loadAccount } from "@features/account-loader/account-loader-effects";
import { createSession } from "@features/shared/session/slice";
import { AppDispatch } from "store";
import { SignInFormData } from "./model/sign-in-types";
import { signInIntoAccount } from "./model/sign-in-effects";
import { selectSignInErr, selectIsSignInRequesting } from "./model/sign-in-selectors";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Box, Stack } from "@ui/layouts";

export const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm<SignInFormData>();
  const signInErrors = useSelector(selectSignInErr);
  const isRequesting = useSelector(selectIsSignInRequesting);
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = async ({ login, password }: SignInFormData, e: any) => {
    e.preventDefault();
    const result = await dispatch(signInIntoAccount({ login, password }));

    if (signInIntoAccount.fulfilled.match(result)) {
      const token = unwrapResult(result);
      await dispatch(loadAccount());
      dispatch(createSession(token));
      history.push("/");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack small>
        <Box pt={1}>
          <H2 align="center">Вход</H2>
        </Box>
        <Input
          name="login"
          type="text"
          label="логин"
          errors={errors.login}
          register={register({ required: true })}
        />
        <Input
          name="password"
          type="password"
          label="пароль"
          errors={errors.password}
          register={register({ required: true })}
        />
        <Button type="submit" disabled={isRequesting}>
          войти
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