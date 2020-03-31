import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAccount } from "./services/account-loader-api";
import { selectToken } from "@features/auth/sign-in/selectors/sign-in-selectors";
import { isAccountAuthenticatedSelector } from "./selectors/account-loader-selectors";

type AccountLoaderProps = {
  children: React.ReactElement;
};

export const AccountLoader: React.FC<AccountLoaderProps> = ({ children }) => {
  React.useEffect(() => {
    dispatch(loadAccount());
  }, []);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isAccountAuthenticated = useSelector(isAccountAuthenticatedSelector);

  if (token && !isAccountAuthenticated) return null;

  return children;
};
