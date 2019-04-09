// @flow

import { Platform } from "react-native";

import variable from '~/constants/themeVars';
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const subtitleTheme = {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: "center",
    paddingLeft: Platform.OS === "ios" ? scaleW(4) : scaleW(0),
    marginLeft: Platform.OS === "ios" ? undefined : -3
  };

  return subtitleTheme;
};
