import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, ROUTES} from '../resource/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/AppScreens/Home/HomeScreen';
import ImageDetailScreen from '../screens/AppScreens/Home/ImageDetailScreen';
import Graph from '../screens/AppScreens/Graph/Graph';
import Favourite from '../screens/AppScreens/Favourite/Favourite';
import SettingScreen from '../screens/AppScreens/Home/SettingScreen';
import Setting from '../screens/AppScreens/Setting/Setting';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.APP.HOME_SCREEN} component={HomeScreen} />
      
    </Stack.Navigator>
  );
};

function AppNavigator() {
  function getTabBarVisible(route) {
    console.log('route===',route)
    // const routeName = route.state
    //   ?  route.state.routes[route.state.index].name
    //   : route.params?.screen || 'Home';
  
    // if (routeName === 'Details') {
    //   return false;
    // }
    // return true;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: scale(80),
          backgroundColor: COLORS.BLACK,
          borderRadius: scale(13),
          paddingTop: scale(15),
        },
      }}
      bar>
      <Tab.Screen
        name={ROUTES.APP.HOME_TAB}
        component={HomeStack}
        options={({route,state}) => ({
          tabBarVisible: getTabBarVisible(state),
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home-thermometer"
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.WHITE}
            />
          ),
        })}
        
        
      />
      <Tab.Screen
        name={ROUTES.APP.GRAPH_TAB}
        component={Graph}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="sound-mix"
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.WHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.APP.MAIN_TAB}
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: verticalScale(50),
                width: verticalScale(50),
                borderRadius: verticalScale(50),
                backgroundColor: COLORS.WHITE,
                bottom: scale(30),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LinearGradient
                colors={[COLORS.GRADIENT1, COLORS.GRADIENT2]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  height: verticalScale(45),
                  width: verticalScale(45),
                  borderRadius: verticalScale(45),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="plus" size={25} color={COLORS.WHITE} />
              </LinearGradient>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.APP.FAVORITE_TAB}
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="hearto"
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.WHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.APP.SETTING_TAB}
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="setting"
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.WHITE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
