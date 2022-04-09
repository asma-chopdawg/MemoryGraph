import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../resource/constants';
import Home from '../screens/AppScreens/Home';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.APP.HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
}

export default AppNavigator