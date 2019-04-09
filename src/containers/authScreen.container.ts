import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { AuthScreen } from '~/screens/Auth';
import { IStore } from '~/interfaces';
import { loginFetch, registerFetch } from '~/store/reducers/auth.reducer';
import { withInteractionManager } from '~/decorators';

export default connect(
  (store: IStore) => ({
    login: store.auth.login,
    register: store.auth.register,
  }),
  {
    loginFetch,
    registerFetch,
  },
)(
  withNavigation(
    withInteractionManager(
      AuthScreen,
    ),
  ),
);
