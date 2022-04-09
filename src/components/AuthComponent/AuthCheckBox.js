import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLORS, FONT_SIZE} from '../../resource/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function AuthCheckBox({onPress}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={toggleCheckBox ? 'checkbox-marked' : 'checkbox-blank-outline'}
          onPress={() => setToggleCheckBox(!toggleCheckBox)}
          size={23}
          color={COLORS.GRAY}
        />
        <Text style={{marginLeft: scale(7),fontSize:FONT_SIZE.SMALL}}>Remeber me</Text>
      </View>
      <Text onPress={onPress} style={styles.ForgotPassword}>
        Forgot password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(17),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ForgotPassword: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.PRIMARY,
    fontWeight: '500',
  },
});
