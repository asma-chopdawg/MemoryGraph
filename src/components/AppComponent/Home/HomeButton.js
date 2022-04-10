import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../resource/constants';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';

export default function HomeButton({active, onPress,btnText}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={
          active
            ? [COLORS.GRADIENT1, COLORS.GRADIENT2]
            : ['transparent', 'transparent']
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.linearGradient,{borderWidth:active?null:1}]}>
        <Text style={active ? styles.activeBtnText : styles.inactiveBtnText}>
          {btnText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    linearGradient: {
        height: verticalScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(12),
        borderRadius: scale(5),
        marginRight: scale(6),
        borderColor: COLORS.GRAY,
      },
      activeBtnText: {
        color: COLORS.WHITE,
      },
      inactiveBtnText: {
        color: COLORS.BLACK,
      },
});
