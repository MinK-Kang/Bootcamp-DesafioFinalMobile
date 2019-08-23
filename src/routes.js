import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';
import SingUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SingUp,
  }),
);
