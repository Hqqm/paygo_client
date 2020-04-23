import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectIsAccountAuthenticated } from "../session/selectors";
import { selectAccount } from "../account/selectors";
import { Link, NavBarLink } from "@ui/atoms";
import { AuthenticatedAccount } from "./auth-account";

const logoSvg = require("public/logo.svg");

export const Header = () => {
  const isAccountAuthenticated = useSelector(selectIsAccountAuthenticated);
  const account = useSelector(selectAccount);

  return (
    <StyledHeader>
      <Link to="/">
        <img src={logoSvg} alt="paygo logo" />
      </Link>
      {isAccountAuthenticated && account ? (
        <>
          <AuthenticatedNavbar />
          <AuthenticatedAccount account={account} />
        </>
      ) : (
        <GuestNavbar />
      )}
    </StyledHeader>
  );
};

const AuthenticatedNavbar = () => {
  return (
    <NavBar>
      <Ul>
        &nbsp;
        <Li>
          <NavBarLink to="/replenishBalance">пополнить баланс</NavBarLink>
        </Li>
        <Li>
          <NavBarLink to="/transferMoney">переводы</NavBarLink>
        </Li>
        &nbsp;
        <Li>
          <NavBarLink to="/tranfersHistory">история</NavBarLink>
        </Li>
        &nbsp;
      </Ul>
    </NavBar>
  );
};

/*
<Li>
          <NavBarLink to="/">
          
          </NavBarLink>
        </Li>
        &nbsp;
        <Li>
  
        </Li>
        */

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
