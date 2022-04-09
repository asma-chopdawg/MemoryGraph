import React from 'react';
import {StyleSheet, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function CommonHeader({onPress}) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="leftcircleo"
        size={25}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    justifyContent: 'flex-end',
    
  },
});
