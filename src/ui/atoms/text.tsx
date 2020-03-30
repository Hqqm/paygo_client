import styled from "styled-components";

type H2Props = {
  align?: string;
};

export const H2 = styled.h2<H2Props>`
  margin: 0px;
  padding-top: 1px;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  text-align: ${({ align }) => align || "left"};
  transform: translateY(9px);
  color: #000000;

  &&:before {
    content: "";
    display: block;
    height: 0;
    margin-top: -20px;
  }
`;
