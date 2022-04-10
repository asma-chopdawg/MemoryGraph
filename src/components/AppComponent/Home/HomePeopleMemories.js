import {StyleSheet, Text, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { COLORS, IMAGES } from '../../../resource/constants';
import { scale, verticalScale } from 'react-native-size-matters';

export default function HomePeopleMemories({isActiveImage,img,onPress}) {
  return (
    <TouchableOpacity
      style={
        isActiveImage
          ? [
              styles.image,
              {borderWidth: 1, borderColor: COLORS.PRIMARY, padding: 3},
            ]
          : styles.image
      }
      onPress={onPress}>
      <Image
        source={img}
        resizeMode="contain"
        style={isActiveImage ? styles.activeImg : styles.inActiveImg}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: verticalScale(51),
    width: verticalScale(51.5),
    borderRadius: scale(19),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(6),
  },
  activeImg: {
    height: '90%',
    width: '90%',
  },
  inActiveImg: {
    height: '95%',
    width: '95%',
  },
});
