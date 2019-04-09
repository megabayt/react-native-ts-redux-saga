import { createSwitchNavigator } from 'react-navigation';

import AuthScreenContainer from '~/containers/authScreen.container';
import ForgotPasswordScreenContainer from '~/containers/forgotPasswordScreen.container';

const authSwitchNavigator = createSwitchNavigator({
  Auth: AuthScreenContainer,
  ForgotPassword: ForgotPasswordScreenContainer,
},                                                {
  initialRouteName: 'Auth',
});

export default authSwitchNavigator;
