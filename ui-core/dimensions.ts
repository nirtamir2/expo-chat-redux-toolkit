import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");

const toolbarHeight = 64;
const windowHeightWithoutToolbar = windowDimensions.height - toolbarHeight;

export const dimensions = {
  gutter: 16,
  gutterSmall: 10,

  fontSize: 20,
  fontWeightBold: "bold",

  borderWidth: 2,
  borderRadiusRound: 1000,
  borderRadius: 16,

  windowHeight: windowDimensions.height,
  windowWidth: windowDimensions.width,
  toolbarHeight,
  windowHeightWithoutToolbar,
} as const;
