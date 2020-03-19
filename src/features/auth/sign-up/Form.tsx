import * as React from "react";
import styled from "styled-components";
import { v4 as uuidV4 } from "uuid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerAccount } from "api/sign-up/register-account";

type FormData = {
  email: string;
  login: string;
  password: string;
};

export const Form: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({ email, login, password }) => {
    console.log({ id: uuidV4(), email, login, password });
    dispatch(
      registerAccount({
        id: uuidV4(),
        email,
        login,
        password
      })
    );
  });

  return (
    <FormContainer>
      <FormStyled onSubmit={onSubmit}>
        <h2>регистрация</h2>
        <label>email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && "email is required"}
        <label>login</label>
        <input name="login" ref={register({ required: true })} />
        {errors.email && "login is required"}
        <label>password</label>
        <input name="password" ref={register({ required: true })} />
        {errors.email && "password is required"}
        <button type="submit">зарегистироваться</button>
      </FormStyled>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;
