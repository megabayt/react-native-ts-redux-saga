// @flow

import variable from '~/constants/themeVars';
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const bodyTheme = {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  };

  return bodyTheme;
};
