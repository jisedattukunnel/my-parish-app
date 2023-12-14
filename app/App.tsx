import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <View style={{ flex: 1, }}>
          <Routes />
        </View>
      </NavigationContainer>
    </SafeAreaView>
  )
}
// 
export default App

const styles = StyleSheet.create({})