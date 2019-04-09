// @flow

import variable from '~/constants/themeVars';
import { Platform } from "react-native";
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const tabContainerTheme = {
    zIndex: 2,
    elevation: scaleW(3),
    height: scaleW(34),
    flexDirection: "row",
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: { width: scaleW(2), height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    justifyContent: "space-around",
  };

  return tabContainerTheme;
};
