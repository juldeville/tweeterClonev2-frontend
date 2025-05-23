import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import reload from "../reducers/reload";
import theme from "../reducers/theme";
export const makeStore = () => {
  return configureStore({
    reducer: { user, reload, theme },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
