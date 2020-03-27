import * as React from "react";
import styled from "styled-components";
import { CustomElement } from "react-hook-form";
import { ErrorsContainer } from "@ui/atoms";

type InputProps = {
  name: string;
  label: string;
  type: string;
  errors: any;
  register: (
    ref:
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | CustomElement
      | null
  ) => void;
};

export const Input = ({ name, type, label, errors, register }: InputProps) => (
  <ContainerInput>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput name={name} type={type} ref={register} />
    {errors && <ErrorsContainer>{`${name} is required`}</ErrorsContainer>}
  </ContainerInput>
);

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  line-height: inherit;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
`;
