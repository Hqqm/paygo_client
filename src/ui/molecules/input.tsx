import * as React from "react";
import styled, { css } from "styled-components";
import { CustomElement } from "react-hook-form";
import { Text } from "@ui/atoms";
import { Box } from "@ui/layouts/box";

type InputProps = {
  name: string;
  type?: string;
  label: string;
  ariaLabel: string;
  inputmode?: string;
  pattern?: string;
  errors: any;
  errMapper?: (errType: string) => string;
  register: (
    ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement | null
  ) => void;
  onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
};

export const Input = ({
  name,
  type,
  inputmode,
  pattern,
  label,
  ariaLabel,
  errors,
  errMapper,
  register,
  onFocus,
}: InputProps) => (
  <ContainerInput>
    <Box pb={"xs"} pl={"xss"}>
      <Box color="#000000" as="span">
        <Label htmlFor={name}>
          <ContainerLabelContent>{label}</ContainerLabelContent>
        </Label>
      </Box>
    </Box>

    <StyledInput
      name={name}
      type={type}
      ref={register}
      pattern={pattern}
      inputMode={inputmode}
      errors={errors}
      aria-label={ariaLabel}
      onFocus={onFocus}
    />

    {errors && (
      <Box pt={"xs"} pl={"xss"}>
        <Text color="#ce0000">{errMapper && errMapper(errors.type)}</Text>
      </Box>
    )}
  </ContainerInput>
);

type StyledInputProps = {
  errors?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: inherit;
  line-height: inherit;

  &:focus {
    border: 2px solid #866ec7;
  }

  ${({ errors }) =>
    errors &&
    css<StyledInputProps>`
      border: 1px solid #ce0000;
      &:focus {
        border: 1px solid #ce0000;
      }
    `};

  &[type="number"] {
    -moz-appearance: textfield;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const ContainerLabelContent = styled.span`
  display: block;
  padding-top: 1px;
  transform: translateY(3px);

  &&:before {
    content: "";
    display: block;
    height: 0;
    margin-top: -14px;
  }
`;
