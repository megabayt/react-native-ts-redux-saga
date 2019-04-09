// @flow

import variable, { fontMaker } from '~/constants/themeVars';
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".error": {
      color: '#ae4238',
      marginLeft: scaleW(15),
      marginTop: -10,
      marginBottom: scaleW(10),
      fontSize: variables.inputFontSize * 0.8,
    },
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    },
    ".light": {
      ...fontMaker({
        weight: '300',
      }),
    },
    ".bold": {
      ...fontMaker({
        weight: '600',
      }),
    },
  };

  return textTheme;
};
