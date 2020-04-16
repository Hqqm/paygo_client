import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { transferMoney } from "../model/transfer-money-effects";
import { TransferMoneyData, TransferMoneyFormData } from "../model/transfer-money-types";
import { H2, Button } from "@ui/atoms";
import { Input, Textarea } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack } from "@ui/layouts/stack";

export const TransferMoneyForm = () => {
  const {
    errors,
    register,
    handleSubmit,
    onSubmitTransferMoneyForm,
  } = useEnhanseTransferMoneyForm();

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmitTransferMoneyForm)}>
        <Stack medium>
          <H2>Денежный перевод</H2>
          <Input
            name="recipientLogin"
            type="text"
            label="Логин получателя"
            ariaLabel="Логин получателя"
            errors={errors.recipientLogin}
            register={register({ required: true, pattern: /^[a-zа-яё]+$/i })}
          />
          <Input
            name="amount"
            type="text"
            inputmode="numeric"
            label="Сумма"
            ariaLabel="Сумма пополнения"
            errors={errors.amount}
            register={register({ required: true, pattern: /^\d+$/ })}
          />
          <Textarea name="comment" register={register()} label="Комментарий" />
          <Button type="submit">перевести</Button>
        </Stack>
      </Form>
    </FormContainer>
  );
};

const useEnhanseTransferMoneyForm = () => {
  const { register, handleSubmit, errors } = useForm<TransferMoneyFormData>();
  const dispatch = useDispatch();

  const onSubmitTransferMoneyForm = (
    { recipientLogin, amount, comment }: TransferMoneyFormData,
    e: any
  ) => {
    const transferMoneyData: TransferMoneyData = {
      id: uuidV4(),
      recipient_login: recipientLogin,
      amount: parseInt(amount),
      comment: comment,
    };

    dispatch(transferMoney(transferMoneyData));
    e.target.reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmitTransferMoneyForm,
  };
};

const FormContainer = styled.div`
  min-width: 450px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
`;
