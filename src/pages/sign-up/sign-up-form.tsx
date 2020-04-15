import * as React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { loginErrMapper, passwordErrMapper, emailErrMapper } from "@lib/errMappers";
import { SignUpState, RegisterAccountData, SignUpFormData } from "./model/sign-up-types";
import { useSignUpRequest } from "./model/sign-up-effects";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack, Box } from "@ui/layouts";

export const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm<SignUpFormData>();
  const { isRequesting, requestState, onSubmitSignUpForm } = useEnhanseSignUpForm();

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
          register={register({
            required: true,
            pattern: /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/,
          })}
        />
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

  const onSubmitSignUpForm = ({ email, login, password }: SignUpFormData, e: any) => {
    const account: RegisterAccountData = { id: uuidV4(), email, login, password };
    makeRequest(account);
    e?.target.reset();
  };

  return {
    isRequesting,
    requestState,
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
