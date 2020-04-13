import styled from "styled-components";
import { Link as RouterLink, NavLink, NavLinkProps } from "react-router-dom";

export const Link = styled(RouterLink)`
  color: #fff;
  font-size: calc(14px + 0.4vw);
  text-decoration: none;
  &:hover {
    color: #9262fd;
  }
`;

export const NavBarLink = styled(NavLink)`
  color: #bf9fee;
  padding: 22px;
  font-size: calc(14px + 0.4vw);
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #9262fd;
    text-decoration: underline;
  }
`;
