import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { dimensions } from "../dimensions";
import {appSlice, createSendMessage, selectChat, selectChats, sendMessage} from "../store/appSlice";
import { IRootStackNavigationProps } from "../IRootStackNavigationProps";
import { Routes } from "../Routes";
import {Message} from "./Message";
import {store} from "../store/store";

interface IProps extends IRootStackNavigationProps<Routes.CHAT_SCREEN> {}

export function ChatScreen(props: IProps) {
  const { route } = props;
  // NOTE: Laziness selector with parameter
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const {chatId} = route.params;
  const chat = chats.find(c => c.id === chatId)?.messages;
  const [message, setMessage] = React.useState("");

  function handleChangeMessage(message: string) {
    setMessage(message);
  }

  function handleSandMessage() {
    const sendMessageAction = createSendMessage({message, chatId});
    console.log(sendMessageAction);
   dispatch(sendMessageAction)
    setMessage("")
  }

  return (chat == null ? null :
    <View style={styles.chatScreen}>
      <FlatList
        style={styles.chatList}
        data={chat}
        renderItem={({item}) => {
          return <View style={{flex: 1, flexDirection: 'row',justifyContent: item.isIncoming ? "flex-start" : "flex-end"}}>
          <Message message={item.content} incoming={item.isIncoming}/>
          </View>
        }}
      />
      <View style={styles.addMessage}>
        <TextInput
          multiline
          style={styles.input}
          value={message}
          onChangeText={handleChangeMessage}
        />
        <Button title="Send" onPress={handleSandMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
  },
  chatList:{
    padding: dimensions.gutter,
  },
  addMessage: {
    flexDirection: "row"
  },
  input: {
    borderWidth: dimensions.borderWidth,
    paddingHorizontal: dimensions.gutter,
    flex: 1
  }
});
