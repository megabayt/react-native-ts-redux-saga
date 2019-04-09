import React from 'react';
import {
  Animated,
  LayoutAnimation,
  StatusBar,
  StyleSheet,
  UIManager,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationEvents } from 'react-navigation';
import { View } from 'native-base';

import { bgHeader, logo } from '~/assets/images';
import { deviceWidth } from '~/constants/metrics';
import { scaleFont, scaleW } from '~/utils/helpers';
import themeVars, { fontMaker, platform } from '~/constants/themeVars';

interface IProps {
  readonly withoutTabs?: boolean;
  readonly keyboardIsShown?: boolean;
}
interface IState {
  readonly flexDirection: 'column' | 'row';
  readonly justifyContent: 'flex-start' | 'center';
}

const changedContent = () => {
  platform === 'android' ? StatusBar.setBackgroundColor('transparent')
    : StatusBar.setBarStyle('dark-content');
};
class HeaderAuth extends React.PureComponent<IProps, IState> {
  public readonly state: IState = {
    flexDirection: 'column',
    justifyContent: 'center',
  };
  private readonly headerSwitch = new Animated.Value(1);
  public componentDidMount(): void {
    if (platform === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  public componentDidUpdate(prevProps: IProps): void {
    const { keyboardIsShown: kis } = this.props;
    if (prevProps.keyboardIsShown !== kis) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({
        flexDirection: kis ? 'row' : 'column',
        justifyContent: kis ? 'flex-start' : 'center',
      });
      Animated.timing(this.headerSwitch, { toValue: kis ? 0 : 1 }).start();
    }
  }

  public render(): React.ReactNode {
    const { justifyContent, flexDirection } = this.state;
    const { withoutTabs } = this.props;
    const headerHeight = this.headerSwitch.interpolate({
      inputRange: [0, 1],
      outputRange: [headerHeightSmall, headerHeightBig],
    });
    const bgTop = this.headerSwitch.interpolate({
      inputRange: [0, 1],
      outputRange: [bgTopSmall, bgTopBig],
    });
    const headerPadding = this.headerSwitch.interpolate({
      inputRange: [0, 1],
      outputRange: [getStatusBarHeight(), 0],
    });
    const logoHeight = this.headerSwitch.interpolate({
      inputRange: [0, 1],
      outputRange: [(logo.width * 32) / logo.height, scaleW(75)],
    });
    const logoWidth = this.headerSwitch.interpolate({
      inputRange: [0, 1],
      outputRange: [32, logo.width * (scaleW(75)) / logo.height],
    });
    const fontSize = this.headerSwitch.interpolate({
      inputRange: [0, 1],
      outputRange: [scaleFont(24), scaleFont(33)],
    });

    return (
      <>
        <NavigationEvents
          onWillFocus={changedContent}
        />
        <Animated.View
          style={[
            styles.headerWrapper,
            withoutTabs
              ? styles.headerWithoutTabs
              : styles.header,
            { justifyContent, height: headerHeight, paddingTop: headerPadding },
          ]}
        >
          <Animated.Image
            source={bgHeader.source}
            style={[styles.bg, { top: bgTop }]}
          />
          <Animated.Image
            source={logo.source}
            style={[styles.logo, { width: logoWidth, height: logoHeight }]}
            resizeMode="contain"
          />
          <View style={[styles.logoTextWrapper, { flexDirection }]}>
            <Animated.Text style={[styles.logoText, { fontSize }]}>ЛОГО</Animated.Text>
          </View>
        </Animated.View>
      </>
    );
  }
}

const headerHeightBig = bgHeader.height * deviceWidth / bgHeader.width;
const headerHeightSmall = scaleW(50) + getStatusBarHeight();
const bgTopBig = -bgHeader.height + headerHeightBig;
const bgTopSmall = -bgHeader.height + scaleW(50) + getStatusBarHeight();

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
  },
  headerWithoutTabs: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: scaleW(0), height: -2 },
    shadowOpacity: scaleW(1),
    shadowRadius: scaleW(10),
    elevation: 3,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    zIndex: 3,
    width: deviceWidth,
  },
  logoTextWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logoText: {
    fontSize: scaleFont(33),
    lineHeight: scaleFont(32),
    marginRight: scaleW(5),
    color: themeVars.brandPrimary,
    ...fontMaker({
      family: 'MullerNarrow',
      weight: '700',
    }),
  },
  logo: {
    height: scaleW(75),
    width: logo.width * (scaleW(75)) / logo.height,
    marginHorizontal: scaleW(10),
  },
});

export default HeaderAuth;
