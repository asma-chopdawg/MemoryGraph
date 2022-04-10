import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../resource/constants';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        {/* <Stack.Screen name={ROUTES.APP_NAVIGATOR} component={AppNavigator} /> */}
        <Stack.Screen name={ROUTES.AUTH_NAVIGATOR} component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
