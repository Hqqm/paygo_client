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

export const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm<SignInFormData>();
  const signInErrors = useSelector(selectSignInErr);
  const isRequesting = useSelector(selectIsSignInRequesting);
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({ login, password }) => {
    dispatch(signInIntoAccount({ login, password }));
  });

  return (
    <Form onSubmit={onSubmit}>
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
