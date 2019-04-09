// @flow

import { StyleSheet } from "react-native";
import variable, { fontMaker } from '~/constants/themeVars';
import { scaleW, scaleFont } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;
  const transparentBtnCommon = {
    "NativeBase.Text": {
      fontSize: variables.DefaultFontSize - 3,
      color: variables.sTabBarActiveTextColor
    },
    "NativeBase.Icon": {
      fontSize: variables.iconFontSize - 10,
      color: variables.sTabBarActiveTextColor,
      marginHorizontal: null
    },
    "NativeBase.IconNB": {
      fontSize: variables.iconFontSize - 10,
      color: variables.sTabBarActiveTextColor
    },
    paddingVertical: null,
    paddingHorizontal: null
  };

  const cardItemTheme = {
    "NativeBase.Left": {
      "NativeBase.Body": {
        "NativeBase.Text": {
          ".note": {
            color: variables.listNoteColor,
            ...fontMaker({
              weight: '"400"',
            }),
            marginRight: 20
          }
        },
        flex: 1,
        marginLeft: scaleW(10),
        alignItems: null
      },
      "NativeBase.Icon": {
        fontSize: variables.iconFontSize
      },
      "NativeBase.IconNB": {
        fontSize: variables.iconFontSize
      },
      "NativeBase.Text": {
        marginLeft: scaleW(10),
        alignSelf: "center"
      },
      "NativeBase.Button": {
        ".transparent": {
          ...transparentBtnCommon,
          paddingRight: variables.cardItemPadding + 5
        }
      },
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    ".content": {
      "NativeBase.Text": {
        color: platform === "ios" ? "#555" : "#222",
        fontSize: variables.DefaultFontSize - 2
      }
    },
    ".cardBody": {
      padding: -5,
      "NativeBase.Text": {
        marginTop: 5
      }
    },
    "NativeBase.Body": {
      "NativeBase.Text": {
        ".note": {
          color: variables.listNoteColor,

          ...fontMaker({
            weight: '"200"',
          }),
          marginRight: 20
        }
      },
      "NativeBase.Button": {
        ".transparent": {
          ...transparentBtnCommon,
          paddingRight: variables.cardItemPadding + 5,
          alignSelf: "stretch"
        }
      },
      flex: 1,
      alignSelf: "stretch",
      alignItems: "flex-start"
    },
    "NativeBase.Right": {
      "NativeBase.Badge": {
        alignSelf: null
      },
      "NativeBase.Button": {
        ".transparent": {
          ...transparentBtnCommon
        },
        alignSelf: null
      },
      "NativeBase.Icon": {
        alignSelf: null,
        fontSize: variables.iconFontSize - 8,
        color: variables.cardBorderColor
      },
      "NativeBase.IconNB": {
        alignSelf: null,
        fontSize: variables.iconFontSize - 8,
        color: variables.cardBorderColor
      },
      "NativeBase.Text": {
        fontSize: variables.DefaultFontSize - 1,
        alignSelf: null
      },
      "NativeBase.Thumbnail": {
        alignSelf: null
      },
      "NativeBase.Image": {
        alignSelf: null
      },
      "NativeBase.Radio": {
        alignSelf: null
      },
      "NativeBase.Checkbox": {
        alignSelf: null
      },
      "NativeBase.Switch": {
        alignSelf: null
      },
      flex: 0.8
    },
    ".header": {
      "NativeBase.Text": {
        fontSize: scaleFont(16),
        ...fontMaker({
          weight: platform === "ios" ? "600" : "500",
        }),
      },
      ".bordered": {
        "NativeBase.Text": {
          color: variables.brandPrimary,
          ...fontMaker({
            weight: platform === "ios" ? "600" : "500",
          }),
        },
        borderBottomWidth: variables.borderWidth
      },
      borderBottomWidth: null,
      paddingVertical: variables.cardItemPadding + 5
    },
    ".footer": {
      "NativeBase.Text": {
        fontSize: scaleFont(16),
        ...fontMaker({
          weight: platform === "ios" ? "600" : "500",
        }),
      },
      ".bordered": {
        "NativeBase.Text": {
          color: variables.brandPrimary,
          ...fontMaker({
            weight: platform === "ios" ? "600" : "500",
          }),
        },
        borderTopWidth: variables.borderWidth
      },
      borderBottomWidth: null
    },
    "NativeBase.Text": {
      ".note": {
        color: variables.listNoteColor,
        ...fontMaker({
          weight: "200",
        }),
      }
    },
    "NativeBase.Icon": {
      fontSize: variables.iconFontSize - 2
    },
    "NativeBase.IconNB": {
      fontSize: variables.iconFontSize - 2
    },
    ".bordered": {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: variables.cardBorderColor
    },
    ".first": {
      borderTopLeftRadius: variables.cardBorderRadius,
      borderTopRightRadius: variables.cardBorderRadius
    },
    ".last": {
      borderBottomLeftRadius: variables.cardBorderRadius,
      borderBottomRightRadius: variables.cardBorderRadius
    },
    ".noPadding": {
      padding: 0,
    },
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    padding: variables.cardItemPadding + scaleW(5),
    paddingVertical: variables.cardItemPadding,
    backgroundColor: variables.cardDefaultBg
  };

  return cardItemTheme;
};
