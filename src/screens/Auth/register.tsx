import React, { PureComponent } from 'react';
import { forEach } from 'lodash';
import { StyleSheet } from 'react-native';
import { FormikProps } from 'formik';

import {
  Button,
  CheckBox,
  Form,
  Link,
  Spinner,
  Text,
  Toast,
  View,
} from '~/components';
import {
  initialRegisterParams,
  IRegisterErrors,
  IRegisterParams,
  IRegisterResponse,
} from '~/interfaces';
import { passFunction } from '~/utils/helpers';
import { emailValidator, lengthValidator, nameValidator, passwordValidator, requiredValidator } from '~/utils/validators';
import themeVars, { fontMaker, platform } from '~/constants/themeVars';

interface IProps {
  readonly isFetching: boolean;
  readonly error: boolean;
  readonly data: IRegisterResponse;
  readonly keyboardIsShown: boolean;
  readonly keyboardHeight: number;
  readonly onRegister: (params: IRegisterParams) => void;
}

class Register extends PureComponent<IProps> {
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
    const {
      isFetching,
      onRegister,
      error,
      data,
      keyboardHeight,
    } = this.props;
    return (
      <>
        {isFetching && <Spinner color={themeVars.brandPrimary} />}
        <Form
          scrollable
          extraScrollHeight={platform === 'ios' ? keyboardHeight : 0}
          initialValues={initialRegisterParams}
          validate={this.validateParams}
          onSubmit={onRegister}
          items={[
            {
              name: 'f',
              label: 'Фамилия',
              serverError: error && data.field === 'f' ? data.message : '',
              inputProps: { autoCapitalize: 'words' },
            },
            {
              name: 'i',
              label: 'Имя',
              serverError: error && data.field === 'i' ? data.message : '',
              inputProps: { autoCapitalize: 'words' },
            },
            {
              name: 'login',
              label: 'Логин',
              serverError: error && data.field === 'login' ? data.message : '',
              inputProps: { autoCapitalize: 'none' },
            },
            {
              name: 'mail',
              label: 'E-mail',
              serverError: error && data.field === 'mail' ? data.message : '',
              inputProps: { autoCapitalize: 'none' },
            },
            {
              name: 'password',
              label: 'Пароль',
              serverError: error && data.field === 'password' ? data.message : '',
              inputProps: { secureTextEntry: true },
            },
            {
              name: 'confirmpassword',
              label: 'Подтвердите пароль',
              inputProps: {
                secureTextEntry: true,
              },
            },
          ]}
          renderFooter={this.renderFooter}
        />
      </>
    );
  }

  private readonly validateParams = (params: IRegisterParams) => {
    let errors: IRegisterErrors = {};
    errors = nameValidator(errors, 'f', params.f);
    errors = lengthValidator(errors, 'f', params.f, 2, 55);
    errors = nameValidator(errors, 'i', params.i);
    errors = lengthValidator(errors, 'i', params.i, 2, 55);
    errors = emailValidator(errors, 'mail', params.mail);
    errors = lengthValidator(errors, 'password', params.password, 2, 55);
    errors = lengthValidator(errors, 'confirmpassword', params.confirmpassword, 2, 55);
    errors = passwordValidator(errors, params.password, 'confirmpassword', params.confirmpassword);
    forEach(params, (val, key) => {
      const value = `${val}`;
      if (key.indexOf('Focused') === -1) {
        errors = requiredValidator(errors, key, value);
      }
    });
    return errors;
  }
  private readonly renderFooter = (formikProps: FormikProps<IRegisterParams>): React.ReactNode => {
    const {
      values,
      errors,
      touched,
      handleSubmit,
      setFieldValue,
    } = formikProps;
    const {
      is_agree,
    } = values;
    return (
      <>
        <View style={styles.checkboxContainer}>
          <CheckBox checked={!!is_agree} onPress={passFunction(setFieldValue, 'is_agree', !is_agree)} />
          <View style={styles.textContainer}>
            <Text style={styles.checkboxText}>
              Я ознакомился и согласен с требованиями
            </Text>
          </View>
          <Text>{errors.is_agree && touched.is_agree ? errors.is_agree : ''}</Text>
        </View>
        <View padder />
        <Button wide onPress={handleSubmit} disabled={!is_agree}>
          <Text>
            Регистрация
          </Text>
        </Button>
      </>
    );
  }
}

const styles = StyleSheet.create({
  checkboxText: {
    fontSize: 13,
    ...fontMaker({
      weight: '300',
    }),
    color: '#4d4d4d',
  },
  text: {
    fontSize: 13,
    ...fontMaker({
      weight: '300',
    }),
  },
  textContainer: {
    marginLeft: 15,
    paddingRight: 25,
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Register;
