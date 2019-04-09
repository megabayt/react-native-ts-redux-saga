import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { ForgotPasswordScreen } from '~/screens/ForgotPassword';
import { IStore } from '~/interfaces';
import { forgotPasswordFetch } from '~/store/reducers/auth.reducer';
import { withInteractionManager } from '~/decorators';

export default connect(
  (store: IStore) => ({
    isFetching: store.auth.forgotPassword.isFetching,
    error: store.auth.forgotPassword.error,
    data: store.auth.forgotPassword.data,
  }),
  {
    forgotPasswordFetch,
  },
)(
  withNavigation(
    withInteractionManager(
      ForgotPasswordScreen,
    ),
  ),
);
