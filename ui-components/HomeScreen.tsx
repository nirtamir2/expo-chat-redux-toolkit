import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Routes } from "../Routes";
import { IRootStackNavigationProps } from "../IRootStackNavigationProps";
import { useSelector } from "react-redux";
import { selectChats } from "../store/appSlice";
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
  homeScreen: {}
});
