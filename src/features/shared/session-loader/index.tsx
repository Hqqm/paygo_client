import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAccount } from "./services/session-loader-api";
import { selectToken } from "@features/auth/sign-in/selectors/sign-in-selectors";
import { selectIsAccountAuthenticated } from "./selectors";

type SessionLoaderProps = {
  children: React.ReactElement;
};

export const SessionLoader: React.FC<SessionLoaderProps> = ({ children }) => {
  React.useEffect(() => {
    dispatch(loadAccount());
  }, []);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isAccountAuthenticated = useSelector(selectIsAccountAuthenticated);

  if (token && !isAccountAuthenticated) return null;

  return children;
};
