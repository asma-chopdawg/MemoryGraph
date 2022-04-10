import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import STYLE from '../../resource/styles';
import HomeHeader from '../../components/AppComponent/Home/HomeHeader';
import {scale, verticalScale} from 'react-native-size-matters';
import HomeButton from '../../components/AppComponent/Home/HomeButton';
import HomeSeeAll from '../../components/AppComponent/Home/HomeSeeAll';
import {COLORS, IMAGES} from '../../resource/constants';

export default function HomeScreen() {
  const [active, setActive] = useState(1);
  const [isActiveImage, setIsActiveImage] = useState(1);
  return (
    <ScrollView style={[STYLE.container, {paddingHorizontal: scale(14)}]}>
      <HomeHeader />
      <ScrollView
        style={styles.btnContainer}
        horizontal
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HomeButton
          active={active == 1}
          btnText={'Food'}
          onPress={() => setActive(1)}
        />
        <HomeButton
          active={active == 2}
          btnText={'Friends'}
          onPress={() => setActive(2)}
        />
        <HomeButton
          active={active == 3}
          btnText={'Family'}
          onPress={() => setActive(3)}
        />
        <HomeButton
          active={active == 4}
          btnText={'Favourites'}
          onPress={() => setActive(4)}
        />
        <HomeButton
          active={active == 5}
          btnText={'Old'}
          onPress={() => setActive(5)}
        />
      </ScrollView>
      <View style={styles.photoGrid}></View>
      <HomeSeeAll />
      <ScrollView
        style={styles.imgContainer}
        horizontal
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={
            isActiveImage == 1
              ? styles.image
              : [styles.image, {borderWidth: 1, borderColor: COLORS.PRIMARY,padding:5}]
          }
          onPress={() => setIsActiveImage(1)}>
          <Image
            source={IMAGES.IMAGE1}
            resizeMode="contain"
            style={isActiveImage==1?styles.activeImg:styles.inActiveImg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            isActiveImage == 2
              ? styles.image
              : [styles.image, {borderWidth: 1, borderColor: COLORS.PRIMARY}]
          }
          onPress={() => setIsActiveImage(2)}>
          <Image
            source={IMAGES.IMAGE1}
            resizeMode="contain"
            style={{height: '100%'}}
          />
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: verticalScale(40),
    marginBottom: verticalScale(10),
  },
  photoGrid: {
    height: verticalScale(270),
    borderWidth: 1,
  },
  imgContainer: {
    height: verticalScale(70),
    marginBottom: verticalScale(10),
    borderWidth: 1,
  },
  image: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeImg: {
    height: '85%',
    width: '85%',
  },
  inActiveImg: {
    height: '100%',
    width: '100%',
  },
});
