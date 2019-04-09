import React, { PureComponent } from 'react';
import { Formik, FormikProps } from 'formik';
import { NavigationInjectedProps } from 'react-navigation';

import {
  Button,
  Form,
  HeaderAuth,
  Link,
  Spinner,
  Text,
  Toast,
  View,
} from '~/components';
import {
  initialForgotPasswordParams,
  IForgotPasswordErrors,
  IForgotPasswordFetch,
  IForgotPasswordParams,
  IForgotPasswordResponse,
  ISettingsState,
} from '~/interfaces';
import { requiredValidator } from '~/utils/validators';
import themeVars from '~/constants/themeVars';

interface IProps {
  readonly isFetching: boolean;
  readonly error: boolean;
  readonly data: IForgotPasswordResponse;
  readonly settings: ISettingsState;
  readonly forgotPasswordFetch: IForgotPasswordFetch;
}
class ForgotPassword extends PureComponent<IProps & NavigationInjectedProps> {
  public static readonly placeholder = (
    <HeaderAuth withoutTabs />
  );
  public componentDidUpdate(prevProps: IProps): void {
    const { error, data, settings } = this.props;
    const { keyboardIsShown } = settings;
    const cond = !prevProps.data.success && this.props.data.success;
    if (cond) {
      Toast.show({
        text: 'Новый пароль отправлен Вам на указанный адрес',
        buttonText: 'ОК',
        type: 'success',
        position: keyboardIsShown ? 'top' : 'bottom',
      });
      this.props.navigation.navigate('AuthSwitch');
    }
    if (!prevProps.error && error && !data.field) {
      Toast.show({
        text: data.message || 'Произошла ошибка',
        buttonText: 'ОК',
        type: 'danger',
        position: keyboardIsShown ? 'top' : 'bottom',
      });
    }
  }
  public render(): React.ReactNode {
    const {
      isFetching,
      error,
      data,
    } = this.props;
    return (
      <>
        <HeaderAuth withoutTabs />
        {isFetching && <Spinner color={themeVars.brandPrimary} />}
        <Form
          initialValues={initialForgotPasswordParams}
          validate={this.validateParams}
          onSubmit={this.handleSubmit}
          items={[
            {
              name: 'mail',
              label: 'E-mail',
              serverError: error && data.field === 'mail' ? data.message : '',
              inputProps: {
                autoCapitalize: 'none',
              },
            },
          ]}
          renderFooter={this.renderFooter}
        />
      </>
    );
  }
  private readonly handleBackPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Auth');
  }
  private readonly handleSubmit = (params: IForgotPasswordParams) => {
    const { forgotPasswordFetch } = this.props;
    forgotPasswordFetch(params);
  }
  private readonly validateParams = (params: IForgotPasswordParams) => {
    let errors: IForgotPasswordErrors = {};
    errors = requiredValidator(errors, 'mail', params.mail);
    return errors;
  }
  private readonly renderFooter = (formikProps: FormikProps<IForgotPasswordParams>): React.ReactNode => {
    const {
      handleSubmit,
    } = formikProps;
    return (
      <>
        <View padder />
        <Button wide onPress={handleSubmit}>
          <Text>
            Отправить
          </Text>
        </Button>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <View padder />
          <Link onPress={this.handleBackPress}>
            <Text>Я знаю пароль. Вход</Text>
          </Link>
        </View>
      </>
    );
  }
}

export default ForgotPassword;
