import * as React from "react";
import styled from "styled-components";
import { CustomElement } from "react-hook-form";
import { Text } from "@ui/atoms";
import { Box } from "@ui/layouts/box";

type InputProps = {
  name: string;
  label: string;
  type: string;
  inputmode?: string;
  pattern?: string;
  errors: any;
  register: (
    ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement | null
  ) => void;
};

export const Input = ({ name, type, inputmode, pattern, label, errors, register }: InputProps) => (
  <ContainerInput>
    <Box pb={"xs"} pl={"xss"}>
      <Box color="#000000" as="span">
        <Label htmlFor={name}>
          <ContainerLabelContent>{label}</ContainerLabelContent>
        </Label>
      </Box>
    </Box>

    <StyledInput name={name} type={type} ref={register} pattern={pattern} inputMode={inputmode} />

    {errors && (
      <Box pt={"xs"} pl={"xss"}>
        <Text color="#ce0000">{errors.type}</Text>
      </Box>
    )}
  </ContainerInput>
);

const StyledInput = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: inherit;
  line-height: inherit;

  &:focus {
    border: 2px solid #866ec7;
  }

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
  transform: translateY(7px);

  &&:before {
    content: "";
    display: block;
    height: 0;
    margin-top: -20px;
  }
`;
