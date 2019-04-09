// @flow

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const cardTheme = {
    ".transparent": {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      elevation: null,
      backgroundColor: "transparent",
      borderWidth: 0
    },
    ".noShadow": {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      elevation: null
    },
    marginVertical: scaleW(5),
    marginHorizontal: scaleW(2),
    borderWidth: variables.borderWidth,
    borderRadius: variables.cardBorderRadius,
    borderColor: variables.cardBorderColor,
    flexWrap: "nowrap",
    backgroundColor: variables.cardDefaultBg,
    shadowColor: "#000",
    shadowOffset: { width: scaleW(0), height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4
  };

  return cardTheme;
};
