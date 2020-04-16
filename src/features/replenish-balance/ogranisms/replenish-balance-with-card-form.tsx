import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { cardErrMapper, amountErrMapper } from "@lib/use-form-helpers/errMappers";
import { replenishBalanse } from "../model/replenish-balance-effects";
import { ReplenishRequestData, ReplenishBalanceFormData } from "../model/replenish-balance-types";
import {
  selectIsReplenishBalanceLoading,
  selectIsReplenishBalanceSuccess,
} from "../model/replenish-balance-selectors";
import { resetReplenishState } from "../model/replenish-balance-slice";
import { Button, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack } from "@ui/layouts/stack";

export const ReplenisBalancehWithCardForm = () => {
  const {
    isLoading,
    isRequestSuccess,
    errors,
    register,
    handleSubmit,
    onSubmitReplenishBalanceForm,
  } = useEnhanseForm();

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmitReplenishBalanceForm)}>
        <Stack small>
          <Input
            name="cardNumber"
            type="text"
            inputmode="numeric"
            label="Номер карты"
            ariaLabel="Номер карты"
            errors={errors.cardNumber}
            errMapper={cardErrMapper}
            register={register({ required: true, pattern: /^\d+$/ })}
          />
          <Input
            name="amount"
            type="number"
            inputmode="numeric"
            label="Сумма"
            ariaLabel="Сумма пополнения"
            errors={errors.amount}
            errMapper={amountErrMapper}
            register={register({ required: true, pattern: /^\d+$/, min: 1 })}
          />
          <Button type="submit" disabled={isLoading}>
            Пополнить
          </Button>
          {isRequestSuccess && (
            <Text color="#1e7100" align="center">
              Cчет успешно пополнен
            </Text>
          )}
        </Stack>
      </Form>
    </FormContainer>
  );
};

const useEnhanseForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReplenishBalanceLoading);
  const isRequestSuccess = useSelector(selectIsReplenishBalanceSuccess);
  const { register, handleSubmit, errors } = useForm<ReplenishBalanceFormData>();

  React.useEffect(() => {
    return () => {
      dispatch(resetReplenishState());
    };
  }, []);

  const onSubmitReplenishBalanceForm = ({ amount }: ReplenishBalanceFormData, e: any) => {
    const replenishData: ReplenishRequestData = {
      id: uuidV4(),
      amount: parseInt(amount),
    };

    dispatch(replenishBalanse(replenishData));
    e?.target.reset();
  };

  return {
    isLoading,
    isRequestSuccess,
    errors,
    register,
    handleSubmit,
    onSubmitReplenishBalanceForm,
  };
};

const FormContainer = styled.div`
  min-width: 450px;
`;
