import * as React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";

import { SignUpState, RegisterAccountData, SignUpFormData } from "./model/sign-up-types";
import { useSignUpRequest } from "./model/sign-up-effects";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack, Box } from "@ui/layouts";

export const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm<SignUpFormData>();
  const [requestState, makeRequest] = useSignUpRequest();
  const isRequesting = requestState.loading === "pending";

  const onSubmit = handleSubmit(({ email, login, password }, e) => {
    const account: RegisterAccountData = { id: uuidV4(), email, login, password };
    makeRequest(account);
    e?.target.reset();
  });

  return (
    <Form onSubmit={onSubmit}>
      <Stack small>
        <Box pt={1}>
          <H2 align="center">Регистрация</H2>
        </Box>
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
        <Button type="submit" disabled={isRequesting}>
          зарегистрироваться
        </Button>
        {responseFromServer(requestState)}
      </Stack>
    </Form>
  );
};

const responseFromServer = ({ loading, responseErr }: SignUpState) => {
  if (loading === "idle" || loading === "pending") {
    return null;
  } else if (loading === "failed") {
    return (
      <Text color="#ce0000" align="center">
        {responseErr}
      </Text>
    );
  }

  return (
    <Text color="#1e7100" align="center">
      Регистрация прошла успешна
    </Text>
  );
};
