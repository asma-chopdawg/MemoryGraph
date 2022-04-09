import { scale } from "react-native-size-matters"

export const COLORS={
    PRIMARY:"#F76631",
    GRAY:"#ACB4C1",
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
    XX_LARGE:scale(13),
    X_LARGE:scale(15),
    LARGE:scale(17)
}

export const IMAGES={
    SPLASH_IMAGE1:require('../assets/M1.png'),
    SPLASH_IMAGE2:require('../assets/M2.png'),
    SPLASH_IMAGE3:require('../assets/M3.png'),
    MEMORIES:require('../assets/Memories.png'),

}

export const CONSTANTS={

}

export const ROUTES={
    AUTH_NAVIGATOR:"AUTH_NAVIGATOR",
    APP_NAVIGATOR:"APP_NAVIGATOR",
    AUTH:{
        SIGN_IN_SCREEN:"SIGN_IN_SCREEN",
        SIGN_UP_SCREEN:"SIGN_UP_SCREEN",
    },
    APP:{
        HOME_SCREEN:"HOME_SCREEN"
    }
}