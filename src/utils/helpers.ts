import { Platform, StyleSheet } from 'react-native';
import * as _ from 'lodash';
import moment from 'moment';
import { FormikProps } from 'formik';

import { deviceHeight, deviceWidth } from '~/constants/metrics';

const platform = Platform.OS;

export function passFunction(fn: any, ...params: any): () => any {
  return () => {
    fn(...params);
  };
}

const fontSizesIOS: ReadonlyArray<any> = [
  {
    maxScreenSize: 320, // iPhone 5
    scaler: 7 / 8,
    sizes: {
      37: 35,
      22: 20,
      20: 18,
      18: 17,
      17: 16,
      16: 15,
      14: 13,
      13: 12,
      12: 11,
      11: 10,
      10: 9,
      9: 8,
      8: 7,
    },
  },
  {
    maxScreenSize: 375, // iPhone 6|7|8|6s
    scaler: 1,
    sizes: {
      37: 37,
      22: 22,
      20: 20,
      18: 18,
      17: 17,
      16: 16,
      14: 14,
      13: 13,
      12: 12,
      11: 11,
      10: 10,
      9: 9,
      8: 8,
    },
  },
  {
    maxScreenSize: 414, // iPhone 6s|7|8 Plus
    scaler: 10 / 8,
    sizes: {
      37: 40,
      22: 25,
      20: 23,
      18: 21,
      17: 20,
      16: 19,
      14: 17,
      13: 16,
      12: 15,
      11: 13,
      10: 12,
      9: 11,
      8: 10,
    },
  },
];
const fontSizesAnd: ReadonlyArray<any> = [
  {
    maxScreenSize: 320, // android 6 (480x840, 240dpi)
    scaler: 6 / 7,
    sizes: {
      37: 33,
      22: 18,
      20: 17,
      18: 15,
      17: 14,
      16: 13,
      14: 11,
      13: 11,
      12: 10,
      11: 9,
      10: 8,
      9: 7,
      8: 6,
    },
  },
  {
    maxScreenSize: 390, // android 6 (768x1280, 320dpi)
    scaler: 7 / 8,
    sizes: {
      37: 32,
      22: 20,
      20: 19,
      18: 17,
      17: 16,
      16: 15,
      14: 14,
      13: 12,
      12: 9,
      11: 8,
      10: 7,
      9: 7,
      8: 6,
    },
  },
  {
    maxScreenSize: 414, // android 6 (720x1280, 240dpi)
    scaler: 10 / 8,
    sizes: {
      37: 40,
      22: 25,
      20: 23,
      18: 21,
      17: 20,
      16: 19,
      14: 17,
      13: 16,
      12: 15,
      11: 13,
      10: 12,
      9: 11,
      8: 10,
    },
  },
];

const iPhone8Width: number = 375;
const iPhone8Height: number = 667;
function scale(val: number, scaler: number): number {
  let newVal: number = Math.floor(scaler * val);
  if (Math.abs(newVal) < StyleSheet.hairlineWidth) {
    if (newVal >= 0) {
      newVal = StyleSheet.hairlineWidth;
    } else {
      newVal = -StyleSheet.hairlineWidth;
    }
  }
  return newVal;
}
export function scaleW(val: number): number {
  return scale(val, deviceWidth / iPhone8Width);
}
export function scaleH(val: number): number {
  return scale(val, deviceHeight / iPhone8Height);
}
export function scaleFont(size: number): number {
  const fontSizes = platform === 'ios' ? fontSizesIOS : fontSizesAnd;
  let sizesObj = _.find(fontSizes, item => item.maxScreenSize >= deviceWidth);
  if (!sizesObj) {
    sizesObj = fontSizes[fontSizes.length - 1];
  }
  if (sizesObj && sizesObj.sizes && sizesObj.sizes[size]) {
    return sizesObj.sizes[size];
  }
  return size * sizesObj.scaler;
}

export const getLastYearMonths = (): ReadonlyArray<{
  readonly label: string;
  readonly value: string;
}> => {
  const prevYear = moment().subtract(1, 'y').year();
  const currYear = moment().year();

  const preparePicker = (year: number) => (v: number) => {
    let month = moment().set('month', v).format('MMMM');
    month = month.charAt(0).toUpperCase() + month.slice(1);
    const value = JSON.stringify({
      year,
      month: v + 1,
    });
    return {
      label: `${month} ${year}`,
      value,
    };
  };
  const prevYearMonths = _.range(moment().month() + 1, 14)
    .map(preparePicker(prevYear));
  const currYearMonths = _.range(0, moment().month() + 1)
    .map(preparePicker(currYear));

  const months = _.merge(prevYearMonths.reverse(), currYearMonths.reverse());
  return months;
};

export const stub = () => null;
export const formikPropsStub: FormikProps<any> = {
  values: {
  },
  errors: {},
  touched: {},
  isSubmitting: false,
  isValidating: false,
  submitCount: 0,
  dirty: false,
  isValid: false,
  initialValues: {
  },
  validateOnChange: true,
  validateOnBlur: true,
  setStatus: () => null,
  setError: () => null,
  setErrors: () => null,
  setSubmitting: () => null,
  setTouched: () => null,
  setValues: () => null,
  setFieldValue: () => null,
  setFieldError: () => null,
  setFieldTouched: () => null,
  validateForm: async () => ({}),
  validateField: () => null,
  resetForm: () => null,
  submitForm: () => null,
  setFormikState: () => null,
  handleSubmit: () => null,
  handleReset: () => null,
  handleBlur: () => { stub(); },
  handleChange: () => { stub(); },
  registerField: () => null,
  unregisterField: () => null,
};
