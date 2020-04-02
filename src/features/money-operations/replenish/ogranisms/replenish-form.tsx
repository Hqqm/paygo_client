import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack } from "@ui/layouts/stack";
import { replenishBalanse, ReplenishRequestData } from "../services";
import {
  selectIsReplenishBalanceLoading,
  selectIsReplenishBalanceSuccess
} from "@features/shared/account/selectors";

type FormData = {
  amount: string;
};

export const ReplenishForm = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const isLoading = useSelector(selectIsReplenishBalanceLoading);
  const isRequestSucces = useSelector(selectIsReplenishBalanceSuccess);
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({ amount }, e) => {
    const replenishData: ReplenishRequestData = { amount: parseInt(amount) };
    dispatch(replenishBalanse(replenishData));
    e?.target.reset();
  });

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Stack small>
          <H2>Пополнить баланс</H2>
          <Input
            name="amount"
            type="text"
            inputmode="numeric"
            label="Сумма"
            errors={errors.amount}
            register={register({ required: true, pattern: /^\d+$/ })}
          />
          <Button type="submit" disabled={isLoading}>
            Пополнить
          </Button>
          {isRequestSucces && (
            <Text color="#1e7100" align="center">
              счет успешно пополнен
            </Text>
          )}
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
