// @flow

import variable from '~/constants/themeVars';

export default (variables /*: * */ = variable) => {
  const labelTheme = {
    ".notEmpty": {
      fontSize: variables.inputFontSize * 0.85,
    },
    ".focused": {
      fontSize: variables.inputFontSize * 0.85,
    },
    ".small": {
      ".notEmpty": {
        fontSize: variables.inputFontSize * 0.75,
      },
      ".focused": {
        fontSize: variables.inputFontSize * 0.75,
      },
      fontSize: variables.inputFontSize * 0.95,
    },
    fontSize: variables.inputFontSize,
  };

  return labelTheme;
};
