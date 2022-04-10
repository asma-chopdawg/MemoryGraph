import React,{useRef} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { verticalScale, scale } from 'react-native-size-matters';
import CommonButton from '../../components/common/CommonButton';
import CommonHeader from '../../components/common/CommonHeader';
import { COLORS, FONT_SIZE, IMAGES, ROUTES } from '../../resource/constants';
import STYLE from '../../resource/styles';

const slides = [
  {
    key: 'one',
    title: 'Has got some moments?',
    text: 'Upload your moments on our app and we’ll \nremind you of those moments.',
    image: IMAGES.SPLASH_IMAGE1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Do you remember?',
    text: 'When was the last time you enjoyed precious moments \nwith your son? we remind you that for happiness',
    image: IMAGES.SPLASH_IMAGE2,
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Relive the best moments',
    text: "We help you Bring back your happiest \nmemories from the past",
    image: IMAGES.SPLASH_IMAGE3,
    backgroundColor: '#22bcb5',
  },
];

export default function IntroScreen(props) {
  const ref = useRef(null);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1}}>
        {!item.key === 'one' && <CommonHeader />}
        <View style={styles.slide}>
          <View style={styles.imgContainer}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={{ width: '100%' }}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <>
              <Text style={styles.text}>{item.text}</Text>
            </>
          </View>

        </View>
      </View>
    );
  };
  const onPressNext = () =>{
    if(ref.current.state.activeIndex + 1 < slides.length){
      ref.current.goToSlide(ref.current.state.activeIndex + 1)
    }
    else if(ref.current.state.activeIndex + 1 === slides.length){
      props.navigation.navigate(ROUTES.AUTH.SIGN_UP_SCREEN)
    }
  }
  const onPressSkip = () =>{
    props.navigation.navigate(ROUTES.AUTH.SIGN_UP_SCREEN)
  }

  return (
    <View style={STYLE.container}>
      <AppIntroSlider
        ref={ref}
        renderItem={renderItem}
        activeDotStyle={{
          backgroundColor: COLORS.PRIMARY,
        }}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        data={slides}
      />
      <View style={styles.btnContainer}>
        <View style={{ flex: 0.48, justifyContent: 'center', }}>
          <CommonButton
          onPress={onPressSkip}
            btnText={'Skip'}
            customStyle={{
              borderColor: COLORS.PRIMARY,
              borderWidth: 1,
            }}
            
            textStyle={{
              color: COLORS.PRIMARY,
            }}
          />
        </View>

        <View style={{ flex: 0.48, justifyContent: 'center' }}>
          <CommonButton
          onPress={onPressNext}
            btnText={'Continue'}
            customStyle={{
              backgroundColor: COLORS.PRIMARY,
            }}
            textStyle={{
              color: COLORS.WHITE,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  slide: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(10)
  },
  imgContainer: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: FONT_SIZE.SMALL,
    marginTop: verticalScale(8),
  },
  btnContainer: {
    flex: 0.15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal:scale(12)
  },
});
