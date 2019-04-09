// @flow

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const footerTheme = {
    ".transparent": {
      backgroundColor: "transparent",
      elevation: 0,
      shadowOpacity: 0,
      borderTopWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.2)"
    },
    backgroundColor: variables.footerDefaultBg,
    flexDirection: "row",
    justifyContent: "center",
    height: variables.footerHeight,
    paddingBottom: variables.footerPaddingBottom,

    elevation: scaleW(10),
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: scaleW(0), height: -2 },
    shadowOpacity: scaleW(1),
    shadowRadius: scaleW(10),
    left: scaleW(0),
    right: 0
  };
  return footerTheme;
};
