import {StyleSheet, ScrollView, View,Image} from 'react-native';
import React, {useState} from 'react';
import STYLE from '../../resource/styles';
import HomeHeader from '../../components/AppComponent/Home/HomeHeader';
import {scale, verticalScale} from 'react-native-size-matters';
import HomeButton from '../../components/AppComponent/Home/HomeButton';
import HomeSeeAll from '../../components/AppComponent/Home/HomeSeeAll';
import { IMAGES } from '../../resource/constants';

export default function HomeScreen() {
  const [active, setActive] = useState(1);
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
        <HomeSeeAll/>
      <ScrollView
        style={styles.imgContainer}
        horizontal
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={IMAGES.IMAGE1} style={{height:verticalScale(45),width:verticalScale(45)}}/>
          
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
  imgContainer:{
    height: verticalScale(70),
    marginBottom: verticalScale(10),
    borderWidth:1
  }
});
