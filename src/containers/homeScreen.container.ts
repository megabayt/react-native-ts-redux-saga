import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { withInteractionManager } from '~/decorators';
import { HomeScreen } from '~/screens/Home';

export default connect(
  () => ({
  }),
  {
  },
)(
  withNavigation(
    withInteractionManager(
      HomeScreen,
    ),
  ),
);
