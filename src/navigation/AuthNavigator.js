import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../resource/constants';
import SignIn from '../screens/AuthScreens/SignIn';
import SignUp from '../screens/AuthScreens/SignUp';
import IntroScreen from '../screens/AuthScreens/IntroScreen';
import ImageDetailScreen from '../screens/AppScreens/Home/ImageDetailScreen';
import SettingScreen from '../screens/AppScreens/Home/SettingScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>

        <Stack.Screen name={ROUTES.SPLASH_SCREEN} component={IntroScreen} />
        <Stack.Screen name={ROUTES.AUTH.SIGN_IN_SCREEN} component={SignIn} />
        <Stack.Screen name={ROUTES.AUTH.SIGN_UP_SCREEN} component={SignUp} />
        <Stack.Screen
        name={ROUTES.APP.IMAGE_DETAIL_SCREEN}
        component={ImageDetailScreen}
      />
      <Stack.Screen
        name={ROUTES.APP.SETTING_SCREEN}
        component={SettingScreen}
      />
      </Stack.Navigator>
  );
}


export default AuthNavigator;