import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainNavigator from './src/navigation/MainNavigator'
import { LogBox } from 'react-native';
import IntroScreen from './src/screens/AuthScreens/IntroScreen';


export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <MainNavigator/>
  )
}

const styles = StyleSheet.create({})