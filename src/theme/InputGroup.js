// @flow

import variable from '~/constants/themeVars';
import { scaleW, scaleFont } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const inputGroupTheme = {
    "NativeBase.Icon": {
      fontSize: scaleFont(24),
      color: variables.sTabBarActiveTextColor,
      paddingHorizontal: 5
    },
    "NativeBase.IconNB": {
      fontSize: scaleFont(24),
      color: variables.sTabBarActiveTextColor,
      paddingHorizontal: 5
    },
    "NativeBase.Input": {
      height: variables.inputHeightBase,
      color: variables.inputColor,
      paddingLeft: scaleW(5),
      paddingRight: scaleW(5),
      flex: 1,
      fontSize: variables.inputFontSize,
      lineHeight: variables.inputLineHeight
    },
    ".underline": {
      ".success": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variables.inputErrorBorderColor
      },
      paddingLeft: scaleW(5),
      borderWidth: variables.borderWidth,
      borderTopWidth: scaleW(0),
      borderRightWidth: scaleW(0),
      borderLeftWidth: scaleW(0),
      borderColor: variables.inputBorderColor
    },
    ".regular": {
      ".success": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variables.inputErrorBorderColor
      },
      paddingLeft: scaleW(5),
      borderWidth: variables.borderWidth,
      borderColor: variables.inputBorderColor
    },
    ".rounded": {
      ".success": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variables.inputErrorBorderColor
      },
      paddingLeft: scaleW(5),
      borderWidth: variables.borderWidth,
      borderRadius: variables.inputGroupRoundedBorderRadius,
      borderColor: variables.inputBorderColor
    },

    ".success": {
      "NativeBase.Icon": {
        color: variables.inputSuccessBorderColor
      },
      "NativeBase.IconNB": {
        color: variables.inputSuccessBorderColor
      },
      ".rounded": {
        borderRadius: 30,
        borderColor: variables.inputSuccessBorderColor
      },
      ".regular": {
        borderColor: variables.inputSuccessBorderColor
      },
      ".underline": {
        borderWidth: variables.borderWidth,
        borderTopWidth: scaleW(0),
        borderRightWidth: scaleW(0),
        borderLeftWidth: scaleW(0),
        borderColor: variables.inputSuccessBorderColor
      },
      borderColor: variables.inputSuccessBorderColor
    },

    ".error": {
      "NativeBase.Icon": {
        color: variables.inputErrorBorderColor
      },
      "NativeBase.IconNB": {
        color: variables.inputErrorBorderColor
      },
      ".rounded": {
        borderRadius: 30,
        borderColor: variables.inputErrorBorderColor
      },
      ".regular": {
        borderColor: variables.inputErrorBorderColor
      },
      ".underline": {
        borderWidth: variables.borderWidth,
        borderTopWidth: scaleW(0),
        borderRightWidth: scaleW(0),
        borderLeftWidth: scaleW(0),
        borderColor: variables.inputErrorBorderColor
      },
      borderColor: variables.inputErrorBorderColor
    },
    ".disabled": {
      "NativeBase.Icon": {
        color: "#384850"
      },
      "NativeBase.IconNB": {
        color: "#384850"
      }
    },

    paddingLeft: scaleW(5),
    borderWidth: variables.borderWidth,
    borderTopWidth: scaleW(0),
    borderRightWidth: scaleW(0),
    borderLeftWidth: scaleW(0),
    borderColor: variables.inputBorderColor,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  };

  return inputGroupTheme;
};
