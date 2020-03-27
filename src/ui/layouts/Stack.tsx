import styled, { css } from "styled-components";

type StackProps = {
  space?: string;
  recursion?: boolean;
  small?: boolean;
};

export const Stack = styled.div<StackProps>`
  & > * + * {
    margin-top: ${({ space }) => space};
  }

  ${({ small }) =>
    small &&
    css<StackProps>`
      & > * + * {
        margin-top: 1.5rem;
      }
    `};

  ${({ recursion }) =>
    recursion &&
    css<StackProps>`
      & * + * {
        margin-top: ${({ space }) => space};
      }
    `}
`;
