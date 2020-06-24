import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");

export const dimensions = {
  gutter: 16,
  gutterSmall: 10,

  fontSize: 20,
  fontWeightBold: "bold",

  inputMaxHeight: 100,

  borderWidth: 2,
  borderRadiusRound: 1000,
  borderRadius: 16,

  windowHeight: windowDimensions.height,
  windowWidth: windowDimensions.width,
} as const;
