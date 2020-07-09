import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { dimensions } from "../ui-core";
import { selectChat, sendMessage } from "../store";
import { IRootStackNavigationProps, Routes } from "../router";
import { Message } from "./Message";

interface IProps extends IRootStackNavigationProps<Routes.CHAT_SCREEN> {}

export function ChatScreen(props: IProps) {
  const { route, navigation } = props;

  const { chatId } = route.params;
  const dispatch = useDispatch();
  const chat = useSelector(selectChat(chatId));

  const headerHeight = useHeaderHeight();

  const [message, setMessage] = React.useState("");
  const messagesListRef = React.useRef<FlatList | null>(null);

  React.useEffect(() => {
    if (chat != null) {
      navigation.setOptions({ title: chat.contact.name });
    }
  }, [chat]);

  function handleChangeMessage(message: string) {
    setMessage(message);
  }

  function handleSandMessage() {
    if (message.length === 0) return;
    dispatch(
      sendMessage({
        id: `chat-message-id_${Math.random()}`,
        chatId,
        message,
        isIncoming: Math.random() > 0.5,
        timestamp: Date.now(),
      })
    );
    setMessage("");
  }

  function scrollToListEnd() {
    const messagesList = messagesListRef.current;
    if (messagesList != null) {
      messagesList.scrollToEnd();
    }
  }

  return chat == null ? null : (
    <View
      style={[
        styles.chatScreen,
        { height: dimensions.windowHeight - headerHeight },
      ]}
    >
      <View style={styles.chatListContainer}>
        <FlatList
          ref={messagesListRef}
          style={styles.chatList}
          data={chat.messages}
          onContentSizeChange={() => scrollToListEnd()}
          keyExtractor={(c) => c.id}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.chatItem,
                  item.isIncoming
                    ? styles.chatItemIncoming
                    : styles.chatItemOutgoing,
                ]}
              >
                <Message message={item.content} incoming={item.isIncoming} />
              </View>
            );
          }}
        />
      </View>
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
  chatListContainer: {
    flex: 1,
  },
  chatList: {
    paddingHorizontal: dimensions.gutter,
  },
  addMessage: {
    flexDirection: "row",
  },
  input: {
    borderWidth: dimensions.borderWidth,
    paddingHorizontal: dimensions.gutter,
    flex: 1,
  },
  chatItem: {
    paddingBottom: dimensions.gutterSmall,
    flexDirection: "row",
    flex: 1,
  },
  chatItemIncoming: {
    justifyContent: "flex-start",
  },
  chatItemOutgoing: {
    justifyContent: "flex-end",
  },
});
