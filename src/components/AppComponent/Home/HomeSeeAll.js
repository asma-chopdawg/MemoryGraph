import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { COLORS, FONT_SIZE } from '../../../resource/constants';
import { verticalScale } from 'react-native-size-matters';

export default function HomeSeeAll() {
  return (
    <View style={styles.seeAllContainer}>
        <Text style={styles.textStyle}>{'Find memories with \npeople'}</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={styles.seeAll}>See all</Text>
          <SimpleLineIcons
            style={{marginLeft: 5}}
            name="arrow-right"
            color={COLORS.PRIMARY}
          />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    seeAllContainer: {
        height: verticalScale(55),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textStyle: {
        fontWeight: '600',
      },
      seeAll: {
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE.SMALL,
      },
})