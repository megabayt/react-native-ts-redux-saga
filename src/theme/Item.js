// @flow

import { Platform, StyleSheet } from "react-native";

import variable from "~/constants/themeVars";
import { scaleW, scaleFont } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const fileSizeDiff = scaleFont(variables.inputFontSize)
    - scaleFont(variables.inputFontSize * 0.85);
  const itemTheme = {
    "NativeBase.Label": {
      color: variables.inputColorPlaceholder,
      paddingRight: scaleW(5),
      paddingTop: scaleW(0),
      marginTop: -fileSizeDiff - 2,
      paddingLeft: scaleW(15)
    },
    "NativeBase.Icon": {
      fontSize: scaleFont(18),
      paddingRight: scaleW(8),
      top: 0,
      color: "rgba(22, 119, 210, .4)"
    },
    "NativeBase.IconNB": {
      fontSize: scaleFont(18),
      paddingRight: scaleW(8),
      top: 0,
      color: "rgba(22, 119, 210, .4)"
    },
    "NativeBase.Input": {
      ".multiline": {
        height: null,
        minHeight: variables.inputHeightBase,
        paddingBottom: scaleW(20),
      },
      color: variables.inputColor,
      flex: 1,
      fontSize: variables.inputFontSize,
      height: scaleW(48),
      top: scaleW(10),
      paddingTop: scaleW(3),
      paddingBottom: scaleW(7)
    },
    ".notEmpty": {
      "NativeBase.Label": {
        paddingTop: fileSizeDiff + scaleW(20),
        marginTop: fileSizeDiff,
      }
    },
    ".focused": {
      "NativeBase.Label": {
        paddingTop: fileSizeDiff + scaleW(20),
        marginTop: fileSizeDiff,
      },
      borderColor: variables.inputBorderColorActive
    },
    ".error": {
      borderColor: "#ae4238"
    },
    ".white": {
      "NativeBase.Label": {
        color: "white"
      },
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: "#fff",
      borderWidth: 1
    },
    marginBottom: scaleW(16),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.inputBorderColor,
    borderRadius: 3,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scaleW(10)
  };

  return itemTheme;
};
