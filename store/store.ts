import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { chatSliceReducer } from "./chatSlice";

export const store = configureStore({
  reducer: chatSliceReducer,
  devTools: __DEV__,
  middleware: getDefaultMiddleware(),
});
