// @flow

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const contentTheme = {
    flex: 1,
    backgroundColor: "transparent",
    "NativeBase.Segment": {
      borderWidth: scaleW(0),
      backgroundColor: "transparent"
    },
    // zIndex: -1
  };

  return contentTheme;
};
