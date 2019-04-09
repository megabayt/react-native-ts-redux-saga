// @flow

import variable, { fontMaker } from "~/constants/themeVars";
import { scaleW, scaleH, scaleFont } from "~/utils/helpers";
import { StyleSheet } from "react-native";

export default (variables /*: * */ = variable) => {
  const viewTheme = {
    ".hr": {
      width: "100%",
      height: StyleSheet.hairlineWidth,
      backgroundColor: "rgb(196, 196, 196)",
      marginVertical: scaleH(20),
      ".hrWhite": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      }
    },
    ".hrZero": {
      margin: 0,
    },
    ".hrSmall": {
      marginVertical: scaleH(10)
    },
    ".hrMedium": {
      marginVertical: scaleH(15)
    },
    ".hrBlock": {
      width: variables.deviceWidth - scaleW(27) * 2,
      marginHorizontal: scaleW(27)
    },
    ".padder": {
      padding: variables.contentPadding
    },
    ".padder2": {
      padding: variables.contentPadding * 2
    },
    ".padderCards": {
      paddingVertical: variables.contentPadding,
      paddingHorizontal:
        (variables.deviceWidth - variables.deviceWidth * 0.87) / 2 + 2
    },
    ".centered": {
      alignItems: "center",
      justifyContent: "center"
    },
    ".blockWithLabel": {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    "NativeBase.Text": {
      ".blockLabel": {
        flex: 0.8,
        textAlign: "left",
        color: "rgb(135, 135, 135)",
        fontSize: scaleFont(14),
        marginRight: scaleW(3)
      },
      ".blockValue": {
        flex: 1.2,
        textAlign: "right",
        fontSize: scaleFont(14),
        color: "#333333",
        marginLeft: scaleW(3)
      },
      ".blockValueBold": {
        marginTop: scaleW(5),
        ...fontMaker({
          weight: "600"
        }),
        fontSize: scaleFont(20)
      }
    },
    ".blockHeader": {
      // alignItems: "center",
      paddingBottom: 5
    },
    ".blockHeaderItem": {
      width: "100%",
      paddingHorizontal: scaleW(27),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      "NativeBase.Text": {
        fontSize: scaleFont(20),
        color: "#333333",
        ...fontMaker({
          weight: "300"
        })
      }
    }
  };

  return viewTheme;
};
