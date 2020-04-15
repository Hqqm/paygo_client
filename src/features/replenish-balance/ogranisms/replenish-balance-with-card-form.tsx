import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { H2, Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack } from "@ui/layouts/stack";
import { replenishBalanse } from "../model/replenish-balance-effects";
import { ReplenishRequestData, ReplenishBalanceFormData } from "../model/replenish-balance-types";
import {
  selectIsReplenishBalanceLoading,
  selectIsReplenishBalanceSuccess,
} from "../model/replenish-balance-selectors";
import { resetReplenishState } from "../model/replenish-balance-slice";

export const ReplenisBalancehWithCardForm = () => {
  const { register, handleSubmit, errors } = useForm<ReplenishBalanceFormData>();
  const isLoading = useSelector(selectIsReplenishBalanceLoading);
  const isRequestSucces = useSelector(selectIsReplenishBalanceSuccess);
  const dispatch = useDispatch();

  const onSubmit = ({ amount }: ReplenishBalanceFormData, e: any) => {
    const replenishData: ReplenishRequestData = {
      id: uuidV4(),
      amount: parseInt(amount),
    };

    dispatch(replenishBalanse(replenishData));
    e?.target.reset();
  };

  React.useEffect(() => {
    return () => {
      dispatch(resetReplenishState());
    };
  }, []);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
              Cчет успешно пополнен
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
