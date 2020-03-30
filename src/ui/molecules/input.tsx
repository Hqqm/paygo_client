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
    ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement | null
  ) => void;
};

export const Input = ({ name, type, label, errors, register }: InputProps) => (
  <ContainerInput>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput name={name} type={type} ref={register} />
    {errors && <ErrorsContainer>{errors.type}</ErrorsContainer>}
  </ContainerInput>
);

const StyledInput = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: inherit;
  line-height: inherit;

  &:hover {
    border: 1px solid #866ec7;
  }

  &:focus {
    border: 2px solid #866ec7;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
`;
