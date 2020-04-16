import { AppState } from "root-reducer";

export const selectTransfers = (state: AppState) => state.transfers.entities;
