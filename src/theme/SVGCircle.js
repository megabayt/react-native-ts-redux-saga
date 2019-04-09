// @flow

import { Platform } from "react-native";

import variable from '~/constants/themeVars';
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const svgCircleTheme = {
    ".lightBlue": {
      fill: variables.brandLightPrimary,
    },
    ".lightGreen": {
      fill: variables.brandLightSuccess,
    },
    ".lightYellow": {
      fill: variables.brandLightWarning,
    },
    ".lightRed": {
      fill: variables.brandLightDanger,
    },
    ".blue": {
      fill: variables.brandPrimary,
    },
    ".green": {
      fill: variables.brandSuccess,
    },
    ".yellow": {
      fill: variables.brandWarning,
    },
    ".red": {
      fill: variables.brandDanger,
    },
    ".darkBlue": {
      fill: variables.brandDarkPrimary,
    },
    ".darkGreen": {
      fill: variables.brandDarkSuccess,
    },
    ".darkYellow": {
      fill: variables.brandDarkWarning,
    },
    ".darkRed": {
      fill: variables.brandDarkDanger,
    },
    ".active": {
      strokeWidth: scaleW(3),
      r: scaleW(8),
    }
  };

  return svgCircleTheme;
};
