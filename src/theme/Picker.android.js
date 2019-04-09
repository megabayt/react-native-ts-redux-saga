// @flow

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const pickerTheme = {
    ".note": {
      color: "#8F8E95"
    },
    ".black": {
      color: "#000"
    },
    color: "white",
    width: "100%",
    justifyContent: "space-between"
  };

  return pickerTheme;
};
