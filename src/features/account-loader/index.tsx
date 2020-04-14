import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAccount } from "./account-loader-effects";
import { selectIsAccountAuthenticated, selectToken } from "../shared/session/selectors";
import { loadSession, createSession } from "@features/shared/session/slice";
import { AppDispatch } from "store";

type AccountLoaderProps = {
  children: React.ReactElement;
};

export const AccountLoader = ({ children }: AccountLoaderProps) => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector(selectToken);
  const isAccountAuthenticated = useSelector(selectIsAccountAuthenticated);

  React.useEffect(() => {
    dispatch(loadAccount()).then((result) => {
      if (loadAccount.fulfilled.match(result)) {
        dispatch(loadSession());
      }
    });
  }, []);

  if (token && !isAccountAuthenticated) return null;

  return children;
};
