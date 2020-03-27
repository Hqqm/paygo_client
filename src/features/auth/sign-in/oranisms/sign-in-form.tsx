import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { H2, Button, ErrorsContainer } from "@ui/atoms";
import { Form } from "@ui/ogranisms/form";
import { Input } from "@ui/molecules";
import { SignInFormData, signInIntoAccount } from "../services/sign-in-api";
import { AppState } from "root-reducer";
import { Stack } from "@ui/layouts/Stack";

export const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm<SignInFormData>();
  const signInErrors = useSelector((state: AppState) => state.signIn.error);
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({ login, password }) => {
    dispatch(signInIntoAccount({ login, password }));
  });

  return (
    <Form onSubmit={onSubmit}>
      <Stack small>
        <H2 align="center">вход</H2>
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
        <Button type="submit">войти</Button>
        {signInErrors && <ErrorsContainer>{signInErrors}</ErrorsContainer>}
      </Stack>
    </Form>
  );
};
