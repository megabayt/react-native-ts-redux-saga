// @flow

import { PixelRatio, StatusBar, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import variable, { fontMaker } from "~/constants/themeVars";
import { scaleW, scaleH, scaleFont } from "~/utils/helpers";
import themeVars from "~/constants/themeVars";

Platform.OS === "android" ? StatusBar.setTranslucent(true) : null;

export default (variables /*: * */ = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const headerTheme = {
    "NativeBase.Left": {
      "NativeBase.Icon": {
        color: "#1677D2",
        fontSize: scaleFont(16),
        marginLeft: scaleW(10)
      },
      flex: 0.2,
      alignSelf: "center",
      alignItems: "flex-start"
    },
    "NativeBase.Body": {
      "NativeBase.Title": {
        color: "#1677d2",
        fontSize: scaleFont(16),
        ...fontMaker({
          weight: "600"
        }),
        ".black": {
          color: "#333333"
        },
        ".white": {
          color: "#fff"
        }
      },
      ".padder": {
        marginLeft: variables.deviceWidth * 0.065 - scaleW(10)
      },
      flex: 1,
      alignItems: "flex-start",
      alignSelf: "center"
    },
    "NativeBase.Right": {
      flex: 0.4,
      alignSelf: "center",
      alignItems: "flex-end",
      flexDirection: "row",
      justifyContent: "flex-end",
      marginRight: scaleW(10)
    },
    ".transparent": {
      "NativeBase.Left": {
        "NativeBase.Icon": {
          color: "#fff"
        }
      },
      backgroundColor: "transparent",
      marginTop: scaleH(7),
      paddingTop:
        platform === "android" ? getStatusBarHeight() : getStatusBarHeight() + 5
    },
    backgroundColor: variables.toolbarDefaultBg,
    flexDirection: "row",
    paddingLeft: scaleW(10),
    paddingRight: scaleW(10),
    justifyContent: "center",
    paddingTop:
      platform === "android"
        ? getStatusBarHeight() + scaleH(10)
        : getStatusBarHeight() + 5,
    paddingBottom: scaleW(13),
    elevation: scaleW(3),
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: scaleW(0), height: 2 },
    shadowOpacity: scaleW(1),
    shadowRadius: scaleW(10),
    top: scaleW(0),
    left: scaleW(0),
    right: 0,
    elevation: 10,
    androidStatusBarColor: themeVars.brandLight,
    zIndex: 1
  };

  return headerTheme;
};
