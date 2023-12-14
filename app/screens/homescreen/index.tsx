import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import commonStyles from '../../config/commonStyles'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import FONTS from '../../config/font';
// import styles from './styles';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={commonStyles.mainBody}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.navigate('settingsscreen' as never)}>
                    <Ionicons name="settings-outline" color={COLOR.primary} size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('notifications' as never)}>
                    <Ionicons name="notifications-outline" color={COLOR.primary} size={25} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ color: COLOR.primary, fontFamily: FONTS.Bold , fontSize:28}}>Helo Jis,</Text>
                </View>
            </ScrollView>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({})