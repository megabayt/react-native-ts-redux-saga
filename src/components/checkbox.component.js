import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Platform, StyleSheet } from "react-native";
import IconNB from "react-native-vector-icons/Ionicons";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "~/../node_modules/native-base/src/utils/mapPropsToStyleNames";
import computeProps from '~/../node_modules/native-base/src/utils/computeProps';
import _ from "lodash";
import LinearGradient from "react-native-linear-gradient";

import { View } from 'native-base';

class CheckBox extends Component {
  static contextTypes = {
    theme: PropTypes.object,
  };

  getInitialStyle(variables) {
    return {
      checkStyle: {
        borderColor: this.props.color ? this.props.color : variables.checkboxBgColor,
        backgroundColor:
          this.props.checked === true
            ? this.props.color ? this.props.color : variables.checkboxBgColor
            : "transparent",
      },
    };
  }

  prepareRootProps(variables) {
    const defaultProps = {
      style: this.getInitialStyle(variables).checkStyle,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    const variables = this.context.theme ? this.context.theme["@@shoutem.theme/themeStyle"].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;
    const { style: styleProps, onPress, children, ...props } = this.props;
    const styleFlatten: any = StyleSheet.flatten(styleProps);
    const style: any = { ...styleFlatten, gradient: null };
    let gradient = null;
    const lgStyle = {
      borderRadius: styleFlatten.borderRadius,
      zIndex: -1,
    };
    if (_.isArray(styleFlatten.gradient) || _.isObject(styleFlatten.gradient)) {
      gradient = (
        <LinearGradient
          style={[StyleSheet.absoluteFill, lgStyle]}
          colors={_.map(styleFlatten.gradient, (item: any) => item.color)}
          start={styleFlatten.gradient[0]}
          end={styleFlatten.gradient[1]}
        />
      );
    }
    return (
      <TouchableOpacity ref={c => (this._root = c)} {...this.prepareRootProps(variables)}>
        <IconNB
          style={{
            color: this.props.checked === true ? variables.checkboxTickColor : "transparent",
            fontSize: variables.CheckboxFontSize,
            textShadowRadius: 0
          }}
          name={platform === "ios" && platformStyle !== "material" ? "ios-checkmark" : "md-checkmark"}
        />
        <View border style={{
          position: 'absolute',
          top: variables.CheckboxBorderWidth,
          left: variables.CheckboxBorderWidth,
          right: variables.CheckboxBorderWidth,
          bottom: variables.CheckboxBorderWidth,
          backgroundColor: variables.checkboxTickColor,
          opacity: this.props.checked ? 0 : 1,
        }} />
        {gradient}
      </TouchableOpacity>
    );
  }
}

CheckBox.propTypes = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  checked: PropTypes.bool,
  onPress: PropTypes.func,
};

export default connectStyle("NativeBase.CheckBox", {}, mapPropsToStyleNames)(CheckBox);