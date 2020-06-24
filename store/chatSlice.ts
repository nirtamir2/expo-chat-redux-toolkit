import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialChatData from "./initialStateData.json";
import { IChat } from "../types";
import { IRootState } from "./IRootState";

interface IState {
  chats: IChat[];
}

interface ISendMessageParams {
  message: string;
  chatId: string;
}

const initialState: IState = {
  chats: initialChatData.chats,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    sendMessage: (state: IState, action: PayloadAction<ISendMessageParams>) => {
      const { message, chatId } = action.payload;
      const chat = state.chats.find((c) => c.id === chatId);
      if (chat != null) {
        const isIncoming = Math.random() > 0.5;
        const newMessage = {
          id: `chat-message-id_${Math.random()}`,
          isIncoming: isIncoming,
          timestamp: Date.now(),
          content: message,
        };
        chat.messages = [...chat.messages, newMessage];
      }
    },
  },
});

export const selectChats = (state: IRootState) => state.chats;
export const selectChat = (chatId: string) => (state: IRootState) =>
  state.chats.find((c) => c.id === chatId);

export const { sendMessage } = chatSlice.actions;

export const chatSliceReducer = chatSlice.reducer;
