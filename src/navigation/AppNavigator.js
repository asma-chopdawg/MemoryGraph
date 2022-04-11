import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../resource/constants';
import HomeScreen from '../screens/AppScreens/Home/HomeScreen';
import ImageDetailScreen from '../screens/AppScreens/Home/ImageDetailScreen';
import Setting from '../screens/AppScreens/Home/Setting';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
     {/* <Stack.Screen name={ROUTES.APP.HOME_SCREEN} component={HomeScreen} /> */}
     {/*   <Stack.Screen name={ROUTES.APP.IMAGE_DETAIL_SCREEN} component={ImageDetailScreen} /> */}
      <Stack.Screen name={ROUTES.APP.SETTING_SCREEN} component={Setting} />
    </Stack.Navigator>
  );
}

export default AppNavigator