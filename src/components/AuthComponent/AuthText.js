import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE} from '../../resource/constants';
import {scale, verticalScale} from 'react-native-size-matters';

export default function AuthText({text, text1, onPress}) {
  return (
    <Text style={styles.textContainer}>
      <Text>{text}</Text>
      <Text style={styles.textStyle} onPress={onPress}>
        {text1}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    fontSize: FONT_SIZE.X_SMALL,
    textAlign: 'center',
    marginTop:verticalScale(15)
  },
  textStyle: {
    color: COLORS.PRIMARY,
    fontWeight: '500',
    fontSize: FONT_SIZE.MEDIUM,
  },
});
