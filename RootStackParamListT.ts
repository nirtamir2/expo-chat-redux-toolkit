import { Routes } from "./Routes";

export type RootStackParamListT = {
  [Routes.CHAT_SCREEN]: { chatId: string };
  [Routes.HOME_SCREEN]: undefined;
};
