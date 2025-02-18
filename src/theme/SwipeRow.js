// @flow

import variable from '~/constants/themeVars';
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const swipeRowTheme = {
    "NativeBase.ListItem": {
      ".list": {
        backgroundColor: "#FFF",
      },
      marginLeft: scaleW(0),
    },
    "NativeBase.Left": {
      flex: 0,
      alignSelf: null,
      alignItems: null,
      "NativeBase.Button": {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius: 0,
      },
    },
    "NativeBase.Right": {
      flex: 0,
      alignSelf: null,
      alignItems: null,
      "NativeBase.Button": {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius: 0,
      },
    },
    "NativeBase.Button": {
      flex: 1,
      height: null,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch",
      borderRadius: 0,
    },
  };

  return swipeRowTheme;
};
