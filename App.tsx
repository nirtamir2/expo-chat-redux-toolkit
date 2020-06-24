import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen, HomeScreen } from "./ui-components";
import { RootStackParamListT, Routes } from "./router";
import { store } from "./store";

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
              title: "Chats",
            }}
          />
          <Stack.Screen name={Routes.CHAT_SCREEN} component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
