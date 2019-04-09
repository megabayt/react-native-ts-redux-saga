// @flow

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const pickerTheme = {
    ".note": {
      color: "#8F8E95"
    },
    // width: "90%",
    justifyContent: "space-between",
    marginRight: -4,
    flexGrow: 1
  };

  return pickerTheme;
};
