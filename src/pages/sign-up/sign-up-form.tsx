import * as React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import {
  loginValidator,
  passwordValidator,
  emailValidator,
} from "@lib/use-form-helpers/validators";
import {
  loginErrMapper,
  passwordErrMapper,
  emailErrMapper,
} from "@lib/use-form-helpers/errMappers";
import { SignUpState, RegisterAccountData, SignUpFormData } from "./model/sign-up-types";
import { useSignUpRequest } from "./model/sign-up-effects";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack, Box } from "@ui/layouts";

export const SignUpForm = () => {
  const {
    isRequesting,
    requestState,
    errors,
    register,
    handleSubmit,
    onSubmitSignUpForm,
  } = useEnhanseSignUpForm();

  return (
    <Form onSubmit={handleSubmit(onSubmitSignUpForm)}>
      <Stack small>
        <Box pt={1}>
          <H2 align="center">Регистрация</H2>
        </Box>
        <Input
          name="email"
          type="email"
          label="Почта"
          ariaLabel="Почтовый адрес"
          errors={errors.email}
          errMapper={emailErrMapper}
          register={register(emailValidator())}
        />
        <Input
          name="login"
          type="text"
          label="Логин"
          ariaLabel="Логин"
          errors={errors.login}
          errMapper={loginErrMapper}
          register={register(loginValidator())}
        />
        <Input
          name="password"
          type="password"
          label="Пароль"
          ariaLabel="Пароль"
          errors={errors.password}
          errMapper={passwordErrMapper}
          register={register(passwordValidator())}
        />
        <Button type="submit" disabled={isRequesting}>
          Зарегистрироваться
        </Button>
        {responseFromServer(requestState)}
      </Stack>
    </Form>
  );
};

const useEnhanseSignUpForm = () => {
  const [requestState, makeRequest] = useSignUpRequest();
  const isRequesting = requestState.loading === "pending";
  const { register, handleSubmit, errors } = useForm<SignUpFormData>();

  const onSubmitSignUpForm = ({ email, login, password }: SignUpFormData, e: any) => {
    const account: RegisterAccountData = { id: uuidV4(), email, login, password };
    makeRequest(account);
    e?.target.reset();
  };

  return {
    isRequesting,
    requestState,
    errors,
    register,
    handleSubmit,
    onSubmitSignUpForm,
  };
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
