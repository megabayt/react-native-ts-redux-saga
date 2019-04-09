// @flow

import variable from '~/constants/themeVars';
import { scaleW, scaleFont } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;

  const fabTheme = {
    "NativeBase.Button": {
      alignItems: "center",
      padding: null,
      justifyContent: "center",
      "NativeBase.Icon": {
        alignSelf: "center",
        fontSize: scaleFont(20),
        marginLeft: scaleW(0),
        marginRight: scaleW(0),
      },
      "NativeBase.IconNB": {
        alignSelf: "center",
        fontSize: scaleFont(20),
        marginLeft: scaleW(0),
        marginRight: scaleW(0),
      },
    },
  };

  return fabTheme;
};
