// @flow

import variable from '~/constants/themeVars';
import { scaleW, scaleFont } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;

  const segmentTheme = {
    height: scaleW(45),
    borderColor: variables.segmentBorderColorMain,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: variables.segmentBackgroundColor,
    "NativeBase.Button": {
      alignSelf: "center",
      borderRadius: 0,
      paddingTop: scaleW(3),
      paddingBottom: scaleW(3),
      height: scaleW(30),
      backgroundColor: "transparent",
      borderWidth: scaleW(1),
      borderLeftWidth: scaleW(0),
      borderColor: variables.segmentBorderColor,
      elevation: scaleW(0),
      ".active": {
        backgroundColor: variables.segmentActiveBackgroundColor,
        "NativeBase.Text": {
          color: variables.segmentActiveTextColor
        },
        "NativeBase.Icon": {
          color: variables.segmentActiveTextColor
        }
      },
      ".first": {
        borderTopLeftRadius: platform === "ios" ? 5 : undefined,
        borderBottomLeftRadius: platform === "ios" ? 5 : undefined,
        borderLeftWidth: 1
      },
      ".last": {
        borderTopRightRadius: platform === "ios" ? 5 : undefined,
        borderBottomRightRadius: platform === "ios" ? 5 : undefined
      },
      "NativeBase.Text": {
        color: variables.segmentTextColor,
        fontSize: 14
      },
      "NativeBase.Icon": {
        fontSize: scaleFont(22),
        paddingTop: scaleW(0),
        color: variables.segmentTextColor
      }
    }
  };

  return segmentTheme;
};
