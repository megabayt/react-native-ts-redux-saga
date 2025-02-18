// @flow

import { Platform, PixelRatio } from "react-native";

import pickerTheme from "./Picker";
import variable, { fontMaker } from '~/constants/themeVars';
import { scaleW, scaleFont } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;
  const selectedStyle = {
    "NativeBase.Text": {
      color: variables.listItemSelected
    },
    "NativeBase.Icon": {
      color: variables.listItemSelected
    }
  };

  const listItemTheme = {
    ".white": {
      "NativeBase.Left": {
        flex: 0,
      },
      "NativeBase.Body": {
        flex: 1,
        "NativeBase.Text": {
          color: '#fff',
        },
      },
      "NativeBase.Text": {
        color: '#fff',
      },
      borderBottomColor: '#fff',
      marginLeft: 0,
      paddingRight: 0,
    },
    "NativeBase.InputGroup": {
      "NativeBase.Icon": {
        paddingRight: 5
      },
      "NativeBase.IconNB": {
        paddingRight: 5
      },
      "NativeBase.Input": {
        paddingHorizontal: 5
      },
      flex: 1,
      borderWidth: null,
      margin: -10,
      borderBottomColor: "transparent"
    },
    ".searchBar": {
      "NativeBase.Item": {
        "NativeBase.Icon": {
          backgroundColor: "transparent",
          color: variables.dropdownLinkColor,
          fontSize:
            platform === "ios"
              ? variables.iconFontSize - 10
              : variables.iconFontSize - 5,
          alignItems: "center",
          marginTop: scaleW(2),
          paddingRight: 8
        },
        "NativeBase.IconNB": {
          backgroundColor: "transparent",
          color: null,
          alignSelf: "center"
        },
        "NativeBase.Input": {
          alignSelf: "center"
        },
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        height: platform === "ios" ? 30 : scaleW(40),
        borderColor: "transparent",
        backgroundColor: "#fff",
        borderRadius: 5
      },
      "NativeBase.Button": {
        ".transparent": {
          "NativeBase.Text": {
            ...fontMaker({
              weight: "500",
            }),
          },
          paddingHorizontal: null,
          paddingLeft: platform === "ios" ? 10 : null
        },
        paddingHorizontal: platform === "ios" ? undefined : null,
        width: platform === "ios" ? undefined : scaleW(0),
        height: platform === "ios" ? undefined : 0
      },
      backgroundColor: variables.toolbarInputColor,
      padding: scaleW(10),
      marginLeft: null
    },
    "NativeBase.CheckBox": {
      marginLeft: -10,
      marginRight: 10
    },
    ".first": {
      ".itemHeader": {
        paddingTop: variables.listItemPadding + 3
      }
    },
    ".itemHeader": {
      ".first": {
        paddingTop: variables.listItemPadding + 3
      },
      borderBottomWidth: platform === "ios" ? variables.borderWidth : null,
      marginLeft: null,
      padding: variables.listItemPadding,
      paddingLeft: variables.listItemPadding + 5,
      paddingTop:
        platform === "ios" ? variables.listItemPadding + 25 : undefined,
      paddingBottom:
        platform === "android" ? variables.listItemPadding + 20 : undefined,
      flexDirection: "row",
      borderColor: variables.listBorderColor,
      "NativeBase.Text": {
        fontSize: scaleFont(14),
        color: platform === "ios" ? undefined : variables.listNoteColor
      }
    },
    ".itemDivider": {
      borderBottomWidth: null,
      marginLeft: null,
      padding: variables.listItemPadding,
      paddingLeft: variables.listItemPadding + 5,
      backgroundColor: variables.listDividerBg,
      flexDirection: "row",
      borderColor: variables.listBorderColor
    },
    ".selected": {
      "NativeBase.Left": {
        ...selectedStyle
      },
      "NativeBase.Body": {
        ...selectedStyle
      },
      "NativeBase.Right": {
        ...selectedStyle
      },
      ...selectedStyle
    },
    "NativeBase.Left": {
      "NativeBase.Body": {
        "NativeBase.Text": {
          ".note": {
            color: variables.listNoteColor,
            ...fontMaker({
              weight: "200",
            }),
          },
          ...fontMaker({
            weight: "600",
          }),
        },
        marginLeft: scaleW(10),
        alignItems: null,
        alignSelf: null
      },
      "NativeBase.Icon": {
        width: variables.iconFontSize - 10,
        fontSize: variables.iconFontSize - 10
      },
      "NativeBase.IconNB": {
        width: variables.iconFontSize - 10,
        fontSize: variables.iconFontSize - 10
      },
      "NativeBase.Text": {
        alignSelf: "center"
      },
      flexDirection: "row"
    },
    "NativeBase.Body": {
      "NativeBase.Text": {
        marginHorizontal: variables.listItemPadding,
        ".note": {
          color: variables.listNoteColor,
          ...fontMaker({
            weight: "200",
          }),
        }
      },
      alignSelf: null,
      alignItems: null
    },
    "NativeBase.Right": {
      "NativeBase.Badge": {
        alignSelf: null
      },
      "NativeBase.PickerNB": {
        "NativeBase.Button": {
          marginRight: -15,
          "NativeBase.Text": {
            color: variables.topTabBarActiveTextColor
          }
        }
      },
      "NativeBase.Button": {
        alignSelf: null,
        ".transparent": {
          "NativeBase.Text": {
            color: variables.topTabBarActiveTextColor
          }
        }
      },
      "NativeBase.Icon": {
        alignSelf: null,
        fontSize: variables.iconFontSize - 8,
        color: "#c9c8cd"
      },
      "NativeBase.IconNB": {
        alignSelf: null,
        fontSize: variables.iconFontSize - 8,
        color: "#c9c8cd"
      },
      "NativeBase.Text": {
        ".note": {
          color: variables.listNoteColor,
          ...fontMaker({
            weight: "200",
          }),
        },
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
      padding: null,
      flex: 0.28
    },
    "NativeBase.Text": {
      ".note": {
        color: variables.listNoteColor,
        ...fontMaker({
          weight: "200",
        }),
      },
      alignSelf: "center"
    },
    ".last": {
      borderBottomWidth: 0,
    },
    ".avatar": {
      "NativeBase.Left": {
        flex: 0,
        alignSelf: 'flex-start',
        paddingTop: 14
      },
      "NativeBase.Body": {
        "NativeBase.Text": {
          marginLeft: null
        },
        flex: 1,
        paddingVertical: variables.listItemPadding,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor,
        marginLeft: variables.listItemPadding + 5
      },
      "NativeBase.Right": {
        "NativeBase.Text": {
          ".note": {
            fontSize: variables.noteFontSize - 2
          }
        },
        flex: 0,
        paddingRight: variables.listItemPadding + 5,
        alignSelf: "stretch",
        paddingVertical: variables.listItemPadding,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
      },
      ".noBorder": {
        "NativeBase.Body": {
          borderBottomWidth: null
        },
        "NativeBase.Right": {
          borderBottomWidth: null
        }
      },
      borderBottomWidth: null,
      paddingVertical: null,
      paddingRight: null
    },
    ".thumbnail": {
      "NativeBase.Left": {
        flex: 0
      },
      "NativeBase.Body": {
        "NativeBase.Text": {
          marginLeft: null
        },
        flex: 1,
        paddingVertical: variables.listItemPadding + 5,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor,
        marginLeft: variables.listItemPadding + 5
      },
      "NativeBase.Right": {
        "NativeBase.Button": {
          ".transparent": {
            "NativeBase.Text": {
              fontSize: variables.listNoteSize,
              color: variables.sTabBarActiveTextColor
            }
          },
          height: null
        },
        flex: 0,
        justifyContent: "center",
        alignSelf: "stretch",
        paddingRight: variables.listItemPadding + 5,
        paddingVertical: variables.listItemPadding + 5,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
      },
      ".noBorder": {
        "NativeBase.Body": {
          borderBottomWidth: null
        },
        "NativeBase.Right": {
          borderBottomWidth: null
        }
      },
      borderBottomWidth: null,
      paddingVertical: null,
      paddingRight: null
    },
    ".icon": {
      ".last": {
        "NativeBase.Body": {
          borderBottomWidth: null
        },
        "NativeBase.Right": {
          borderBottomWidth: null
        },
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
      },
      "NativeBase.Left": {
        "NativeBase.Button": {
          "NativeBase.IconNB": {
            marginHorizontal: null,
            fontSize: variables.iconFontSize - 5
          },
          "NativeBase.Icon": {
            marginHorizontal: null,
            fontSize: variables.iconFontSize - 8
          },
          alignSelf: "center",
          height: scaleW(29),
          width: scaleW(29),
          borderRadius: 6,
          paddingVertical: null,
          paddingHorizontal: null,
          alignItems: "center",
          justifyContent: "center"
        },
        "NativeBase.Icon": {
          width: variables.iconFontSize - 5,
          fontSize: variables.iconFontSize - 2
        },
        "NativeBase.IconNB": {
          width: variables.iconFontSize - 5,
          fontSize: variables.iconFontSize - 2
        },
        paddingRight: variables.listItemPadding + 5,
        flex: 0,
        height: scaleW(44),
        justifyContent: "center",
        alignItems: "center"
      },
      "NativeBase.Body": {
        "NativeBase.Text": {
          marginLeft: null,
          fontSize: 17
        },
        flex: 1,
        height: scaleW(44),
        justifyContent: "center",
        borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: variables.listBorderColor
      },
      "NativeBase.Right": {
        "NativeBase.Text": {
          textAlign: "center",
          color: "#8F8E95",
          fontSize: 17
        },
        "NativeBase.IconNB": {
          color: "#C8C7CC",
          fontSize: variables.iconFontSize - 10,
          alignSelf: "center",
          paddingLeft: scaleW(10),
          paddingTop: 3
        },
        "NativeBase.Icon": {
          color: "#C8C7CC",
          fontSize: variables.iconFontSize - 10,
          alignSelf: "center",
          paddingLeft: scaleW(10),
          paddingTop: 3
        },
        "NativeBase.Switch": {
          marginRight: Platform.OS === "ios" ? undefined : -5,
          alignSelf: null
        },
        "NativeBase.PickerNB": {
          ...pickerTheme()
        },
        flexDirection: "row",
        alignItems: "center",
        flex: 0,
        alignSelf: "stretch",
        height: scaleW(44),
        justifyContent: "flex-end",
        borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: variables.listBorderColor,
        paddingRight: variables.listItemPadding + 5
      },
      ".noBorder": {
        "NativeBase.Body": {
          borderBottomWidth: null
        },
        "NativeBase.Right": {
          borderBottomWidth: null
        }
      },
      borderBottomWidth: null,
      paddingVertical: null,
      paddingRight: null,
      height: scaleW(44),
      justifyContent: "center"
    },
    ".noBorder": {
      borderBottomWidth: null
    },
    ".noIndent": {
      marginLeft: null,
      padding: variables.listItemPadding,
      paddingLeft: variables.listItemPadding + 6,
    },
    alignItems: "center",
    flexDirection: "row",
    paddingRight: variables.listItemPadding + 6,
    paddingVertical: variables.listItemPadding + 3,
    marginLeft: variables.listItemPadding + 6,
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    backgroundColor: variables.listBg,
    borderColor: variables.listBorderColor
  };

  return listItemTheme;
};
