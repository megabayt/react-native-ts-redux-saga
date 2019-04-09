// @flow

import { Platform } from "react-native";

import variable, { fontMaker } from '~/constants/themeVars';
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const svgLineTheme = {
    ".lightBlue": {
      color: variables.brandLightPrimary,
    },
    ".lightGreen": {
      color: variables.brandLightSuccess,
    },
    ".lightYellow": {
      color: variables.brandLightWarning,
    },
    ".lightRed": {
      color: variables.brandLightDanger,
    },
    ".blue": {
      color: variables.brandPrimary,
    },
    ".green": {
      color: variables.brandSuccess,
    },
    ".yellow": {
      color: variables.brandWarning,
    },
    ".red": {
      color: variables.brandDanger,
    },
    ".darkBlue": {
      color: variables.brandDarkPrimary,
    },
    ".darkGreen": {
      color: variables.brandDarkSuccess,
    },
    ".darkYellow": {
      color: variables.brandDarkWarning,
    },
    ".darkRed": {
      color: variables.brandDarkDanger,
    },
    fontSize: variables.DefaultFontSize,
    ...fontMaker({
      weight: '400',
    }),
    lineHeight: 1,
    textAnchor: 'middle',
    alignmentBaseline: 'central',
    color: variables.defaultTextColor,
    paddingHorizontal: scaleW(4),
    paddingVertical: scaleW(2),
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  return svgLineTheme;
};
