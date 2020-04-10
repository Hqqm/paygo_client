import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { H2, Button, Text } from "@ui/atoms";
import { Form } from "@ui/ogranisms/form";
import { Input } from "@ui/molecules";
import { Stack } from "@ui/layouts/stack";
import { Box } from "@ui/layouts/box";
import {
  useRegisterAccountRequest,
  SignUpRequestState,
  RegisterAccountData,
} from "@features/auth/sign-up/services/register-account-api";

type FormData = {
  email: string;
  login: string;
  password: string;
};

export const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [requestState, makeRequest] = useRegisterAccountRequest();
  const isRequesting = requestState.fetchingState === "requesting";

  const onSubmit = handleSubmit(({ email, login, password }) => {
    const account: RegisterAccountData = { id: uuidV4(), email, login, password };
    makeRequest(account);
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
        {ResponseFromServer(requestState)}
      </Stack>
    </Form>
  );
};

const ResponseFromServer = ({ fetchingState, responseErr }: SignUpRequestState) => {
  if (fetchingState === "none" || fetchingState === "requesting") {
    return null;
  } else if (fetchingState === "fail") {
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
