import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { Form } from "@ui/ogranisms/form";
import { H2, Button } from "@ui/atoms";
import { Input, Textarea } from "@ui/molecules";
import { Stack } from "@ui/layouts/stack";
import { transferMoney, TransferMoneyData } from "../services";

type FormData = {
  recipientLogin: string;
  amount: string;
  comment: string;
};

export const TransferForm = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({ recipientLogin, amount, comment }, e) => {
    const transferMoneyData: TransferMoneyData = {
      id: uuidV4(),
      recipient_login: recipientLogin,
      amount: parseInt(amount),
      comment: comment,
    };

    dispatch(transferMoney(transferMoneyData));
    e?.target.reset();
  });

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Stack small>
          <H2>Денежный перевод</H2>
          <Input
            name="recipientLogin"
            type="text"
            label="Логин получателя"
            errors={errors.recipientLogin}
            register={register({ required: true, pattern: /^[a-zа-яё]+$/i })}
          />
          <Input
            name="amount"
            type="text"
            inputmode="numeric"
            label="Сумма"
            errors={errors.amount}
            register={register({ required: true, pattern: /^\d+$/ })}
          />
          <Textarea name="comment" errors={errors.comment} register={register()} />
          <Button type="submit">перевести</Button>
        </Stack>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  min-width: 450px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
`;
