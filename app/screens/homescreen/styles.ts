// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({})

import { StyleSheet } from 'react-native';
import COLOR from '../../config/colors';
import FONTS from '../../config/font';

const styles = (state: any) => {
    let theme = state?.theme ? state?.theme : 'light';
    let defaulFontSize = state?.fontSize ? state?.fontSize : 2;
    return StyleSheet.create({

        homeScreenHeader: {

        },
        deatailsHeaderMain: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        deatailsHeaderIconsBox: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 25,
        },
        Screens: {
            flex: 1,
            backgroundColor: theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg,
            paddingTop: 7,
            paddingBottom: 0,
        },
        newsCardImg: {
            marginTop: 12,
            width: '100%',
            height: 300,
            backgroundColor: '#e3e1e1',
        },
        txt1: {
            fontFamily: FONTS.SemiBold,
            fontSize: 12 + defaulFontSize,
            paddingVertical: 2,
            paddingLeft: 15,
            color: 'red',
            marginTop: -5,
        },
        text2: {
            fontFamily: FONTS.MBold,
            fontSize: 17 + defaulFontSize,
            paddingLeft: 15,
            paddingRight: 10,
            marginTop: 2,
            color: theme === 'dark' ? '#fff' : '#000',
        },
        bodyBox: {
            marginTop: 15,
            paddingHorizontal: 15,
            paddingBottom: 20,
        },
        text3: {
            fontFamily: FONTS.Regular,
            color: theme === 'dark' ? '#fff' : '#000',
            fontSize: 12 + defaulFontSize,
        },
        txt8: {
            fontFamily: FONTS.SemiBold,
            fontSize: 10 + defaulFontSize,
            paddingVertical: 3,
            paddingLeft: 14,
            color: theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1,
        },
        gifBox: {
            padding: 0,
        },
        gifStyle: {
            width: '100%',
            height: 30,
            alignSelf: 'center',
            resizeMode: 'cover',
        },
    });
};

export default styles;
