import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../resource/constants';
import SignIn from '../screens/AuthScreens/SignIn';
import SignUp from '../screens/AuthScreens/SignUp';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={ROUTES.AUTH.SIGN_IN_SCREEN} component={SignIn} />
        <Stack.Screen name={ROUTES.AUTH.SIGN_UP_SCREEN} component={SignUp} />
      </Stack.Navigator>
  );
}


export default AuthNavigator;