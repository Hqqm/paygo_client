import styled from "styled-components";
import { color, ColorProps } from "styled-system";

type H2Props = {
  align?: string;
};

export const H2 = styled.h2<H2Props>`
  margin: 0px;
  padding-top: 1px;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-align: ${({ align }) => align || "left"};
  transform: translateY(10px);
  color: #000000;

  &&:before {
    content: "";
    display: block;
    height: 0;
    margin-top: -21px;
  }
`;

type TextProps = {
  align?: string;
  fs?: string;
  offset?: string;
};

export const Text = styled.div<ColorProps & TextProps>`
  font-size: ${({ fs }) => fs || "1.1rem;"};
  text-align: ${({ align }) => align || "left"};
  transform: translateY(${({ offset }) => offset || "6px"});
  ${color};

  &&:before {
    content: "";
    display: block;
    height: 0;
    margin-top: -14px;
  }
`;
