import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: appSlice.reducer,
  devTools: true,
  middleware
});
