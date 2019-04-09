import React from 'react';
import { isArray, isObject, map } from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import { connectStyle, Button as ButtonNB, NativeBase } from 'native-base';
import { StyleSheet } from 'react-native';

import { hitSlop } from '~/constants/metrics';

class Button extends React.PureComponent<NativeBase.Button> {
  public render(): React.ReactNode {
    const { style: styleProps, onPress, children, ...props } = this.props;
    const styleFlatten: any = StyleSheet.flatten(styleProps);
    const style: any = { ...styleFlatten, gradient: null };
    let gradient = null;
    if (isArray(styleFlatten.gradient) || isObject(styleFlatten.gradient)) {
      const lgStyle = {
        borderRadius: styleFlatten.borderRadius,
        zIndex: -1,
      };
      gradient = (
        <LinearGradient
          style={[StyleSheet.absoluteFill, lgStyle]}
          colors={map(styleFlatten.gradient, (item: any) => item.color)}
          start={styleFlatten.gradient[0]}
          end={styleFlatten.gradient[1]}
        />
      );
    }
    return (
      <ButtonNB
        {...props}
        hitSlop={hitSlop}
        onPress={onPress}
        style={style}
      >
        {children}
        {gradient}
      </ButtonNB>
    );
  }
}

export default connectStyle('NativeBase.Button', {})(Button);
