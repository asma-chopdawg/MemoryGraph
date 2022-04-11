import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainNavigator from './src/navigation/MainNavigator'
import { LogBox } from 'react-native';
import SplashScreen from './src/screens/AuthScreens/SplashScreen';


export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <MainNavigator/>
    // <SplashScreen/>
  )
}

const styles = StyleSheet.create({})