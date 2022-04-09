import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import STYLE from '../../resource/styles';
import {IMAGES, ROUTES} from '../../resource/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonInputField from '../../components/common/CommonInputField';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CommonButton from '../../components/common/CommonButton';
import AuthText from '../../components/AuthComponent/AuthText';
import AuthCheckBox from '../../components/AuthComponent/AuthCheckBox';

export default function SignIn({navigation}) {
  const [secureText, setSecureText] = useState(false);
  return (
    <View style={STYLE.container}>
      <View style={STYLE.header}>
        <ImageBackground
          source={IMAGES.MEMORIES}
          resizeMode="contain"
          style={{flex: 1}}>
          <AntDesign onPress={() => alert('hi')} name="leftcircleo" size={25} />
        </ImageBackground>
      </View>
      <KeyboardAwareScrollView style={STYLE.content}>
        <Text style={STYLE.textStyle}>{'Welcome back! \nLogin'}</Text>
        <CommonInputField
          Icon={AntDesign}
          label={'Username'}
          iconName={'user'}
          placeholder={'User name'}
        />
        <CommonInputField
          Icon={SimpleLineIcons}
          label={'Password'}
          iconName={'lock'}
          placeholder={'Enter password'}
          icon
          secureTextEntry={secureText}
          onPress={() => setSecureText(!secureText)}
        />
        <AuthCheckBox />
        <CommonButton
          btnText={'Log In'}
          customStyle={STYLE.customBtnStyle}
          textStyle={STYLE.btnTextStyle}
        />
        <AuthText text={'Don’t have an account?'} text1={' Register'} onPress={()=>navigation.navigate(ROUTES.AUTH.SIGN_UP_SCREEN)}/>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
