import styled, { css } from "styled-components";
import { Box } from "./box";

type InlineProps = {
  space?: string;
  recursion?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
};

export const Inline = styled(Box)<InlineProps>`
  display: flex;
  width: 100%;
  & > * + * {
    margin-left: ${({ space }) => space};
  }

  ${({ small }) =>
    small &&
    css<InlineProps>`
      & > * + * {
        margin-left: 1rem;
      }
    `};

  ${({ medium }) =>
    medium &&
    css<InlineProps>`
      & > * + * {
        margin-left: 2rem;
      }
    `};

  ${({ large }) =>
    large &&
    css<InlineProps>`
      & > * + * {
        margin-left: 3rem;
      }
    `};

  ${({ recursion }) =>
    recursion &&
    css<InlineProps>`
      & * + * {
        margin-left: ${({ space }) => space};
      }
    `};
`;
