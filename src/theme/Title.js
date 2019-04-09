// @flow

import { Platform } from "react-native";

import variable, { fontMaker } from '~/constants/themeVars';
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    textAlign: "center",
    paddingLeft: Platform.OS === "ios" ? scaleW(4) : scaleW(0),
    marginLeft: Platform.OS === "ios" ? undefined : -3,
    paddingTop: 1
  };

  return titleTheme;
};
