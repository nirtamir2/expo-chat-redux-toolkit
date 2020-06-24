import { createAction, createSlice } from "@reduxjs/toolkit";
import initialStateData from "./initialStateData.json";

const initialState: IState = initialStateData;

export const selectChats = (state: IState) => state.chats;
export const selectChat = (state: IState, action: { chatId: string }) =>
  state.chats.find(c => c.id === action.chatId);

type IdT = string;

interface IContact {
  id: IdT;
  name: string;
  avatarUrl: string;
}

interface IMessage {
  isIncoming: boolean;
  content: string;
  timestamp: number;
}

type IChat = {
  id: IdT;
  contact: IContact;
  messages: IMessage[];
};

interface IState {
  chats: IChat[];
}

export const createSendMessage = createAction(
  "SEND_MESSAGE",
  ({ message, chatId }: { message: string; chatId: string }) => {
    return {
      payload: {
        message,
        chatId
      }
    };
  }
);

function sendMessageReducer(
  state: IState,
  action: { payload: { message: string; chatId: string } }
): IState {
  const { message, chatId } = action.payload;
  const newMessage = {
    isIncoming: Math.random() > 0.5,
    timestamp: Date.now(),
    content: message
  };

  return {
    ...state,
    chats: state.chats.map(c =>
      c.id === chatId
        ? {
            ...c,
            messages: [...c.messages, newMessage]
          }
        : c
    )
  };
}
export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    sendMessage: sendMessageReducer
  }
});

export const { sendMessage } = appSlice.actions;
