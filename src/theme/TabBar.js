// @flow

import variable, { fontMaker } from '~/constants/themeVars';
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const tabBarTheme = {
    ".tabIcon": {
      height: undefined
    },
    ".vertical": {
      height: 60
    },
    "NativeBase.Button": {
      ".transparent": {
        "NativeBase.Text": {
          fontSize: variables.tabFontSize,
          color: variables.sTabBarActiveTextColor,
          ...fontMaker({
            weight: "400",
          }),
        },
        "NativeBase.IconNB": {
          color: variables.sTabBarActiveTextColor
        }
      },
      "NativeBase.IconNB": {
        color: variables.sTabBarActiveTextColor
      },
      "NativeBase.Text": {
        fontSize: variables.tabFontSize,
        color: variables.sTabBarActiveTextColor,
        ...fontMaker({
          weight: "400",
        }),
      },
      ".isTabActive": {
        "NativeBase.Text": {
          ...fontMaker({
            weight: "900",
          }),
        }
      },
      flex: 1,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: null,
      borderBottomColor: "transparent",
      backgroundColor: variables.tabBgColor
    },
    height: scaleW(45),
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: scaleW(1),
    borderTopWidth: scaleW(0),
    borderLeftWidth: scaleW(0),
    borderRightWidth: scaleW(0),
    borderBottomColor: "#ccc",
    backgroundColor: variables.tabBgColor
  };

  return tabBarTheme;
};
