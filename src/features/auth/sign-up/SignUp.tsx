import * as React from "react";
import { v4 as uuidV4 } from "uuid";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "api/account/register-account";
import { Input } from "@ui/molecules/Input";
import { Form } from "@ui/ogranisms/Form";
import { AppState } from "store";
import styled from "styled-components";

type FormData = {
  email: string;
  login: string;
  password: string;
};
``;

export const SignUp: React.FC = () => {
  const signUpErrors = useSelector((state: AppState) => state.signUp.error);
  const { register, handleSubmit, errors } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({ email, login, password }) => {
    console.log({ id: uuidV4(), email, login, password });
    dispatch(createAccount({ id: uuidV4(), email, login, password }));
  });

  return (
    <Form title="регистрация" btnText="зарегистироваться" onSubmit={onSubmit}>
      <Input
        name="email"
        type="email"
        labelName="почта"
        errors={errors.email}
        register={register({ required: true })}
      />
      <Input
        name="login"
        type="text"
        labelName="логин"
        errors={errors.login}
        register={register({ required: true })}
      />
      <Input
        name="password"
        type="password"
        labelName="пароль"
        errors={errors.password}
        register={register({ required: true })}
      />
      <ErrorsContainer>{signUpErrors}</ErrorsContainer>
    </Form>
  );
};

const ErrorsContainer = styled.div`
  color: #ff9090;
`;
