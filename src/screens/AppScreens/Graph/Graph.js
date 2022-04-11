import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import STYLE from '../../../resource/styles'

export default function Graph() {
  return (
    <View style={styles.container}>
      <Text>Graph</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})