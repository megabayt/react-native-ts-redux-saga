// @flow

import { Platform, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const theme = {
    ".centered": {
      alignItems: "center",
      justifyContent: "center"
    },
    ".paddingStatusBar": {
      paddingTop: getStatusBarHeight()
    },
    flex: 1,
    height:
      Platform.OS === "ios"
        ? variables.deviceHeight
        : variables.deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  };

  return theme;
};
