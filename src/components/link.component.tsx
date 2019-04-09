import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { connectStyle } from 'native-base';
import { isFunction } from 'lodash';

import { hitSlop } from '~/constants/metrics';

interface IProps {
  readonly href?: string;
  readonly to?: string;
  readonly children?: any;
  readonly style?: any;
  readonly onPress?: () => void;
}

class LinkComponent extends React.PureComponent<IProps> {
  public render(): React.ReactNode {
    const { children } = this.props;
    return (
      <TouchableOpacity hitSlop={hitSlop} {...this.props} onPress={this.handlePress}>
        {children ? children : null}
      </TouchableOpacity>
    );
  }
  private readonly handlePress = () => {
    const { onPress } = this.props;
    const href = this.props.href || this.props.to || '';
    if (!onPress && href) {
      Linking
        .openURL(href)
        .catch(() => {
          Linking.openURL(`https://${href}`).catch(() => {
            Linking.openURL(`http://${href}`).catch((e) => {
              console.warn(e); // tslint:disable-line
            });
          });
        });
      return;
    }
    if (onPress && isFunction(onPress)) {
      onPress();
    }
  }
}
export default connectStyle('NativeBase.Link', {})(LinkComponent);
