// @flow

import variable from '~/constants/themeVars';
import { scaleW, scaleFont } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const textAreaTheme = {
    ".underline": {
      borderBottomWidth: variables.borderWidth,
      marginTop: scaleW(5),
      borderColor: variables.inputBorderColor
    },
    ".bordered": {
      borderWidth: scaleW(1),
      marginTop: scaleW(5),
      borderColor: variables.inputBorderColor
    },
    color: variables.textColor,
    paddingLeft: scaleW(10),
    paddingRight: scaleW(5),
    fontSize: scaleFont(15),
    textAlignVertical: "top"
  };

  return textAreaTheme;
};
