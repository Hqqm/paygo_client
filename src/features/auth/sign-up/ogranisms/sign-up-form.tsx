import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { v4 as uuidV4 } from "uuid";
import { H2, Button, ErrorsContainer } from "@ui/atoms";
import { Form } from "@ui/ogranisms/form";
import { Input } from "@ui/molecules";
import { createAccount } from "@features/auth/sign-up/services/register-account-api";

type FormData = {
  email: string;
  login: string;
  password: string;
};

export const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const signUpErrors = useSelector((state: AppState) => state.signUp.error);
  const dispatch = useDispatch();
  const onSubmit = handleSubmit(({ email, login, password }) => {
    dispatch(createAccount({ id: uuidV4(), email, login, password }));
  });

  return (
    <Form onSubmit={onSubmit}>
      <H2>регистрация</H2>
      <Input
        name="email"
        type="email"
        label="почта"
        errors={errors.email}
        register={register({ required: true })}
      />
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
      {signUpErrors && <ErrorsContainer>{signUpErrors}</ErrorsContainer>}
      <Button type="submit">зарегистрироваться</Button>
    </Form>
  );
};