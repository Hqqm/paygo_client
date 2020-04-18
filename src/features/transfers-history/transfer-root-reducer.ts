import { combineReducers } from "@reduxjs/toolkit";
import { reducer as transfersReducer } from "./model/transfers-slice";
import { reducer as transferReducer } from "./model/transfer-slice";

export const transfersRootReducer = combineReducers({
  all: transfersReducer,
  cuurentTransfer: transferReducer,
});
