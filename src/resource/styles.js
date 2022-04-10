import {StyleSheet} from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { COLORS, FONT_SIZE } from './constants'
const STYLE = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.WHITE
    },
    header: {
        flex: 0.5,
        backgroundColor: COLORS.SKY_BLUE,
        justifyContent: 'center',
        paddingHorizontal: scale(10),
        paddingTop:verticalScale(35),
        paddingBottom:verticalScale(15),
      },
      content: {
        flex: 0.5,
        paddingHorizontal: scale(17),
      },
      textStyle: {
        fontSize: FONT_SIZE.X_LARGE,
        fontWeight: '600',
        marginTop: verticalScale(35),
        marginBottom: verticalScale(8),
      },
      customBtnStyle: {
        backgroundColor: COLORS.PRIMARY,
      },
      btnTextStyle: {
        color: COLORS.WHITE,
      },
})

export default STYLE