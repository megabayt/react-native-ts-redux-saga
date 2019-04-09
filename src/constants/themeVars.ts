// @flow

import { get } from 'lodash';
import color from 'color';
import { PixelRatio, Platform } from 'react-native';

import { scaleFont, scaleW } from '~/utils/helpers';

import { deviceHeight, deviceWidth } from './metrics';

export const platform = Platform.OS;
export const platformStyle = 'material';
export const isIphoneX =
platform === 'ios' && (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896);

const font = {
  'SF-Pro-Display': {
    family: platform === 'ios' ? 'SF Pro Display' : 'SF-Pro-Display',
    weights: {
      Light: '300',
      Regular: '400',
      Semibold: '500',
      Bold: '600',
      Black: '900',
    },
  },
  MullerNarrow: {
    family: platform === 'ios' ? 'Muller Narrow' : 'MullerNarrow',
    weights: {
      ExtraBold: '700',
    },
  },
};
type IWeight = '300' | '400' | '500' | '600' | '700' | '900';
type IFontFamily = 'SF-Pro-Display' | 'MullerNarrow';
interface IFontMaker {
  readonly weight?: IWeight;
  readonly family?: IFontFamily;
}
export const fontMaker = (options: IFontMaker = {}) => {
  let weight: any = options.weight || '400';
  let family = options.family || 'SF-Pro-Display';

  switch (weight) {
    case '300':
      weight = 'Light';
      break;
    case '400':
      weight = 'Regular';
      break;
    case '500':
      weight = 'Semibold';
      break;
    case '600':
      weight = 'Bold';
      break;
    case '700':
      weight = 'ExtraBold';
      break;
    case '900':
      weight = 'Black';
      break;
    default:
      weight = 'Regular';
      break;
  }

  const fontByFamily = get(font, family) || {};

  const { weights } = fontByFamily;

  if (platform === 'android') {
    if (weight !== 'Regular') {
      const exists = !!get(weights, weight);
      weight = exists ? weight : '';
    } else {
      weight = '';
    }

    family = (family + (weight.length ? `-${weight}` : '') as IFontFamily);
  } else {
    family = (fontByFamily.family as IFontFamily);
  }
  weight = get(weights, weight) || get(weights, 'Regular');

  const result: any = {
    fontFamily: family,
  };
  if (weight && platform !== 'android') {
    result.fontWeight = weight;  //tslint:disable-line
  }
  return result;
};

function toRGBA(rgb: string, alpha: number): string {
  let rgba = rgb.replace('rgb', 'rgba');
  rgba = `${rgba.slice(0, -1)}, ${alpha})`;
  return rgba;
}

export default {
  platformStyle,
  platform,

  // Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: '#d3d3d3',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: false,

  // Badge
  get badgeBg(): any {
    return this.brandDanger;
  },
  badgeColor: '#fff',
  badgePadding: scaleW(0),

  // Button
  btnFontFamily: platform === 'ios' ? 'SF Pro Display' : 'SF-Pro-Display',
  btnDisabledBg: '#b5b5b5',
  buttonPadding: scaleW(6),
  get btnPrimaryBg(): any {
    return this.brandPrimary;
  },
  get btnPrimaryColor(): any {
    return this.inverseTextColor;
  },
  get btnInfoBg(): any {
    return this.brandInfo;
  },
  get btnInfoColor(): any {
    return this.inverseTextColor;
  },
  get btnSuccessBg(): any {
    return this.brandSuccess;
  },
  get btnSuccessColor(): any {
    return this.inverseTextColor;
  },
  get btnDangerBg(): any {
    return this.brandDanger;
  },
  get btnDangerColor(): any {
    return this.inverseTextColor;
  },
  get btnWarningBg(): any {
    return this.brandWarning;
  },
  get btnWarningColor(): any {
    return this.inverseTextColor;
  },
  get btnTextSize(): any {
    return this.fontSizeBase - 1;
  },
  get btnTextSizeLarge(): any {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall(): any {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge(): any {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge(): any {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall(): any {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: scaleW(10),

  // CheckBox
  CheckboxRadius: scaleW(3),
  CheckboxBorderWidth: scaleW(2),
  CheckboxFontSize: scaleFont(17),
  get checkboxBgColor(): any {
    return this.brandPrimary;
  },
  checkboxSize: scaleW(20),
  checkboxTickColor: '#fff',

  // Color
  brandLightPrimary: '#7DC0FF',
  get brandLightPrimary06(): any {
    return toRGBA(color(this.brandLightPrimary).rgb().toString(), 0.6);
  },
  get brandLightPrimary04(): any {
    return toRGBA(color(this.brandLightPrimary).rgb().toString(), 0.4);
  },
  get brandLightPrimary02(): any {
    return toRGBA(color(this.brandLightPrimary).rgb().toString(), 0.2);
  },
  get brandLightInfo(): any {
    return this.brandLightPrimary;
  },
  brandLightSuccess: '#AAFF44',
  get brandLightSuccess06(): any {
    return toRGBA(color(this.brandLightSuccess).rgb().toString(), 0.6);
  },
  get brandLightSuccess04(): any {
    return toRGBA(color(this.brandLightSuccess).rgb().toString(), 0.4);
  },
  get brandLightSuccess02(): any {
    return toRGBA(color(this.brandLightSuccess).rgb().toString(), 0.2);
  },
  brandLightDanger: '#FF9B9B',
  get brandLightDanger06(): any {
    return toRGBA(color(this.brandLightDanger).rgb().toString(), 0.6);
  },
  get brandLightDanger04(): any {
    return toRGBA(color(this.brandLightDanger).rgb().toString(), 0.4);
  },
  get brandLightDanger02(): any {
    return toRGBA(color(this.brandLightDanger).rgb().toString(), 0.2);
  },
  brandLightWarning: '#FEA26E',
  get brandLightWarning06(): any {
    return toRGBA(color(this.brandLightWarning).rgb().toString(), 0.6);
  },
  get brandLightWarning04(): any {
    return toRGBA(color(this.brandLightWarning).rgb().toString(), 0.4);
  },
  get brandLightWarning02(): any {
    return toRGBA(color(this.brandLightWarning).rgb().toString(), 0.2);
  },
  brandPrimary: '#1677D2',
  get brandPrimary06(): any {
    return toRGBA(color(this.brandPrimary).rgb().toString(), 0.6);
  },
  get brandPrimary04(): any {
    return toRGBA(color(this.brandPrimary).rgb().toString(), 0.4);
  },
  get brandPrimary02(): any {
    return toRGBA(color(this.brandPrimary).rgb().toString(), 0.2);
  },
  get brandInfo(): any {
    return this.brandPrimary;
  },
  brandSuccess: '#46A724',
  get brandSuccess06(): any {
    return toRGBA(color(this.brandSuccess).rgb().toString(), 0.6);
  },
  get brandSuccess04(): any {
    return toRGBA(color(this.brandSuccess).rgb().toString(), 0.4);
  },
  get brandSuccess02(): any {
    return toRGBA(color(this.brandSuccess).rgb().toString(), 0.2);
  },
  brandDanger: '#F4685F',
  get brandDanger06(): any {
    return toRGBA(color(this.brandDanger).rgb().toString(), 0.6);
  },
  get brandDanger04(): any {
    return toRGBA(color(this.brandDanger).rgb().toString(), 0.4);
  },
  get brandDanger02(): any {
    return toRGBA(color(this.brandDanger).rgb().toString(), 0.2);
  },
  brandWarning: '#F19F00',
  get brandWarning06(): any {
    return toRGBA(color(this.brandWarning).rgb().toString(), 0.6);
  },
  get brandWarning04(): any {
    return toRGBA(color(this.brandWarning).rgb().toString(), 0.4);
  },
  get brandWarning02(): any {
    return toRGBA(color(this.brandWarning).rgb().toString(), 0.2);
  },
  brandDarkPrimary: '#055097',
  get brandDarkPrimary06(): any {
    return toRGBA(color(this.brandDarkPrimary).rgb().toString(), 0.6);
  },
  get brandDarkPrimary04(): any {
    return toRGBA(color(this.brandDarkPrimary).rgb().toString(), 0.4);
  },
  get brandDarkPrimary02(): any {
    return toRGBA(color(this.brandDarkPrimary).rgb().toString(), 0.2);
  },
  get brandDarkInfo(): any {
    return this.brandDarkPrimary;
  },
  brandDarkSuccess: '#338800',
  get brandDarkSuccess06(): any {
    return toRGBA(color(this.brandDarkSuccess).rgb().toString(), 0.6);
  },
  get brandDarkSuccess04(): any {
    return toRGBA(color(this.brandDarkSuccess).rgb().toString(), 0.4);
  },
  get brandDarkSuccess02(): any {
    return toRGBA(color(this.brandDarkSuccess).rgb().toString(), 0.2);
  },
  brandDarkDanger: '#BC0B00',
  get brandDarkDanger06(): any {
    return toRGBA(color(this.brandDarkDanger).rgb().toString(), 0.6);
  },
  get brandDarkDanger04(): any {
    return toRGBA(color(this.brandDarkDanger).rgb().toString(), 0.4);
  },
  get brandDarkDanger02(): any {
    return toRGBA(color(this.brandDarkDanger).rgb().toString(), 0.2);
  },
  brandDarkWarning: '#D66700',
  get brandDarkWarning06(): any {
    return toRGBA(color(this.brandDarkWarning).rgb().toString(), 0.6);
  },
  get brandDarkWarning04(): any {
    return toRGBA(color(this.brandDarkWarning).rgb().toString(), 0.4);
  },
  get brandDarkWarning02(): any {
    return toRGBA(color(this.brandDarkWarning).rgb().toString(), 0.2);
  },
  brandDark: '#333333',
  get brandDark06(): any {
    return toRGBA(color(this.brandDark).rgb().toString(), 0.6);
  },
  get brandDark04(): any {
    return toRGBA(color(this.brandDark).rgb().toString(), 0.4);
  },
  get brandDark02(): any {
    return toRGBA(color(this.brandDark).rgb().toString(), 0.2);
  },
  brandGray: '#878787',
  get brandGray06(): any {
    return toRGBA(color(this.brandGray).rgb().toString(), 0.6);
  },
  get brandGray04(): any {
    return toRGBA(color(this.brandGray).rgb().toString(), 0.4);
  },
  get brandGray02(): any {
    return toRGBA(color(this.brandGray).rgb().toString(), 0.2);
  },
  brandLight: '#f4f4f4',
  get brandLight06(): any {
    return toRGBA(color(this.brandLight).rgb().toString(), 0.6);
  },
  get brandLight04(): any {
    return toRGBA(color(this.brandLight).rgb().toString(), 0.4);
  },
  get brandLight02(): any {
    return toRGBA(color(this.brandLight).rgb().toString(), 0.2);
  },

  // Container
  containerBgColor: '#fff',

  // Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // Font
  DefaultFontSize: scaleFont(16),
  fontFamily: platform === 'ios' ? 'SF Pro Display' : 'SF-Pro-Display',
  fontSizeBase: scaleFont(15),
  get fontSizeH1(): any {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2(): any {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3(): any {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: scaleW(55),
  footerDefaultBg: '#fff',
  footerPaddingBottom: scaleW(0),

  // FooterTab
  get tabBarTextColor(): any {
    return this.brandGray;
  },
  tabBarTextSize: scaleW(11),
  activeTab: '#fff',
  get sTabBarActiveTextColor(): any {
    return this.brandPrimary;
  },
  get tabBarActiveTextColor(): any {
    return this.brandPrimary;
  },
  get tabActiveBgColor(): any {
    return this.brandPrimary;
  },

  // Header
  toolbarBtnColor: '#fff',
  toolbarDefaultBg: '#fff',
  toolbarHeight: scaleW(56),
  toolbarSearchIconSize: scaleW(23),
  toolbarInputColor: '#fff',
  searchBarHeight: scaleW(30),
  searchBarInputHeight: scaleW(40),
  toolbarBtnTextColor: '#fff',
  get toolbarDefaultBorder(): any {
    return this.brandPrimary;
  },
  iosStatusbar: 'light-content',
  get statusBarColor(): any {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader(): any {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: scaleFont(28),
  iconHeaderSize: scaleW(24),

  // InputGroup
  inputFontSize: platform === 'ios' ? scaleFont(15) : scaleFont(14),
  inputBorderColor: '#cacaca',
  get inputBorderColorActive(): any {
    return this.brandPrimary;
  },
  get inputSuccessBorderColor(): any {
    return this.brandSuccess;
  },
  get inputErrorBorderColor(): any {
    return this.brandDanger;
  },
  inputHeightBase: scaleW(50),
  get inputColor(): any {
    return this.brandDark;
  },
  get inputColorPlaceholder(): any {
    return this.brandGray;
  },

  // Line Height
  btnLineHeight: scaleW(19),
  lineHeightH1: scaleW(32),
  lineHeightH2: scaleW(27),
  lineHeightH3: scaleW(22),
  lineHeight: scaleW(24),

  // List
  listBg: 'transparent',
  get listBorderColor(): any {
    return this.brandGray;
  },
  get listDividerBg(): any {
    return this.brandGray;
  },
  get listBtnUnderlayColor(): any {
    return this.brandGray;
  },
  listItemPadding: scaleW(12),
  get listNoteColor(): any {
    return this.brandGray;
  },
  listNoteSize: scaleW(13),
  get listItemSelected(): any {
    return this.brandPrimary;
  },

  // Progress Bar
  get defaultProgressColor(): any {
    return this.brandDanger;
  },
  get inverseProgressColor(): any {
    return this.brandDark;
  },

  // Radio Button
  radioBtnSize: scaleW(23),
  get radioSelectedColorAndroid(): any {
    return this.brandPrimary;
  },
  radioBtnLineHeight: scaleW(24),
  get radioColor(): any {
    return this.brandPrimary;
  },

  // Segment
  get segmentBackgroundColor(): any {
    return this.brandPrimary;
  },
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  get segmentActiveTextColor(): any {
    return this.brandPrimary;
  },
  segmentBorderColor: '#fff',
  get segmentBorderColorMain(): any {
    return this.brandPrimary;
  },

  // Spinner
  get defaultSpinnerColor(): any {
    return this.brandSuccess;
  },
  get inverseSpinnerColor(): any {
    return this.brandDark;
  },

  // Tab
  tabDefaultBg: '#fff',
  get topTabBarTextColor(): any {
    return this.brandPrimary06;
  },
  get topTabBarActiveTextColor(): any {
    return this.brandPrimary;
  },
  topTabBarBorderColor: '#fff',
  get topTabBarActiveBorderColor(): any {
    return this.topTabBarActiveTextColor;
  },

  // Tabs
  tabBgColor: '#fff',
  tabFontSize: scaleFont(20),

  // Text
  get textColor(): any {
    return this.brandDark;
  },
  inverseTextColor: '#fff',
  noteFontSize: scaleFont(14),
  get defaultTextColor(): any {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === 'ios' ? 'SF Pro Display' : 'SF-Pro-Display',
  titleFontSize: scaleFont(19),
  subTitleFontSize: scaleFont(14),
  subtitleColor: '#FFF',
  titleFontColor: '#FFF',

  // Other
  borderRadiusBase: 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: scaleW(10),
  get dropdownLinkColor(): any {
    return this.brandGray;
  },
  inputLineHeight: scaleW(24),
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: scaleW(24),
      leftInset: scaleW(0),
      rightInset: scaleW(0),
      bottomInset: scaleW(34),
    },
    landscape: {
      topInset: scaleW(0),
      leftInset: scaleW(44),
      rightInset: scaleW(44),
      bottomInset: scaleW(21),
    },
  },
};
