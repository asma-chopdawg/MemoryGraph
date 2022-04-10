import {
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import STYLE from '../../../resource/styles';
import HomeHeader from '../../../components/AppComponent/Home/HomeHeader';
import {scale, verticalScale} from 'react-native-size-matters';
import HomeButton from '../../../components/AppComponent/Home/HomeButton';
import HomeSeeAll from '../../../components/AppComponent/Home/HomeSeeAll';
import { IMAGES} from '../../../resource/constants';
import HomePeopleMemories from '../../../components/AppComponent/Home/HomePeopleMemories';

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
        <HomePeopleMemories
          onPress={() => setIsActiveImage(1)}
          isActiveImage={isActiveImage == 1}
          img={IMAGES.IMAGE1}
        />
        <HomePeopleMemories
          onPress={() => setIsActiveImage(2)}
          isActiveImage={isActiveImage == 2}
          img={IMAGES.IMAGE2}
        />
        <HomePeopleMemories
          onPress={() => setIsActiveImage(3)}
          isActiveImage={isActiveImage == 3}
          img={IMAGES.IMAGE3}
        />
        <HomePeopleMemories
          onPress={() => setIsActiveImage(4)}
          isActiveImage={isActiveImage == 4}
          img={IMAGES.IMAGE4}
        />
        <HomePeopleMemories
          onPress={() => setIsActiveImage(5)}
          isActiveImage={isActiveImage == 5}
          img={IMAGES.IMAGE5}
        />
      </ScrollView>
      <View style={styles.img}>
        <Image source={IMAGES.IMAGE6} resizeMode="contain" />
      </View>
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
  },
  img:{
    justifyContent:'center',alignItems:'center',
    marginBottom:scale(20)
  }
});
