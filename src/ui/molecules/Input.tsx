import * as React from "react";
import styled from "styled-components";
import { CustomElement } from "react-hook-form";

type InputProps = {
  name: string;
  labelName: string;
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

export const Input = ({
  name,
  type,
  labelName,
  errors,
  register
}: InputProps) => (
  <ContainerInput>
    <label htmlFor={name}>{labelName}</label>
    <StyledInput name={name} type={type} ref={register} />
    {errors && `${name} is required`}
  </ContainerInput>
);

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;
