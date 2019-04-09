import React, { PureComponent } from 'react';
import { FormikProps } from 'formik';
import { StyleSheet } from 'react-native';

import {
  Button,
  Container,
  Form,
  Link,
  Spinner,
  Text,
  Toast,
  View,
} from '~/components';
import {
  initialLoginParams,
  ILoginErrors,
  ILoginParams,
  ILoginResponse,
} from '~/interfaces';
import { scaleH } from '~/utils/helpers';
import { lengthValidator, requiredValidator } from '~/utils/validators';
import themeVars, { platform } from '~/constants/themeVars';

interface IProps {
  readonly isFetching: boolean;
  readonly error: boolean;
  readonly data: ILoginResponse;
  readonly keyboardIsShown: boolean;
  readonly keyboardHeight: number;
  readonly onLogin: (params: ILoginParams) => void;
  readonly onForgotPasswordPress: () => void;
}
class Login extends PureComponent<IProps> {
  public componentDidUpdate(prevProps: IProps): void {
    const { error, data, keyboardIsShown } = this.props;
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
    const { isFetching, onLogin, keyboardHeight } = this.props;
    const {
      error,
      data,
    } = this.props;
    return (
      <Container>
        {isFetching && <Spinner color={themeVars.brandPrimary} />}
        <Form
          resetScrollToStart
          extraScrollHeight={platform === 'ios' ? keyboardHeight : 0}
          scrollable
          initialValues={initialLoginParams}
          validate={this.validateParams}
          onSubmit={onLogin}
          items={[
            {
              name: 'login',
              label: 'Логин',
              serverError: error && data.field === 'login' ? data.message : '',
              inputProps: { autoCapitalize: 'none' },
              icon: 'man-user',
            },
            {
              name: 'password',
              label: 'Пароль',
              serverError: error && data.field === 'password' ? data.message : '',
              inputProps: {
                secureTextEntry: true,
              },
              icon: 'lock',
            },
          ]}
          renderFooter={this.renderFooter}
        />
      </Container>
    );
  }
  private readonly renderFooter = ({ handleSubmit }: FormikProps<ILoginParams>) => {
    const {
      onForgotPasswordPress,
    } = this.props;
    return (
      <>
        <View centered style={styles.forgotPassView}>
          <Link onPress={onForgotPasswordPress}>
            <Text>Забыли пароль?</Text>
          </Link>
        </View>
        <Button wide onPress={handleSubmit}>
          <Text>
            Войти
          </Text>
        </Button>
      </>
    );
  }
  private readonly validateParams = (params: ILoginParams) => {
    let errors: ILoginErrors = {};
    errors = requiredValidator(errors, 'login', params.login);
    errors = lengthValidator(errors, 'login', params.login, 3, 55);
    errors = requiredValidator(errors, 'password', params.password);
    errors = lengthValidator(errors, 'password', params.password, 6, 55);
    return errors;
  }
}

const styles = StyleSheet.create({
  forgotPassView: {
    marginBottom: scaleH(33),
  },
});

export default Login;
