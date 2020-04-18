import styled, { css } from "styled-components";

type StackProps = {
  space?: string;
  recursion?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
};

export const Stack = styled.div<StackProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${({ space }) => space};
  }

  ${({ small }) =>
    small &&
    css<StackProps>`
      & > * + * {
        margin-top: 1rem;
      }
    `};

  ${({ medium }) =>
    medium &&
    css<StackProps>`
      & > * + * {
        margin-top: 2rem;
      }
    `};

  ${({ large }) =>
    large &&
    css<StackProps>`
      & > * + * {
        margin-top: 3rem;
      }
    `};

  ${({ recursion }) =>
    recursion &&
    css<StackProps>`
      & * + * {
        margin-top: ${({ space }) => space};
      }
    `};
`;
