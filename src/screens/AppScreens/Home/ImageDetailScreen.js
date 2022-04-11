import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import STYLE from '../../../resource/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS, FONT_SIZE, IMAGES, ROUTES} from '../../../resource/constants';
import CommonHeader from '../../../components/common/CommonHeader';
import {scale, verticalScale} from 'react-native-size-matters';
export default function ImageDetailScreen({navigation}) {
  return (
    <View style={[STYLE.container, {backgroundColor: COLORS.WHITE}]}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={IMAGES.BALLOON}
          style={{flex: 1, paddingLeft: scale(10)}}>
          <CommonHeader onPress={() => navigation.goBack()} />
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          {'Eleanor blowing balloons \nat party 🎉'}
        </Text>
        <View style={styles.calendar}>
          <AntDesign name="calendar" size={16} />
          <Text style={[styles.textStyle, {marginRight: scale(10)}]}>
            24 Mar 2022
          </Text>
          <EvilIcons name="location" size={16} />
          <Text style={styles.textStyle}>Roberts Palace, Dakota</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.text}>
          {
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.'
          }
        </Text>
      </View>
      <View style={styles.shareContainer}>
        <Text style={{color: COLORS.WHITE, fontWeight: '600'}}>
          Share with:
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={IMAGES.SNAP_CHAT}
            resizeMode="contain"
            style={styles.shareImage}
          />
          <Image
            source={IMAGES.PINTEREST}
            resizeMode="contain"
            style={styles.shareImage}
          />
          <Image
            source={IMAGES.TELEGRAM}
            resizeMode="contain"
            style={styles.shareImage}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 0.25,
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: verticalScale(25),
    borderTopLeftRadius: verticalScale(25),
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
    bottom: scale(30),
  },
  title: {
    fontSize: FONT_SIZE.LARGE,
    fontWeight: '600',
  },
  calendar: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  textStyle: {
    fontSize: FONT_SIZE.X_SMALL,
    marginLeft: scale(3),
  },
  horizontalLine: {
    borderWidth: 0.6,
    borderColor: COLORS.LIGHT_GRAY,
    marginVertical: verticalScale(10),
  },
  text: {
    fontSize: FONT_SIZE.X_SMALL,
  },
  shareContainer: {
    flex: 0.12,
    backgroundColor: COLORS.BLACK,
    borderTopRightRadius: verticalScale(25),
    borderTopLeftRadius: verticalScale(25),
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
    borderWidth: 1,
    justifyContent: 'space-around',
  },
  shareImage: {
    height: verticalScale(20),
    width: verticalScale(20),
    marginRight: scale(10),
  },
});
