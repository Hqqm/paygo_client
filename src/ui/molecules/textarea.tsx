import * as React from "react";
import styled from "styled-components";
import { CustomElement } from "react-hook-form";
import { Box } from "@ui/layouts/box";
import { Text } from "@ui/atoms";

type TextareaProps = {
  name: string;
  label: string;
  errors?: any;
  register: (
    ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement | null
  ) => void;
};
export const Textarea = ({
  name,

  label,
  errors,
  register,
}: TextareaProps) => (
  <ContainerTextarea>
    <Box pb={"xs"} pl={"xss"}>
      <Box color="#000000" as="span">
        <Label htmlFor={name}>
          <ContainerLabelContent>{label}</ContainerLabelContent>
        </Label>
      </Box>
    </Box>

    <StyledTextarea name={name} ref={register} />

    {errors && (
      <Box pt={"xs"} pl={"xss"}>
        <Text color="#ce0000">{errors.type}</Text>
      </Box>
    )}
  </ContainerTextarea>
);

const StyledTextarea = styled.textarea`
  width: 100%;
  background: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: inherit;
  line-height: inherit;
  resize: none;

  &:focus {
    border: 2px solid #866ec7;
  }
`;

const ContainerTextarea = styled.div`
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
