
declare module 'native-base' {
  import * as React from 'react';
  import * as ReactNative from 'react-native';

  import { HOC } from '~/interfaces';

  namespace NativeBase {
   interface Container {
     readonly centered?: boolean;
     readonly paddingStatusBar?: boolean;
   }
   interface Content {
     readonly extraScrollHeight?: number;
     readonly extraHeight?: number;
     readonly enableOnAndroid?: boolean;
   }
   interface Text {
     readonly error?: boolean;
     readonly blockLabel?: boolean;
     readonly blockValue?: boolean;
     readonly blockValueBold?: boolean;
     readonly month?: boolean;
     readonly bold?: boolean;
     readonly light?: boolean;
   }
   interface Button {
     readonly center?: boolean;
     readonly wide?: boolean;
     readonly wide70?: boolean;
     readonly wide90?: boolean;
     readonly width100?: boolean;
     readonly green?: boolean;
     readonly greenBorder?: boolean;
     readonly red?: boolean;
     readonly redBorder?: boolean;
     readonly redRight?: boolean;
   }
   interface Image {
     readonly logo?: boolean;
   }
    interface Item {
      readonly focused?: boolean;
      readonly notEmpty?: boolean;
      readonly white?: boolean;
    }
    interface Label {
      readonly focused?: boolean;
      readonly notEmpty?: boolean;
      readonly small?: boolean;
    }
    interface View {
      readonly centered?: boolean;
      readonly blockHeader?: boolean;
      readonly blockHeaderItem?: boolean;
      readonly hr?: boolean;
      readonly hrSmall?: boolean;
      readonly hrMedium?: boolean;
      readonly hrBlock?: boolean;
      readonly blockWithLabel?: boolean;
      readonly padderCards?: boolean;
      readonly graphWrapper?: boolean;
      readonly withBg?: boolean;
      readonly padder2?: boolean;
      readonly hrWhite?: boolean;
      readonly hrZero?: boolean;
    }
    interface Body {
      readonly padder?: boolean;
    }
    interface Title {
      readonly white?: boolean;
      readonly black?: boolean;
    }
    interface Picker {
      readonly black?: boolean;
    }

    interface CardItem {
      readonly noPadding?: boolean;
    }

    interface Thumbnail {
      readonly preview?: boolean;
    }

    interface Footer {
      readonly transparent?: boolean;
    }
    interface CheckBox {
      readonly lightBlue?: boolean;
      readonly lightGreen?: boolean;
      readonly lightYellow?: boolean;
      readonly lightRed?: boolean;
      readonly blue?: boolean;
      readonly green?: boolean;
      readonly yellow?: boolean;
      readonly red?: boolean;
      readonly darkBlue?: boolean;
      readonly darkGreen?: boolean;
      readonly darkYellow?: boolean;
      readonly darkRed?: boolean;
    }
    interface Form {
      readonly noPadding?: boolean;
    }
    interface ListItem {
      readonly white?: boolean;
      readonly underlayColor?: string;
    }
  }
  export function connectStyle(theme: string, style: any): HOC;
}
