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
    <label htmlFor={name}>{label}</label>
    <StyledInput name={name} type={type} ref={register} />
    {errors && <ErrorsContainer>{`${name} is required`}</ErrorsContainer>}
  </ContainerInput>
);

const StyledInput = styled.input`
  padding: 0.5em;
  font-size: 0.9em;
  border: none;
  border-radius: 5px;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2em;
`;
