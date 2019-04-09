// @flow

import variable from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const thumbnailTheme = {
    ".preview": {
      borderRadius: scaleW(4)
    },
    ".square": {
      borderRadius: 0,
      ".small": {
        width: scaleW(36),
        height: scaleW(36),
        borderRadius: 0
      },
      ".large": {
        width: scaleW(80),
        height: scaleW(80),
        borderRadius: 0
      }
    },
    ".small": {
      width: scaleW(36),
      height: scaleW(36),
      borderRadius: 18,
      ".square": {
        borderRadius: 0
      }
    },
    ".large": {
      width: scaleW(80),
      height: scaleW(80),
      borderRadius: 40,
      ".square": {
        borderRadius: 0
      }
    },
    width: scaleW(56),
    height: scaleW(56),
    borderRadius: 28
  };

  return thumbnailTheme;
};
