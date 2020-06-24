import { store } from "./store";

export type IRootState = ReturnType<typeof store.getState>;
