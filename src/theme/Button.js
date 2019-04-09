// @flow

import variable from "~/constants/themeVars";
import { scaleH, scaleW, scaleFont } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;
  const buttonTheme = {
    ".bordered": {
      backgroundColor: "#fff",
      gradient: null,
      "NativeBase.Text": {
        color: variables.btnPrimaryBg
      }
    },
    ".gradientRight": {
      gradient: [
        { color: "#1677D2", x: 0, y: 0 },
        { color: "#00A3FF", x: 1, y: 0 }
      ],
      "NativeBase.Text": {
        color: "#fff"
      }
    },
    ".borderless": {
      borderColor: "transparent",
      backgroundColor: "#fff",
      gradient: null,
      "NativeBase.Text": {
        color: variables.btnPrimaryBg
      }
    },
    ".greenBorder": {
      borderColor: "rgb(70, 167, 36)",
      "NativeBase.Text": {
        color: "rgb(70, 167, 36)"
      }
    },
    ".redBorder": {
      borderColor: variables.brandDanger,
      "NativeBase.Text": {
        color: variables.brandDanger
      }
    },
    ".small": {
      height: scaleH(29),
      textAlign: "center",
      "NativeBase.Thumbnail": {
        width: 12,
        height: 12,
        marginLeft: 12
      }
    },
    ".icon": {
      "NativeBase.Thumbnail": {
        height: scaleW(30),
        width: scaleW(30),
        borderRadius: 0,
        marginHorizontal: 8
      },
      "NativeBase.Text": {
        paddingLeft: 0
      }
    },
    ".block": {
      flex: 1
    },
    ".wide": {
      width: variables.deviceWidth * 0.8,
      alignSelf: "center"
    },
    ".wide70": {
      width: variables.deviceWidth * 0.7,
      alignSelf: "center"
    },
    ".wide90": {
      width: variables.deviceWidth * 0.9,
      alignSelf: "center"
    },
    ".width100": {
      width: "100%"
    },
    ".center": {
      alignSelf: "center"
    },
    ".green": {
      gradient: [
        { color: "#46A724", x: 0, y: 0 },
        { color: "#52C52A", x: 1, y: 0 }
      ]
    },
    ".red": {
      gradient: [
        { color: "#F4685F", x: 0, y: 0 },
        { color: "#F73F33", x: 1, y: 0 }
      ]
    },
    ".redRight": {
      gradient: [
        { color: "#F73F33", x: 0, y: 0 },
        { color: "#F4685F", x: 1, y: 0 }
      ]
    },
    ".gray": {
      gradient: null,
      backgroundColor: "#878787",
      opacity: 0.6
    },
    ".grayBorder": {
      gradient: null,
      backgroundColor: "transparent",
      borderColor: "#878787",
      borderWidth: scaleW(1),
      "NativeBase.Text": {
        color: "#878787"
      }
    },
    ".footer": {
      width: variables.deviceWidth,
      borderRadius: 0
    },
    "NativeBase.Text": {
      fontFamily: variables.btnFontFamily,
      marginLeft: scaleW(0),
      marginRight: scaleW(0),
      color: variables.inverseTextColor,
      fontSize: variables.btnTextSize,
      paddingHorizontal: scaleW(16),
      backgroundColor: "transparent"
      // childPosition: 1
    },
    "NativeBase.Icon": {
      color: variables.inverseTextColor,
      fontSize: scaleFont(24),
      marginHorizontal: scaleW(16),
      paddingTop: platform === "ios" ? 2 : undefined
    },
    "NativeBase.IconNB": {
      color: variables.inverseTextColor,
      fontSize: scaleFont(24),
      marginHorizontal: scaleW(16),
      paddingTop: platform === "ios" ? 2 : undefined
    },
    paddingVertical: variables.buttonPadding,
    // backgroundColor: variables.btnPrimaryBg,
    // backgroundColor2: '#00f',
    backgroundColor: "transparent",
    gradient: [
      { color: "#00A3FF", x: 0, y: 0 },
      { color: "#1677D2", x: 1, y: 0 }
    ],
    borderRadius: variables.borderRadiusBase * 10,
    borderColor: variables.btnPrimaryBg,
    borderWidth: null,
    height: scaleW(40),
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  };
  return buttonTheme;
};
