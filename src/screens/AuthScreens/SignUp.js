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
import {scale, verticalScale} from 'react-native-size-matters';
import CommonHeader from '../../components/common/CommonHeader';

export default function SignUp({navigation}) {
  const [secureText, setSecureText] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _signup = () => {
    if (userName === '') return alert('Please Enter username');
    if (email === '') return alert('Please Enter email');
    if (password === '') return alert('Please Enter password');
    navigation.navigate(ROUTES.APP_NAVIGATOR)
  };

  return (
    <View style={[STYLE.container, {paddingHorizontal: scale(17)}]}>
      <View style={{flex: 0.2}}>
        <CommonHeader onPress={() => navigation.goBack()} />
      </View>
      <KeyboardAwareScrollView style={{flex: 0.8}}>
        <Text style={STYLE.textStyle}>{'Sign Up to \ncontinue'}</Text>
        <CommonInputField
          Icon={AntDesign}
          label={'Full Name'}
          iconName={'user'}
          placeholder={'Enter full name'}
          value={userName}
          onChangeText={text => setUserName(text)}
        />
        <CommonInputField
          Icon={AntDesign}
          label={'Email'}
          iconName={'user'}
          placeholder={'Enter your email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <CommonInputField
          Icon={SimpleLineIcons}
          label={'Password'}
          iconName={'lock'}
          placeholder={'Enter password'}
          icon
          secureTextEntry={secureText}
          value={password}
          onChangeText={text => setPassword(text)}
          onPress={() => setSecureText(!secureText)}
        />
        <CommonButton
          btnText={'Sign Up'}
          customStyle={[STYLE.customBtnStyle, {marginTop: verticalScale(15)}]}
          textStyle={STYLE.btnTextStyle}
          onPress={_signup}
        />
        <AuthText
          text={'Have an account? '}
          text1={'Log In'}
          onPress={() => navigation.navigate(ROUTES.AUTH.SIGN_IN_SCREEN)}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
