import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Routes } from "./Routes";
import { RootStackParamListT } from "./RootStackParamListT";

type StackRoutesRoutesT = Routes.CHAT_SCREEN | Routes.HOME_SCREEN;

export interface IRootStackNavigationProps<Route extends StackRoutesRoutesT> {
  navigation: StackNavigationProp<RootStackParamListT, Route>;
  route: RouteProp<RootStackParamListT, Route>;
}
