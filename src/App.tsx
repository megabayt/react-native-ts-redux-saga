import React from 'react';
import {
  Root,
  StyleProvider,
} from 'native-base';
import { Provider } from 'react-redux';

import getTheme from '~/theme';
import theme from '~/constants/themeVars';
import AppContainer from '~/routes';
import { store } from '~/store';

const App = () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(theme)}>
      <Root>
        <AppContainer />
      </Root>
    </StyleProvider>
  </Provider>
);

export default App;
