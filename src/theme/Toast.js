// @flow

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;

  const toastTheme = {
    ".danger": {
      backgroundColor: variables.brandDanger
    },
    ".warning": {
      backgroundColor: variables.brandWarning
    },
    ".success": {
      backgroundColor: variables.brandSuccess
    },
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: platform === "ios" ? 5 : scaleW(0),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scaleW(10),
    minHeight: scaleW(50),
    "NativeBase.Text": {
      color: "#fff",
      flex: 1
    },
    "NativeBase.Button": {
      backgroundColor: "transparent",
      height: scaleW(30),
      elevation: scaleW(0),
      "NativeBase.Text": {
        fontSize: 14
      }
    }
  };

  return toastTheme;
};
