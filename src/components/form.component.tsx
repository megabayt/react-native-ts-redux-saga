import React from 'react';
import { Form as FormNB, NativeBase, View } from 'native-base';
import { Formik, FormikProps } from 'formik';
import { findKey, get, isFunction, keys } from 'lodash';
import { FlatList, InteractionManager, ListRenderItemInfo, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { IIconName } from '~/interfaces';

import Input from './input.component';

interface IItem {
  readonly name: string;
  readonly custom?: () => React.ReactNode;
  readonly label?: string;
  readonly serverError?: string;
  readonly itemProps?: NativeBase.Item;
  readonly labelProps?: NativeBase.Label;
  readonly inputProps?: NativeBase.Input;
  readonly errorProps?: NativeBase.Text;
  readonly icon?: IIconName;
  readonly iconProps?: NativeBase.Icon;
}
interface IProps {
  readonly noPadding?: boolean;
  readonly renderFooter: (formikProps: FormikProps<any>) => React.ReactNode;
  readonly renderHeader?: (formikProps: FormikProps<any>) => React.ReactNode;
  readonly items: ReadonlyArray<IItem>;
  readonly formProps?: NativeBase.Form;
  readonly children?: ReadonlyArray<React.ReactNode> | React.ReactNode;
  readonly scrollable?: boolean;
  readonly nextBtns?: boolean;
  readonly onScroll?: (e: any) => void;
  readonly style?: any;
  readonly extraScrollHeight?: number;
  readonly resetScrollToStart?: boolean;
}
interface IState {
  readonly itemFocused: number | null;
}

const separators = {
  highlight: () => null,
  unhighlight: () => null,
  updateProps: () => null,
};

class Form extends React.PureComponent<IProps & FormikProps<any>, IState> {
  public static readonly defaultProps = {
    nextBtns: true,
  };
  public readonly state: IState = {
    itemFocused: null,
  };
  private inputRefs: any[] = [] // tslint:disable-line
  private listRef: any = null // tslint:disable-line

  public componentDidUpdate(_0: IProps, prevState: IState): void {
    const { resetScrollToStart } = this.props;
    const { itemFocused } = this.state;
    InteractionManager.setDeadline(1000);
    // tslint:disable-next-line
    InteractionManager.runAfterInteractions(() => {
      if (itemFocused !== null && itemFocused >= 0) {
        this.scrollToIndex(itemFocused);
      } else if (!itemFocused && prevState.itemFocused) {
        const scrollTo = prevState.itemFocused || 0;
        this.scrollToIndex(resetScrollToStart ? 0 : scrollTo);
      }
    });
  }
  public render(): React.ReactNode {
    const {
      items,
      scrollable,
      formProps = {},
      values,
      errors,
      touched,
      style,
      noPadding,
    } = this.props;
    return (
      <FormNB {...formProps} noPadding={noPadding}>
        {!scrollable ? this.renderHeader() : null}
        {
          scrollable
            ? (
              <FlatList
                overScrollMode="never"
                keyboardShouldPersistTaps="handled"
                ref={this.handleGetListRef}
                onScroll={this.props.onScroll}
                data={items}
                extraData={{ values, errors, touched }}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                contentContainerStyle={style}
              />
            )
            : <View style={style}>
              {items.map((item, index) => this.renderItem({ item, index, separators }))}
            </View>
        }
        {!scrollable ? this.renderFooter() : null}
      </FormNB>
    );
  }
  public readonly keyExtractor = (item: IItem) => {
    return item.name;
  }
  public readonly renderHeader = () => {
    const { renderHeader } = this.props;
    if (!isFunction(renderHeader)) {
      return null;
    }
    return (
      <>
        {renderHeader({ ...this.props, handleSubmit: this.handleSubmit })}
      </>
    );
  }
  public readonly renderFooter = () => {
    const { itemFocused } = this.state;
    const { renderFooter, extraScrollHeight } = this.props;
    if (!isFunction(renderFooter)) {
      return null;
    }
    return (
      <>
        {renderFooter({ ...this.props, handleSubmit: this.handleSubmit })}
        {itemFocused ? <View style={{ height: extraScrollHeight }} /> : null}
      </>
    );
  }
  public readonly renderItem = ({ item, index }: ListRenderItemInfo<IItem>) => {
    const isLast = index === this.props.items.length - 1;
    const {
      values,
      touched,
      errors,
      handleChange,
      nextBtns,
    } = this.props;
    const {
      name,
      label,
      serverError,
      itemProps = {},
      labelProps = {},
      inputProps = {},
      errorProps = {},
      icon,
      iconProps,
    } = item;
    const value = values[name];
    const error = (errors[name] as string);
    const touch = (touched[name] as boolean);
    const returnKeyType = isLast ? 'done' : 'next';
    return (
      <Input
        key={name}
        itemProps={itemProps}
        labelProps={labelProps}
        iconProps={iconProps}
        errorProps={errorProps}
        touched={!!touch}
        error={error || serverError}
        label={label}
        value={value}
        onChangeText={handleChange(name)}
        icon={icon}
        {...inputProps}
        returnKeyType={nextBtns ? returnKeyType : 'default'}
        getRef={this.handleGetInputRef(index)}
        onSubmitEditing={this.handleSubmitEditing(index)}
        onFocus={this.handleFocus(index)}
        onBlur={this.handleBlur(index)}
        blurOnSubmit={false}
      />
    );
  }
  private readonly handleFocus = (index: number) => (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState(
      {
        itemFocused: index,
      },
      () => {
        const onFocus = get(this.props, `items[${index}].inputProps.onFocus`);
        if (isFunction(onFocus)) {
          onFocus(e);
        }
      },
    );
  }
  private readonly handleBlur = (index: number) => (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const onBlur = get(this.props, `items[${index}].inputProps.onBlur`);
    if (isFunction(onBlur)) {
      onBlur(e);
    }
    const blurred = this.inputRefs.every((item) => {
      const isFocused = get(item, '_root.isFocused') || (() => false);
      return !isFocused();
    });
    if (!blurred) {
      return;
    }
    this.setState({
      itemFocused: null,
    });
  }
  private readonly scrollToIndex = (index: number) => {
    const { items } = this.props;
    if (index >= 0 && index !== items.length && this.listRef) {
      if (index === items.length - 1) {
        this.listRef.scrollToEnd();
        return;
      }
      this.listRef.scrollToIndex({ index });
    }
  }
  private readonly handleSubmitEditing = (i: number) => () => {
    if (this.inputRefs[i + 1]) {
      this.inputRefs[i + 1]._root.focus();
    } else {
      this.handleSubmit();
    }
  }
  private readonly handleGetListRef = (c: any) => {
    this.listRef = c; // tslint:disable-line
  }
  private readonly handleGetInputRef = (i: number) => (c: any) => {
    const getRef = get(this.props, `items[${i}].inputProps.getRef`);
    if (isFunction(getRef)) {
      getRef(c);
    }
    this.inputRefs[i] = c; // tslint:disable-line
  }
  private readonly handleSubmit = () => {
    const { handleSubmit, errors, items } = this.props;
    const firstErrorKey: string = keys(errors) && keys(errors)[0];
    const index = +(findKey(items, { name: firstErrorKey }) || -1);
    if (this.inputRefs[index]) {
      this.inputRefs[index]._root.focus();
    }
    this.scrollToIndex(index);
    if (isFunction(handleSubmit)) {
      handleSubmit();
    }
  }
}

interface IWithFormik extends IProps {
  readonly initialValues: any;
  readonly validate: (params: any) => Partial<any> | void;
  readonly onSubmit: (params: any) => void;
}

const withFormik = ({
  initialValues,
  validate,
  onSubmit,
  ...props
}: IWithFormik) => (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(formikProps: FormikProps<any>) => (
        <Form
          {...props}
          {...formikProps}
        />
      )}
    </Formik>
  );

export default withFormik;
