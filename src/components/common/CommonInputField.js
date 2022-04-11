import {StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLORS, FONT_SIZE} from '../../resource/constants';
import Feather from 'react-native-vector-icons/Feather';
export default function CommonInputField({
  label,
  Icon,
  iconName,
  placeholder,
  onChangeText,
  secureTextEntry,
  icon,
  secure,
  onPress,
  value
}) {
  return (
    <View style={{marginTop:verticalScale(12)}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={18} color={COLORS.GRAY}/>
        </View>
        <View style={{flex: 0.74,justifyContent:'center'}}>
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            value={value}
          />
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          {icon && <Feather name={secureTextEntry ? 'eye' : 'eye-off'} size={18} color={COLORS.GRAY}/>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: verticalScale(36),
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: scale(5),
    flexDirection: 'row',
  },
  label: {
    marginBottom: verticalScale(6),
    fontSize: FONT_SIZE.SMALL,
  },
  iconContainer: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
