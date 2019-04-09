// @flow

import { Platform } from "react-native";

import variable from '~/constants/themeVars';
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const svgLineTheme = {
    ".lightBlue": {
      stroke: variables.brandLightPrimary,
    },
    ".lightGreen": {
      stroke: variables.brandLightSuccess,
    },
    ".lightYellow": {
      stroke: variables.brandLightWarning,
    },
    ".lightRed": {
      stroke: variables.brandLightDanger,
    },
    ".blue": {
      stroke: variables.brandPrimary,
    },
    ".green": {
      stroke: variables.brandSuccess,
    },
    ".yellow": {
      stroke: variables.brandWarning,
    },
    ".red": {
      stroke: variables.brandDanger,
    },
    ".darkBlue": {
      stroke: variables.brandDarkPrimary,
    },
    ".darkGreen": {
      stroke: variables.brandDarkSuccess,
    },
    ".darkYellow": {
      stroke: variables.brandDarkWarning,
    },
    ".darkRed": {
      stroke: variables.brandDarkDanger,
    },
  };

  return svgLineTheme;
};
