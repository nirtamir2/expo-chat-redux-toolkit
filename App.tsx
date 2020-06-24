import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Provider, useSelector} from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./Routes";
import { store } from "./store/store";
import { HomeScreen } from "./ui-components/HomeScreen";
import { ChatScreen } from "./ui-components/ChatScreen";
import { RootStackParamListT } from "./RootStackParamListT";

const Stack = createStackNavigator<RootStackParamListT>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.HOME_SCREEN}
            component={HomeScreen}
            options={{
              title: "Chats"
            }}
          />
          <Stack.Screen
            name={Routes.CHAT_SCREEN}
            component={ChatScreen}
            options={{
              title: "Chat"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
