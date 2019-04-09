import React, { PureComponent } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Keyboard, StyleSheet } from 'react-native';

import {
  HeaderAuth,
  Tab,
  Tabs,
} from '~/components';
import {
  ILoginFetch,
  ILoginParams,
  ILoginState,
  ILogout,
  IRegisterFetch,
  IRegisterParams,
  IRegisterState,
} from '~/interfaces';
import { scaleH } from '~/utils/helpers';
import themeVars from '~/constants/themeVars';

import Login from './login';
import Register from './register';

interface IProps {
  readonly login: ILoginState;
  readonly register: IRegisterState;
  readonly registerFetch: IRegisterFetch;
  readonly loginFetch: ILoginFetch;
  readonly logout: ILogout;
}
interface IState {
  readonly activeTab: number;
}
class AuthScreen extends PureComponent<IProps & NavigationInjectedProps, IState> {
  public static readonly placeholder = (
    <HeaderAuth />
  );
  public readonly state = {
    activeTab: 0,
  };
  public render(): React.ReactNode {
    const { login, register } = this.props;
    return (
      <>
        <HeaderAuth />
        <Tabs
          onChangeTab={this.handleChangeTab}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        >
          <Tab heading="Вход">
            <Login
              {...login}
              onLogin={this.handleLogin}
              onEsiaLoginPress={this.handleEsiaLoginPress}
              onForgotPasswordPress={this.handleForgotPasswordPress}
            />
          </Tab>
          <Tab heading="Регистрация">
            <Register
              {...register}
              onRegister={this.handleRegister}
            />
          </Tab>
        </Tabs>
      </>
    );
  }
  private readonly handleChangeTab = ({ i }: { readonly i: number }) => {
    Keyboard.dismiss();
    this.setState({ activeTab: i });
  }
  private readonly handleForgotPasswordPress = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgotPassword');
  }
  private readonly handleEsiaLoginPress = () => {
    const { navigation } = this.props;
    navigation.navigate('EsiaAuth');
  }
  private readonly handleLogin = (params: ILoginParams): void => {
    const { loginFetch } = this.props;
    loginFetch(params);
  }
  private readonly handleRegister = (params: IRegisterParams) => {
    const { registerFetch } = this.props;
    registerFetch(params);
  }
}

const styles = StyleSheet.create({
  tabBarUnderlineStyle: {
    height: scaleH(3),
  },
  noShadow: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: themeVars.brandGray02,
  },
});

export default AuthScreen;
