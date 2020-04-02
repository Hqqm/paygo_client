import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAccount } from "./account-loader-api";
import { selectIsAccountAuthenticated, selectToken } from "../shared/session/selectors";

type AccountLoaderProps = {
  children: React.ReactElement;
};

export const AccountLoader: React.FC<AccountLoaderProps> = ({ children }) => {
  React.useEffect(() => {
    dispatch(loadAccount());
  }, []);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isAccountAuthenticated = useSelector(selectIsAccountAuthenticated);

  if (token && !isAccountAuthenticated) return null;

  return children;
};
