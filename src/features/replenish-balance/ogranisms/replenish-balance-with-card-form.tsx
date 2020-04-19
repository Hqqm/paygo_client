import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import {
  cardErrMapper,
  amountErrMapper,
  fullNameErrMapper,
  expiryErrMapper,
  cvcErrMapper,
} from "@lib/use-form-helpers/errMappers";
import {
  cardValidator,
  amountValidator,
  fullNameValidator,
  expiryValidator,
  cvcValidator,
} from "@lib/use-form-helpers/validators";
import { replenishBalanse } from "../model/replenish-balance-effects";
import { ReplenishRequestData, ReplenishBalanceFormData } from "../model/replenish-balance-types";
import {
  selectIsReplenishBalanceLoading,
  selectIsReplenishBalanceSuccess,
} from "../model/replenish-balance-selectors";
import { resetReplenishState } from "../model/replenish-balance-slice";
import { Button, Text, H2 } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/ogranisms/form";
import { Stack, Inline } from "@ui/layouts";
import "react-credit-cards/es/styles-compiled.css";
import Card from "react-credit-cards";
import { Focused } from "react-credit-cards";

export const ReplenisBalancehWithCardForm = () => {
  const {
    isLoading,
    isRequestSuccess,
    currentFocus,
    handleInputFocus,
    errors,
    register,
    watchAllFieilds,
    handleSubmit,
    onSubmitReplenishBalanceForm,
  } = useEnhanseForm();

  return (
    <FormWrapper>
      <Stack medium>
        <H2>Полполнение через карту</H2>
        <Inline space="3rem">
          <Card
            number={watchAllFieilds.number || ""}
            name={watchAllFieilds.name || ""}
            expiry={watchAllFieilds.expiry || ""}
            cvc={watchAllFieilds.cvc || ""}
            focused={currentFocus || ""}
          />

          <Form onSubmit={handleSubmit(onSubmitReplenishBalanceForm)}>
            <Stack small>
              <Inline small>
                <Input
                  name="number"
                  type="text"
                  inputmode="numeric"
                  label="Номер карты"
                  ariaLabel="Номер карты"
                  errors={errors.number}
                  errMapper={cardErrMapper}
                  register={register(cardValidator())}
                  onFocus={handleInputFocus}
                />
                <Input
                  name="name"
                  type="text"
                  label="Имя"
                  ariaLabel="Фамилия и имя"
                  errors={errors.name}
                  errMapper={fullNameErrMapper}
                  register={register(fullNameValidator())}
                  onFocus={handleInputFocus}
                />
              </Inline>
              <Inline small>
                <Input
                  name="expiry"
                  type="text"
                  inputmode="numeric"
                  label="Окончание срока действия"
                  ariaLabel="Окончание срока действия карты"
                  errors={errors.expiry}
                  errMapper={expiryErrMapper}
                  register={register(expiryValidator())}
                  onFocus={handleInputFocus}
                />
                <Input
                  name="cvc"
                  type="text"
                  inputmode="numeric"
                  label="CVC"
                  ariaLabel="CVC"
                  errors={errors.cvc}
                  errMapper={cvcErrMapper}
                  register={register(cvcValidator())}
                  onFocus={handleInputFocus}
                />
              </Inline>
              <Input
                name="amount"
                type="text"
                inputmode="numeric"
                label="Сумма"
                ariaLabel="Сумма пополнения"
                errors={errors.amount}
                errMapper={amountErrMapper}
                register={register(amountValidator())}
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
        </Inline>
      </Stack>
    </FormWrapper>
  );
};

const useEnhanseForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReplenishBalanceLoading);
  const isRequestSuccess = useSelector(selectIsReplenishBalanceSuccess);
  const { register, handleSubmit, watch, errors } = useForm<ReplenishBalanceFormData>();
  const [currentFocus, setCurrentFocus] = React.useState<Focused>("number");
  const watchAllFieilds = watch();

  React.useEffect(() => {
    return () => {
      dispatch(resetReplenishState());
    };
  }, []);

  const handleInputFocus = (e: any) => {
    setCurrentFocus(e.target.name);
  };

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
    currentFocus,
    handleInputFocus,
    errors,
    register,
    watchAllFieilds,
    handleSubmit,
    onSubmitReplenishBalanceForm,
  };
};

const FormWrapper = styled.div`
  min-width: 450px;
`;
