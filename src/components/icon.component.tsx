import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { connectStyle, NativeBase } from 'native-base';

import icoMoonConfig from '~/assets/fonts/icomoon.json';
import { IIconName } from '~/interfaces';

interface IProps extends NativeBase.Icon {
  readonly name: IIconName;
}
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
class IcomoonIcon extends React.PureComponent<IProps> {
  public render(): React.ReactNode {
    return (<Icon {...this.props} />);
  }
}

export default connectStyle('NativeBase.Icon', {})(IcomoonIcon);
