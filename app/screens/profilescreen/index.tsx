import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../config/commonStyles'
import FONTS from '../../config/font'
import COLOR from '../../config/colors'
// import styles from './styles'

const ProfileScreen = () => {
    return (
        <View style={commonStyles.mainBody}>
            <View style={{ width: '100%', alignItems: 'center', marginTop: 50 }}>
                <View style={{ height: 130, width: 130, backgroundColor: 'red', borderRadius: 100 }}>
                    <Image
                        style={{ height: 130, width: 130, borderRadius: 100 }}
                        source={require('../../assets/images/tony-stark.jpg')}
                    />
                </View>

                <View style={{ flexDirection: 'column', alignItems: "center", marginTop: 30 }}>
                    <Text style={{ color: COLOR.primary, fontFamily: FONTS.SemiBold, fontSize: 25 }}>Jis Sunny</Text>
                    <Text style={{ color: COLOR.grey7, fontFamily: FONTS.SemiBold, fontSize: 18 }}>Edattukunnel</Text>
                    <Text style={{ color: COLOR.grey7, fontFamily: FONTS.SemiBold, fontSize: 18 }}>St. Marya Gorethi Ward (8)</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})