import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import STYLE from '../../resource/styles';
import {IMAGES, ROUTES} from '../../resource/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonInputField from '../../components/common/CommonInputField';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CommonButton from '../../components/common/CommonButton';
import AuthText from '../../components/AuthComponent/AuthText';
import AuthCheckBox from '../../components/AuthComponent/AuthCheckBox';
import {scale, verticalScale} from 'react-native-size-matters';
import CommonHeader from '../../components/common/CommonHeader';
export default function SignUp({navigation}) {
  const [secureText, setSecureText] = useState(false);
  return (
    <View style={[STYLE.container,{paddingHorizontal:scale(17)}]}>
      <View style={{flex: 0.2}}>
        <CommonHeader  onPress={()=>navigation.navigate(ROUTES.AUTH.SIGN_IN_SCREEN)}/>
      </View>
      <KeyboardAwareScrollView
        style={{flex: 0.8}}>
        <Text style={STYLE.textStyle}>{'Sign Up to \ncontinue'}</Text>
        <CommonInputField
          Icon={AntDesign}
          label={'Full Name'}
          iconName={'user'}
          placeholder={'Enter full name'}
        />
        <CommonInputField
          Icon={AntDesign}
          label={'Email'}
          iconName={'user'}
          placeholder={'Enter your email'}
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
        <CommonButton
          btnText={'Sign Up'}
          customStyle={[STYLE.customBtnStyle,{marginTop:verticalScale(15)}]}
          textStyle={STYLE.btnTextStyle}
        />
        <AuthText text={'Have an account? '} text1={'Log In'} onPress={()=>navigation.navigate(ROUTES.AUTH.SIGN_IN_SCREEN)}/>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
