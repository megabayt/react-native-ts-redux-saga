import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreenContainer from '~/containers/homeScreen.container';

import AuthSwitchNavigator from './authSwitch.routes';

const appNavigator = createSwitchNavigator(
  {
    AuthSwitch: AuthSwitchNavigator,
    MainSwitch: HomeScreenContainer,
  },
  {
    initialRouteName: 'AuthSwitch',
    resetOnBlur: true,
  });

export default createAppContainer(
  appNavigator,
);
