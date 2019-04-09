// @flow

import variable from '~/constants/themeVars';
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;

  const theme = {
    ".noPadding": {
      margin: 0,
      padding: 0,
    },
    marginTop: scaleW(9),
    padding: scaleW(15),
  };

  return theme;
};
