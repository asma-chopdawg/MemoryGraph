import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import React, { useState } from 'react';
import STYLE from '../../../resource/styles';
import HomeHeader from '../../../components/AppComponent/Home/HomeHeader';
import {  verticalScale } from 'react-native-size-matters';
import HomeButton from '../../../components/AppComponent/Home/HomeButton';
import HomeSeeAll from '../../../components/AppComponent/Home/HomeSeeAll';
import { IMAGES, ROUTES } from '../../../resource/constants';
import HomePeopleMemories from '../../../components/AppComponent/Home/HomePeopleMemories';
import MasonryList from "react-native-masonry-list";

const Data = [
  { id: 1, value: "Food" }, { id: 2, value: "Friends" }, { id: 3, value: "Family" }, { id: 4, value: "Favourites" }, { id: 5, value: "Old" }
]
const HomeScreenImages = [
  {
    "uri": require('../../../assets/img1.png')
  },
  {
    "uri": require('../../../assets/img2.png')
  },
  {
    "uri": require('../../../assets/img3.png')
  },
  {
    "uri": require('../../../assets/img4.png')
  },
  {
    "uri": require('../../../assets/img5.png')
  },
]
export default function HomeScreen({navigation}) {
  const [active, setActive] = useState(1);
  const [isActiveImage, setIsActiveImage] = useState(1);
  
  const  RenderHomeButton = ({ item, index }) => {
    return (
      <HomeButton
        active={active === index}
        btnText={item.value}
        onPress={() => setActive(index)}
      />
    )
  }

  const RenderHomePeopleMemories = ({ item, index }) => {
    return (
      <HomePeopleMemories
        onPress={() => setIsActiveImage(index)}
        isActiveImage={isActiveImage == index}
        img={item.uri}
      />
    )
  }

  return (
    <ScrollView style={[STYLE.container, { padding: verticalScale(14) }]}>
      <HomeHeader />
      <FlatList showsHorizontalScrollIndicator={false} horizontal renderItem={RenderHomeButton} data={Data} />
      <View style={styles.photoGrid}>
        <MasonryList
          columns={2}
          rerender={true}
          spacing={2}
          imageContainerStyle={{ padding: 10 }}
          images={[

            {
              source: require("../../../assets/14.png"),
              dimensions: { width: 200, height: 250 },
              title: "Puppies",
              subTitle: "16/04/2021 - Balloon"
            },
            {
              source: require("../../../assets/15.png"),
              dimensions: { width: 50, height: 30 },
              title: "cakes",
              subTitle: "17/04/2021 - Balloon"
            },
            {
              source: require("../../../assets/17.png"),
              dimensions: { width: 200, height: 250 },
              title: "23 yrs",
              subTitle: "18/04/2021 - Balloon"

            },
            {
              source: require("../../../assets/16.png"),
              dimensions: { width: 50, height: 30 },
              title: "Eleanor",
              subTitle: "19/04/2021 - Balloon"
            },

          ]}
          renderIndividualHeader={(data) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(ROUTES.APP.IMAGE_DETAIL_SCREEN)}>
                <View style={[styles.masonryHeader, {
                  width: data.masonryDimensions.width,
                  margin: data.masonryDimensions.gutter / 2
                }]}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.userName}>{data.title}</Text>
                    <Text style={styles.subItem}>{data.subTitle}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
      <HomeSeeAll />
      <FlatList horizontal showsHorizontalScrollIndicator={false} renderItem={RenderHomePeopleMemories} data={HomeScreenImages} />
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
    marginTop: verticalScale(12)
  },
  imgContainer: {
    height: verticalScale(70),
    marginBottom: verticalScale(10),
  },
  img: {
    justifyContent: 'center', alignItems: 'center',
    marginTop: verticalScale(12)
  },
  masonryHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    flexDirection: "row",
    padding: 10,
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  title: {
    fontSize: 25
  },
  userName: {
    fontSize: 15,
    color: "#fafafa",
    fontWeight: "bold"
  },
  subItem: {
    fontSize: 12,
    color: "#fafafa",
  },
});
