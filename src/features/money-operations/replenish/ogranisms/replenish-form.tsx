import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack } from "@ui/layouts/stack";
import { replenishBalanse, ReplenishRequestData } from "../services";
import {
  selectIsReplenishBalanceLoading,
  selectIsReplenishBalanceSuccess,
} from "@features/shared/account/selectors";

type FormData = {
  cardNumber: string;
  amount: string;
};

export const ReplenishWithCardForm = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const isLoading = useSelector(selectIsReplenishBalanceLoading);
  const isRequestSucces = useSelector(selectIsReplenishBalanceSuccess);
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({ amount }, e) => {
    const replenishData: ReplenishRequestData = {
      id: uuidV4(),
      amount: parseInt(amount),
    };

    dispatch(replenishBalanse(replenishData));
    e?.target.reset();
  });

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Stack small>
          <Input
            name="cardNumber"
            type="text"
            inputmode="numeric"
            label="Номер карты"
            errors={errors.cardNumber}
            register={register({ required: true, pattern: /^\d+$/ })}
          />
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
`;
