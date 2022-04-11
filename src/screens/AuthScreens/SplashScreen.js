import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import STYLE from '../../resource/styles'

export default function SplashScreen() {
  return (
    <View style={[STYLE.container,{justifyContent:'center',alignItems:'center'}]}>
      <Text>MemoryGraph</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})