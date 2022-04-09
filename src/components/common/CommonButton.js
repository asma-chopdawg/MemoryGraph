import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';

export default function CommonButton({btnText, onPress,customStyle,textStyle}) {
  return (
    <TouchableOpacity style={[styles.btnContainer,customStyle]} onPress={onPress}>
      <Text style={textStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: verticalScale(35),
    borderRadius:scale(4),
    justifyContent:'center',
    alignItems:'center'
  },
  btnText: {},
});
