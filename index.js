/** @format */

import {AppRegistry, AppState, Platform, Text, TextInput} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import App from './src/App';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

let prevState;
AppState.addEventListener('change', (state) => {
  if (prevState && prevState !== state && prevState === 'background') {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }
  prevState = state;
});


AppRegistry.registerComponent(appName, () => App);
