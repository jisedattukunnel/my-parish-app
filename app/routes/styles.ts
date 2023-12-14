import { StyleSheet } from 'react-native';
import FONT from '../config/font';
import COLOR from '../config/colors';
export default StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLOR.grey1,
        height: 55,
        paddingTop:5,
    },
    tabBarOptions: {
        backgroundColor: COLOR.primary,
    },
    tabBarLabelStyle: {
        color: COLOR.grey7,
        fontFamily: FONT.semibold,
        marginBottom: 5,
    },

    screenHeader: {
        backgroundColor: COLOR.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    screenHeaderTxt: {
        color: COLOR.primary,
        fontFamily: FONT.semibold,
        fontSize: 20,
    },
});
