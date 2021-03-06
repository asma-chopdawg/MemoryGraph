import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import STYLE from '../../../resource/styles';
import CommonHeader from '../../../components/common/CommonHeader';
import {COLORS, FONT_SIZE, IMAGES} from '../../../resource/constants';
import {scale, verticalScale} from 'react-native-size-matters';
import HomeButton from '../../../components/AppComponent/Home/HomeButton';
import HomeFooter from '../../../components/AppComponent/Home/HomeFooter';
import MasonryList from "react-native-masonry-list";

export default function SettingScreen() {
  return (
    <View style={STYLE.container}>
      <View style={{flex: 0.6, paddingHorizontal: scale(10)}}>
        <CommonHeader />
        <View style={styles.header}>
          <View style={styles.img}>
            <Image source={IMAGES.PROFILE} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}> Robert Fox</Text>
            <Text style={styles.text}>Joined 16 March 2021</Text>
          </View>
          <View style={styles.edit}>
            <HomeButton btnText={'Edit'} active={true} />
          </View>
        </View>
        <>
        <MasonryList
         columns={3}
        //  rerender={true}
         imageContainerStyle={{ padding: 10 }}
             images={[

              {
                source: IMAGES.IMAGE14,
                dimensions: { width: 20, height: 20 },
                title: "Puppies",
                subTitle: "16/04/2021 - Balloon",
              },
              {
                source:  IMAGES.IMAGE15,
                dimensions: { width: 20, height: 15 },
                title: "cakes",
                subTitle: "17/04/2021 - Balloon"
              },
              {
                source:  IMAGES.IMAGE17,
                dimensions: { width: 10, height: 10 },
                title: "Eleanor",
                subTitle: "19/04/2021 - Balloon"
              },
              {
                source:  IMAGES.IMAGE16,
                dimensions: { width: 9, height: 20 },
                title: "23 yrs",
                subTitle: "18/04/2021 - Balloon"
  
              },
              
              {
                source:  IMAGES.IMAGE18,
                dimensions: { width: 10, height: 10 },
                title: "Eleanor",
                subTitle: "19/04/2021 - Balloon"
              },
  
              {
                source:  IMAGES.IMAGE19,
                dimensions: { width: 20, height: 20 },
                title: "Eleanor",
                subTitle: "19/04/2021 - Balloon"
              },
              {
                source:  IMAGES.IMAGE20,
                dimensions: { width: 30, height: 30 },
                title: "Eleanor",
                subTitle: "19/04/2021 - Balloon"
              },
  
            ]}
        />
        </>
      </View>
      <View style={styles.footer}>
        <HomeFooter img={IMAGES.INBOX} text={'robertfox@email.com'} />
        <HomeFooter img={IMAGES.PHONE} text={'(684) 555-0102'} />
        <View
          style={styles.horizontalLine}></View>
        <HomeFooter img={IMAGES.SETTING} text={'Settings'} icon />
        <HomeButton icon active={true} btnText="Logout" customStyle={{
            marginTop:verticalScale(25),
            width:scale(100)
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 0.4,
    borderWidth: 1,
    backgroundColor: COLORS.BLACK,
    borderTopRightRadius: scale(25),
    borderTopLeftRadius: scale(25),
    paddingTop: verticalScale(10),
    paddingHorizontal:scale(12)

  },
  header: {
    height: verticalScale(75),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: FONT_SIZE.XX_LARGE,
    fontWeight: '500',
  },
  text: {
    fontSize: FONT_SIZE.SMALL,
    fontWeight: '400',
    marginTop: verticalScale(4),
  },
  edit: {
    flex: 0.2,
    justifyContent: 'center',
  },
  content: {
    flex: 0.6,
    justifyContent: 'center',
  },
  img: {
    flex: 0.2,
    justifyContent: 'center',
  },
  horizontalLine:{
    borderWidth: 0.6,
    borderColor: COLORS.LIGHT_GRAY,
    marginVertical: scale(10),
  }
});
