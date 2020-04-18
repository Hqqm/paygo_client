import * as React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Account } from "../account/account-types";
import { TogglerTheme } from "@lib/toggler-theme/toggler-theme";
import { exitFromAccount } from "../session/services/utils";
import { NavBarLink } from "@ui/atoms";
import { Inline } from "@ui/layouts";

const dropDownArrow = require("public/drop-down-arrow.svg");
const user = require("public/user.svg");

type AuthenticatedAccountProps = {
  account: Account;
};

export const AuthenticatedAccount = ({ account }: AuthenticatedAccountProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <AuthenticatedAccountContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <AccountContainer>
        <Inline space="1rem">
          <ArrowDropDownContainer>
            <img src={user} alt="user icon" />
          </ArrowDropDownContainer>
          <AccountInfoContainer>
            <AccountInfoItem>{account!.login}</AccountInfoItem>
            <AccountInfoMoney>{account!.balance + " ₽"}</AccountInfoMoney>
          </AccountInfoContainer>
          <ArrowDropDownContainer>
            <img src={dropDownArrow} alt="drop down arrow icon" />
          </ArrowDropDownContainer>
        </Inline>
      </AccountContainer>

      {isMenuOpen && (
        <DropDownMenuContainer>
          <DropDownItem>
            <TogglerTheme />
          </DropDownItem>
          <DropDownItem>
            <NavBarLink to="/" onClick={() => exitFromAccount(dispatch)}>
              выйти
            </NavBarLink>
          </DropDownItem>
        </DropDownMenuContainer>
      )}
    </AuthenticatedAccountContainer>
  );
};

const AuthenticatedAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 5px;
  cursor: pointer;
`;

const AccountInfoContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const AccountContainer = styled.div`
  height: 100%;
  display: flex;
`;

const AccountInfoItem = styled.div`
  font-size: 1.1rem;
`;

const AccountInfoMoney = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ArrowDropDownContainer = styled.div`
  height: 30px;
  width: 30px;
  align-self: center;
`;

const DropDownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  position: absolute;
  top: 75px;
  padding: 8px 0;
  background: #ffffff;
  cursor: default;
  z-index: 2;
  border-radius: 10px;
  box-shadow: 0 27px 85px -5px rgba(0, 0, 0, 0.15);
`;

const DropDownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
