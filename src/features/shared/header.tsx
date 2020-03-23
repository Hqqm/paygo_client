import * as React from "react";
import styled from "styled-components";
import { TogglerTheme } from "@features/toggler-theme/toggler-theme";

export const Header = () => (
  <WrapperHeader>
    <Link href="/">лого</Link>
    <NavBar>
      <Ul>
        <Li>
          <Link href="/">зарегистрироваться</Link>
        </Li>
        &nbsp;
        <Li>
          <Link href="/">войти</Link>
        </Li>
      </Ul>
    </NavBar>
    <TogglerTheme />
  </WrapperHeader>
);

const WrapperHeader = styled.header`
  display: flex;
  padding: 0 2rem;
  flex-wrap: wrap;
  align-items: center;
  background: #3e3e3e;
`;

const NavBar = styled.nav`
  margin-left: auto;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  display: inline-block;
`;

const Link = styled.a`
  color: #fff;
  padding: 1em;
  text-decoration: none;
  &:hover {
    color: #9262fd;
  }
`;
