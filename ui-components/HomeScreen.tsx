import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { Routes, IRootStackNavigationProps } from "../router";
import { selectChats } from "../store";
import { ChatItem } from "./ChatItem";

interface IProps extends IRootStackNavigationProps<Routes.HOME_SCREEN> {}

export function HomeScreen(props: IProps) {
  const chats = useSelector(selectChats);
  const { navigation } = props;

  function handleNavigateToChat(chatId: string) {
    navigation.navigate(Routes.CHAT_SCREEN, { chatId });
  }
  return (
    <View style={styles.homeScreen}>
      <FlatList
        keyExtractor={(c) => c.id}
        data={chats}
        renderItem={({ item }) => {
          const { id, contact, messages } = item;
          const lastMessage = messages[messages.length - 1];
          return (
            <TouchableOpacity onPress={() => handleNavigateToChat(id)}>
              <ChatItem
                message={lastMessage.content}
                avatarUrl={contact.avatarUrl}
                contactName={contact.name}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {},
});
