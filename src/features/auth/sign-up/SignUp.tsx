import * as React from "react";
import { v4 as uuidV4 } from "uuid";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "api/account/register-account";
import { AppState } from "store";
import { Button, H2, ErrorsContainer } from "@ui/atoms";
import { Modal, Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/Form";

type FormData = {
  email: string;
  login: string;
  password: string;
};

export const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [modalIsOpen, setModalIsOpen] = React.useState(true);
  const dispatch = useDispatch();
  const signUpErrors = useSelector((state: AppState) => state.signUp.error);
  const isRegisteredSuccess = useSelector(
    (state: AppState) => state.signUp.fetchingState === "success"
  );
  const onSubmit = handleSubmit(({ email, login, password }) => {
    dispatch(createAccount({ id: uuidV4(), email, login, password }));
  });

  return (
    <>
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
        <Button type="submit">зарегистироваться</Button>
      </Form>
      {isRegisteredSuccess && (
        <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
          регистрация прошла успешна
        </Modal>
      )}
    </>
  );
};
