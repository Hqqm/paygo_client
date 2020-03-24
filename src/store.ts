import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "rootReducer";

export const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production"
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducer", () => store.replaceReducer(rootReducer));
  }

  return store;
};

const dispatch = configureAppStore().dispatch;
export type AppDispatch = typeof dispatch;
