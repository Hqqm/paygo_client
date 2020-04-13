import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectIsAccountAuthenticated } from "../session/selectors";
import { selectAccount } from "../account/selectors";
import { exitFromAccount } from "../session/services/utils";
import { Link, NavBarLink } from "@ui/atoms";
import { TogglerTheme } from "@features/toggler-theme/toggler-theme";

const logoSvg = require("public/logo.svg");

export const Header = () => {
  const isAccountAuthenticated = useSelector(selectIsAccountAuthenticated);

  return (
    <StyledHeader>
      <Link to="/">
        <img src={logoSvg} alt="paygo logo" />
      </Link>
      {isAccountAuthenticated ? <AuthenticatedNavbar /> : <GuestNavbar />}
      <TogglerTheme />
    </StyledHeader>
  );
};

const AuthenticatedNavbar = () => {
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();

  return (
    <NavBar>
      <Ul>
        &nbsp;
        <Li>
          <NavBarLink to="/replenishBalance">пополнить баланс</NavBarLink>
        </Li>
        <Li>
          <NavBarLink to="/transferMoney">перевести деньги</NavBarLink>
        </Li>
        &nbsp;
        <Li>
          <NavBarLink to="/tranfersHistory">история переводов</NavBarLink>
        </Li>
        &nbsp;
        <Li>
          <NavBarLink to="/">
            {account!.login}&nbsp;{account!.balance}
          </NavBarLink>
        </Li>
        &nbsp;
        <Li>
          <NavBarLink to="/" onClick={() => exitFromAccount(dispatch)}>
            выйти
          </NavBarLink>
        </Li>
      </Ul>
    </NavBar>
  );
};

const GuestNavbar = () => (
  <NavBar>
    <Ul>
      <Li>
        <NavBarLink to="/signUp">зарегистрироваться</NavBarLink>
      </Li>
      &nbsp;
      <Li>
        <NavBarLink to="/signIn">войти</NavBarLink>
      </Li>
    </Ul>
  </NavBar>
);

const StyledHeader = styled.header`
  display: flex;
  padding: 0 2rem;
  flex-wrap: wrap;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
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
