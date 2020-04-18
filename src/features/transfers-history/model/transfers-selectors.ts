import { AppState } from "root-reducer";

export const selectTransfers = (state: AppState) => state.transfers.all.entities;

export const selectCurrentTransfer = (state: AppState) => state.transfers.cuurentTransfer;
