// @flow

import variable from '~/constants/themeVars';

export default (variables /*: * */ = variable) => {
  const h1Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
  };

  return h1Theme;
};
