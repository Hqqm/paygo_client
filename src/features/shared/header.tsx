import * as React from "react";
import styled from "styled-components";
import { Link } from "@ui/atoms";
import { TogglerTheme } from "@features/toggler-theme/toggler-theme";

export const Header = () => (
  <WrapperHeader>
    <Link to="/">лого</Link>
    <NavBar>
      <Ul>
        <Li>
          <Link to="/">зарегистрироваться</Link>
        </Li>
        &nbsp;
        <Li>
          <Link to="/signIn">войти</Link>
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
