import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { FONT_SIZE, IMAGES } from '../../../resource/constants'

export default function HomeHeader() {
  return (
    <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.headerTitle}>{'Hello Robert,'}</Text>
          <Text style={styles.headerText}>{'Relive your best moments'}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={IMAGES.PROFILE} style={styles.imgStyle} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: verticalScale(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: verticalScale(15),
      },
      textContainer: {
        flex: 0.75,
        justifyContent: 'center',
      },
      headerTitle: {
        paddingBottom: verticalScale(4),
        fontSize: FONT_SIZE.X_SMALL,
      },
      headerText: {
        fontSize: FONT_SIZE.MEDIUM,
        fontWeight: '600',
      },
      imgContainer: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgStyle: {
        height: verticalScale(40),
        width: verticalScale(40),
      },
})