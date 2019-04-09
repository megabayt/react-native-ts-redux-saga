// @flow

import variable from '~/constants/themeVars';
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const theme = {
    '.group': {
      height: scaleW(50),
      paddingVertical: variables.listItemPadding - 8,
      paddingTop: variables.listItemPadding + 12,
      '.bordered': {
        height: scaleW(50),
        paddingVertical: variables.listItemPadding - 8,
        paddingTop: variables.listItemPadding + 12,
      },
    },
    '.bordered': {
      '.noTopBorder': {
        borderTopWidth: scaleW(0),
      },
      '.noBottomBorder': {
        borderBottomWidth: scaleW(0),
      },
      height: scaleW(35),
      paddingTop: variables.listItemPadding + 2,
      paddingBottom: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      borderTopWidth: variables.borderWidth,
      borderColor: variables.listBorderColor,
    },
    'NativeBase.Text': {
      fontSize: variables.tabBarTextSize - 2,
      color: '#777',
    },
    '.noTopBorder': {
      borderTopWidth: scaleW(0),
    },
    '.noBottomBorder': {
      borderBottomWidth: scaleW(0),
    },
    height: scaleW(38),
    backgroundColor: '#F0EFF5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: variables.listItemPadding + 5,
  };

  return theme;
};
