import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  color: #fff;
  padding: 1em;
  font-size: calc(14px + 0.4vw);
  text-decoration: none;
  &:hover {
    color: #9262fd;
  }
`;
