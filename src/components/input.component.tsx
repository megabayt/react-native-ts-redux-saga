import React from 'react';
import { isFunction } from 'lodash';
import { Input as InputNB, Label, NativeBase, Text } from 'native-base';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { IIconName } from '~/interfaces';

import Item from './item.component';
import Icon from './icon.component';

interface IProps extends NativeBase.Input {
  readonly error?: string;
  readonly serverError?: string;
  readonly label?: string;
  readonly icon?: IIconName;
  readonly touched?: boolean;
  readonly itemProps?: NativeBase.Item;
  readonly labelProps?: NativeBase.Label;
  readonly iconProps?: NativeBase.Icon;
  readonly errorProps?: NativeBase.Text;
}
interface IState {
  readonly focused: boolean;
}
export default class Input extends React.Component<IProps, IState> {
  public readonly state = {
    focused: false,
  };
  public render(): React.ReactNode {
    const { focused } = this.state;
    const {
      value,
      error,
      touched,
      serverError,
      label,
      icon,
      itemProps,
      labelProps,
      iconProps,
      errorProps,
      placeholder,
      ...props
    } = this.props;
    return (
      <>
        <Item
          floatingLabel
          notEmpty={!!value || !!placeholder}
          error={(!!error && !!touched) || !!serverError}
          focused={focused}
          {...itemProps}
        >
          <Label
            focused={focused}
            notEmpty={!!value || !!placeholder}
            {...labelProps}
          >
            {label}
          </Label>
          <InputNB
            {...props}
            placeholder={!focused ? placeholder : ''}
            value={value}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChangeText={this.handleChangeText}
          />
          {icon ? (
            <Icon name={icon} {...iconProps} />
          ) : null}
        </Item>
        {serverError ? (
          <Text error {...errorProps}>{serverError}</Text>
        ) : null}
        {error && touched ? (
          <Text error {...errorProps}>{error}</Text>
        ) : null}
      </>
    );
  }
  private readonly handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onBlur } = this.props;
    if (isFunction(onBlur)) {
      onBlur(e);
    }
    this.setState({ focused: false });
  }
  private readonly handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onFocus } = this.props;
    if (isFunction(onFocus)) {
      onFocus(e);
    }
    this.setState({ focused: true });
  }
  private readonly handleChangeText = (e: string) => {
    const { onChangeText } = this.props;
    if (isFunction(onChangeText)) {
      onChangeText(e);
    }
  }
}
