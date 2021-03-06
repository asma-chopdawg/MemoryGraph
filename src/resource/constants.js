import { scale } from "react-native-size-matters"

export const COLORS={
    PRIMARY:"#F76631",
    GRADIENT1:"#FF8649",
    GRADIENT2:"#FF4D1F",
    GRAY:"#ACB4C1",
    LIGHT_GRAY:"#EAECF0",
    WHITE:"#fff",
    BLACK:"#000",
    SKY_BLUE:"rgba(66, 194, 255, 0.2)",

}

export const FONT_SIZE={
    Extra_SMALL:scale(8),
    XXX_SMALL:scale(8),
    XX_SMALL:scale(9),
    X_SMALL:scale(10),
    SMALL:scale(11),
    MEDIUM:scale(12),
    XXX_LARGE:scale(13),
    XX_LARGE:scale(15),
    X_LARGE:scale(17),
    LARGE:scale(18)
}

export const IMAGES={
    SPLASH_IMAGE1:require('../assets/M1.png'),
    SPLASH_IMAGE2:require('../assets/M2.png'),
    SPLASH_IMAGE3:require('../assets/M3.png'),
    MEMORIES:require('../assets/Memories.png'),
    PROFILE:require('../assets/profile.png'),
    IMAGE1:require('../assets/img1.png'),
    IMAGE2:require('../assets/img2.png'),
    IMAGE3:require('../assets/img3.png'),
    IMAGE4:require('../assets/img4.png'),
    IMAGE5:require('../assets/img5.png'),
    IMAGE6:require('../assets/img6.png'),
    IMAGE14:require('../assets/14.png'),
    IMAGE15:require('../assets/15.png'),
    IMAGE16:require('../assets/16.png'),
    IMAGE17:require('../assets/17.png'),
    IMAGE18:require('../assets/18.png'),
    IMAGE19:require('../assets/19.png'),
    IMAGE20:require('../assets/20.png'),
    BALLOON:require('../assets/balloon.png'),
    PINTEREST:require('../assets/Pinterest.png'),
    SNAP_CHAT:require('../assets/Snapchat.png'),
    TELEGRAM:require('../assets/Telegram.png'),
    PHONE:require('../assets/phone.png'),
    INBOX:require('../assets/inbox.png'),
    SETTING:require('../assets/setting.png'),
    

}

export const CONSTANTS={

}

export const ROUTES={
    SPLASH_SCREEN:"SPLASH_SCREEN",
    AUTH_NAVIGATOR:"AUTH_NAVIGATOR",
    APP_NAVIGATOR:"APP_NAVIGATOR",
    AUTH:{
        SIGN_IN_SCREEN:"SIGN_IN_SCREEN",
        SIGN_UP_SCREEN:"SIGN_UP_SCREEN",
    },
    APP:{
        HOME_TAB:"HOME_TAB",
        GRAPH_TAB:"GRAPH_TAB",
        MAIN_TAB:"MAIN_TAB",
        FAVORITE_TAB:"FAVORITE_TAB",
        SETTING_TAB:"SETTING_TAB",
        HOME_SCREEN:"HOME_SCREEN",
        HOME_SCREENS_STACK:"HOME_SCREENS_STACK",
        IMAGE_DETAIL_SCREEN:"IMAGE_DETAIL_SCREEN",
        SETTING_SCREEN:"SETTING_SCREEN",


    }
}