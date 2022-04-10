import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from '../../../resource/constants';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function HomeFooter({img, text,icon,customStyle}) {
  return (
    <View style={[styles.container,customStyle]}>
      <View style={styles.iconContainer}>
        <Image source={img} resizeMode="contain" style={styles.imgStyle} />
      </View>
      <View style={styles.content}>
        <Text style={{color: COLORS.WHITE,fontWeight:'600'}}>{text}</Text>
      </View>
      <View style={styles.forward}>
        {icon && <SimpleLineIcons name="arrow-right" color={COLORS.WHITE} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(55),
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  imgStyle: {
    height: verticalScale(35),
    width: verticalScale(35),
  },
  content: {
    flex: 0.7,
    justifyContent: 'center',
  },
  forward: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
