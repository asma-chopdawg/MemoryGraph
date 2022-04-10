import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../resource/constants';
import HomeScreen from '../screens/AppScreens/HomeScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name={ROUTES.APP.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator