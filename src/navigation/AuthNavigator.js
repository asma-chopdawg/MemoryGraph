import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../resource/constants';
import SignIn from '../screens/AuthScreens/SignIn';
import SignUp from '../screens/AuthScreens/SignUp';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.AUTH.SIGN_IN_SCREEN} component={SignIn} />
        <Stack.Screen name={ROUTES.AUTH.SIGN_UP_SCREEN} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AuthNavigator;