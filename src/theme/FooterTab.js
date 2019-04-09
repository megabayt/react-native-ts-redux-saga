// @flow

import { Platform } from "react-native";

import variable, { fontMaker } from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;

  const footerTabTheme = {
    "NativeBase.Button": {
      "NativeBase.Thumbnail": {
        width: scaleW(25),
        height: scaleW(25),
        borderRadius: 0
      },
      flexDirection: null,
      backgroundColor: "transparent",
      borderRadius: 0,
      borderColor: "#fff",
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      alignSelf: "center",
      flex: 1,
      height: variables.footerHeight,
      justifyContent: "center"
    },
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch"
  };

  return footerTabTheme;
};
