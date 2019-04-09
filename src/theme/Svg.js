// @flow

import { Platform } from "react-native";

import variable, { fontMaker } from "~/constants/themeVars";
import { scaleW } from "~/utils/helpers";

export default (variables /*: * */ = variable) => {
  const svgTheme = {
    ".blueBg": {
      backgroundColor: variables.brandPrimary02
    },
    ".greenBg": {
      backgroundColor: variables.brandSuccess02
    },
    ".yellowBg": {
      backgroundColor: variables.brandWarning02
    },
    ".redBg": {
      backgroundColor: variables.brandDanger02
    },
    ".blueGrid": {
      "NativeBase.SVGPolygon": {
        fill: variables.brandPrimary02
      },
      "NativeBase.SVGLine": {
        ".grid": {
          stroke: variables.brandPrimary04
        }
      }
    },
    ".greenGrid": {
      "NativeBase.SVGPolygon": {
        fill: variables.brandSuccess02
      },
      "NativeBase.SVGLine": {
        ".grid": {
          stroke: variables.brandSuccess04
        }
      }
    },
    ".yellowGrid": {
      "NativeBase.SVGPolygon": {
        fill: variables.brandWarning02
      },
      "NativeBase.SVGLine": {
        ".grid": {
          stroke: variables.brandWarning04
        }
      }
    },
    ".redGrid": {
      "NativeBase.SVGPolygon": {
        fill: variables.brandDanger02
      },
      "NativeBase.SVGLine": {
        ".grid": {
          stroke: variables.brandDanger04
        }
      }
    },
    "NativeBase.SVGLine": {
      ".grid": {
        strokeWidth: scaleW(1)
      },
      ".value": {
        strokeWidth: scaleW(3)
      }
    },
    "NativeBase.SVGCircle": {
      r: scaleW(5)
    },
    "NativeBase.SVGText": {
      ".month": {
        color: variables.brandGray,
        ...fontMaker({
          weight: "300"
        }),
        backgroundColor: "transparent"
      },
      fontSize: 14,
      ...fontMaker({
        weight: "600"
      })
    }
  };

  return svgTheme;
};
