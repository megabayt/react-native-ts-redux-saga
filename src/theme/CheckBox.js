// @flow

import color from 'color';
import variable from '~/constants/themeVars';
import { scaleW } from '~/utils/helpers';

export default (variables /*: * */ = variable) => {
  const checkBoxTheme = {
    ".lightBlue": {
      gradient: [
        { x: 0, y: 0, color: variables.brandLightPrimary },
        { x: 1, y: 0, color: color(variables.brandLightPrimary).lighten(0.2).rgb().toString() },
      ]
    },
    ".lightGreen": {
      gradient: [
        { x: 0, y: 0, color: variables.brandLightSuccess },
        { x: 1, y: 0, color: color(variables.brandLightSuccess).lighten(0.2).rgb().toString() },
      ]
    },
    ".lightYellow": {
      gradient: [
        { x: 0, y: 0, color: variables.brandLightWarning },
        { x: 1, y: 0, color: color(variables.brandLightWarning).lighten(0.2).rgb().toString() },
      ]
    },
    ".lightRed": {
      gradient: [
        { x: 0, y: 0, color: variables.brandLightDanger },
        { x: 1, y: 0, color: color(variables.brandLightDanger).lighten(0.2).rgb().toString() },
      ]
    },
    ".blue": {
      gradient: [
        { x: 0, y: 0, color: variables.brandPrimary },
        { x: 1, y: 0, color: color(variables.brandPrimary).lighten(0.2).rgb().toString() },
      ]
    },
    ".green": {
      gradient: [
        { x: 0, y: 0, color: variables.brandSuccess },
        { x: 1, y: 0, color: color(variables.brandSuccess).lighten(0.2).rgb().toString() },
      ]
    },
    ".yellow": {
      gradient: [
        { x: 0, y: 0, color: variables.brandWarning },
        { x: 1, y: 0, color: color(variables.brandWarning).lighten(0.2).rgb().toString() },
      ]
    },
    ".red": {
      gradient: [
        { x: 0, y: 0, color: variables.brandDanger },
        { x: 1, y: 0, color: color(variables.brandDanger).lighten(0.2).rgb().toString() },
      ]
    },
    ".darkBlue": {
      gradient: [
        { x: 0, y: 0, color: variables.brandDarkPrimary },
        { x: 1, y: 0, color: color(variables.brandDarkPrimary).lighten(0.2).rgb().toString() },
      ]
    },
    ".darkGreen": {
      gradient: [
        { x: 0, y: 0, color: variables.brandDarkSuccess },
        { x: 1, y: 0, color: color(variables.brandDarkSuccess).lighten(0.2).rgb().toString() },
      ]
    },
    ".darkYellow": {
      gradient: [
        { x: 0, y: 0, color: variables.brandDarkWarning },
        { x: 1, y: 0, color: color(variables.brandDarkWarning).lighten(0.2).rgb().toString() },
      ]
    },
    ".darkRed": {
      gradient: [
        { x: 0, y: 0, color: variables.brandDarkDanger },
        { x: 1, y: 0, color: color(variables.brandDarkDanger).lighten(0.2).rgb().toString() },
      ]
    },
    "NativeBase.Icon": {
      color: variables.checkboxTickColor
    },
    "NativeBase.IconNB": {
      color: variables.checkboxTickColor
    },
    "NativeBase.Icon": {
      color: "transparent",
      lineHeight: variables.CheckboxIconSize,
      fontSize: variables.CheckboxFontSize
    },
    "NativeBase.IconNB": {
      color: "transparent",
      lineHeight: variables.CheckboxIconSize,
      fontSize: variables.CheckboxFontSize
    },
    ".white": {
      borderWidth: scaleW(1),
      borderColor: '#fff',
      backgroundColor: 'transparent',
      gradient: null,
    },
    gradient: [
      { x: 0, y: 0, color: variables.brandPrimary },
      { x: 1, y: 0, color: color(variables.brandPrimary).lighten(0.2).rgb().toString() },
    ],
    borderRadius: variables.CheckboxRadius,
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: "hidden",
    width: variables.checkboxSize,
    height: variables.checkboxSize,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return checkBoxTheme;
};
