import styled from "styled-components";

type H2Props = {
  align?: string;
};

export const H2 = styled.h2<H2Props>`
  margin: 0px;
  font-size: 1.875rem;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  text-align: ${({ align }) => align || "left"};
`;
