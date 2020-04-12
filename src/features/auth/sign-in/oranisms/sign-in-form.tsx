import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { H2, Button, Text } from "@ui/atoms";
import { Form } from "@ui/ogranisms/form";
import { Input } from "@ui/molecules";
import { SignInFormData, signInIntoAccount } from "../services/sign-in-api";
import { Stack } from "@ui/layouts/stack";
import { Box } from "@ui/layouts/box";
import { selectSignInErr, selectIsSignInRequesting } from "../selectors/sign-in-selectors";
import { createSession, loadSession } from "@features/shared/session/slice";
import { AppDispatch } from "store";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { loadAccount } from "@features/account-loader/account-loader-api";

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
