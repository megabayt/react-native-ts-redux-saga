// @flow

import variable from "~/constants/themeVars";
import { scaleW, scaleH } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const inputTheme = {
    ".multiline": {
      height: null,
      paddingTop: scaleH(13)
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: scaleW(5),
    paddingRight: scaleW(5),
    flex: 1,
    fontSize: variables.inputFontSize
  };

  return inputTheme;
};
