// import * as React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import LoginScreen from '../screens/loginscreen';
// import HomeScreen from '../screens/homescreen';
// import ProfileScreen from '../screens/profilescreen';
// import SplashScreen from '../screens/splashscreen';
// import SettingsScreen from '../screens/settingsscreen';
// import RegisterScreen from '../screens/registerscreen';
// import COLOR from '../config/colors';

// import { TabIcons } from './components/tabsOption';


// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tabs = createBottomTabNavigator();

// function HomeTabs() {
//     return (
//         <Tabs.Navigator
//             initialRouteName="homescreen"
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     return TabIcons(route, focused, color, size);
//                 },
//                 tabBarActiveTintColor: COLOR.primary,
//                 tabBarInactiveTintColor: COLOR.grey,
//                 tabBarShowLabel: false,
//             })}>
//             <Tabs.Screen name="homescreen" component={HomeScreen} />
//             {/* <Tabs.Screen
//                 name="wardsscreen"
//                 component={StoriesScreen}
//                 options={{ headerShown: false }}
//             /> */}
//             <Tabs.Screen
//                 name="profilescreen"
//                 component={ProfileScreen}
//                 options={{ headerShown: false }}
//             />
//         </Tabs.Navigator>
//     );
// }

// export default function Routes() {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerTitleAlign: 'center',
//             }}>

//             <Stack.Screen
//                 name="loginscreen"
//                 component={LoginScreen}
//                 options={{ headerShown: false }}
//             />

//             <Stack.Screen
//                 name="homescreen"
//                 component={HomeScreen}
//                 options={{ headerShown: false }}
//             />

//             <Stack.Screen
//                 name="profilescreen"
//                 component={ProfileScreen}
//                 options={{ headerShown: false }}
//             />

//             <Stack.Screen
//                 name="registerscreen"
//                 component={RegisterScreen}
//                 options={{ headerShown: false }}
//             />

//             <Stack.Screen
//                 name="settingsscreen"
//                 component={SettingsScreen}
//                 options={{ headerShown: false }}
//             />

//             <Stack.Screen
//                 name="splashscreen"
//                 component={SplashScreen}
//                 options={{ headerShown: false }}
//             />
//         </Stack.Navigator>
//     );
// }

import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import COLOR from '../config/color';
import styles from './styles';
// import SplashScreen from '../screens/splashScreen';
// import HomeScreen from '../screens/homeScreen';
// import ReportScreen from '../screens/reportScreen';
// import ProfileScreen from '../screens/profileScreen';
// import LoginScreen from '../screens/loginScreen';
// import Admin from '../screens/adminActions';
// import AllUsers from '../screens/adminActions/allUsers';

import { View } from 'react-native';
import FONT from '../config/font';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import SettingsScreen from '../screens/settingsScreen';
// import { useSelector } from 'react-redux';
import COLOR from '../config/colors';
import HomeScreen from '../screens/homescreen';
import ProfileScreen from '../screens/profilescreen';
import SplashScreen from '../screens/splashscreen';
import LoginScreen from '../screens/loginscreen';
import SettingsScreen from '../screens/settingsscreen';
import WardsScreen from '../screens/wardsscreen/indes';
import AdminScreen from '../screens/adminscreen';
import Notifications from '../screens/notifications';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(props: any) {
    // const Auth = useSelector((state: any) => state.Auth.user);
    const [tabChange, setTabChange] = useState(false);

    const handleTabPress = () => {
        // Function to be called when tab is pressed
        console.log('Tab pressed!');
    };

    return (
        <Tab.Navigator
            initialRouteName="HomeTabs"
            screenOptions={({ route }: any) => ({
                tabBarOnPress: handleTabPress,
                tabBarStyle: styles.tabBarStyle,
                tabBarOptions: {
                    style: styles.tabBarOptions,
                },
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIcon: (props: any) => {
                    let Icons: any;
                    let Color: any;
                    if (route.name === 'homescreen') {
                        Icons = props.focused ? 'home' : 'home-outline';
                        Color = props.focused ? COLOR.black : COLOR.black;
                    } else if (route.name === 'profilescreen') {
                        Icons = props.focused ? 'person' : 'person-outline';
                        Color = props.focused ? COLOR.black : COLOR.black;
                    } else if (route.name === 'wardscreen') {
                        Icons = props.focused ? 'layers' : 'layers-outline';
                        Color = props.focused ? COLOR.black : COLOR.black;
                    } else if (route.name === 'adminscreen') {
                        Icons = props.focused ? 'grid' : 'grid-outline';
                        Color = props.focused ? COLOR.black : COLOR.black;
                    }
                    return (
                        <View >
                            {route.name === 'homescreen' ? (
                                <Ionicons name={Icons} size={25} color={Color} />
                            ) : route.name === 'profilescreen' ? (
                                <Ionicons name={Icons} size={25} color={Color} />
                            ) : route.name === 'wardscreen' ? (
                                <Ionicons name={Icons} size={25} color={Color} />
                            ) : route.name === 'adminscreen' ? (
                                <Ionicons name={Icons} size={25} color={Color} />
                            ) : null}
                        </View>
                    );
                },
                tabBarActiveTintColor: '#d3d3d3',
                tabBarInactiveTintColor: '#878f86',
            })}>
            <Tab.Screen
                name="homescreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    title: 'Home',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            <Tab.Screen
                name="wardscreen"
                component={WardsScreen}
                options={{
                    title: 'Wards',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />

            {/* {Auth.role === 1 ? (
                <Tab.Screen
                    name="Admin"
                    component={Admin}
                    options={{
                        title: 'Admin',
                        headerStyle: styles.screenHeader,
                        headerTitleStyle: styles.screenHeaderTxt,
                    }}
                />
            ) : null} */}

            <Tab.Screen
                name="adminscreen"
                component={AdminScreen}
                options={{
                    title: 'Admin',
                    // headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            <Tab.Screen
                name="profilescreen"
                component={ProfileScreen}
                options={{
                    title: 'My Profile',
                    // headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>

            <Stack.Screen
                name="homeScreen"
                component={HomeTabs}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name="splashscreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="loginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Wards"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="notifications"
                component={Notifications}
                options={{ headerShown: false }}
            /> */}

            {/* <Stack.Screen
                name="settingsscreen"
                component={SettingsScreen}
                options={{ headerShown: false }}
            /> */}


            <Stack.Screen
                name="notifications"
                component={Notifications}
                options={{
                    title: 'Notifications',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            <Stack.Screen
                name="settingsscreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />

            {/*  <Stack.Screen
                name="addUser"
                component={AddUser}
                options={{
                    title: 'Add User',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            /> */}
            <Stack.Screen
                name="settingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            {/* <Stack.Screen
                name="location"
                component={Location}
                options={{
                    title: 'Location',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            <Stack.Screen
                name="addLocation"
                component={AddLocation}
                options={{
                    title: 'Add Location',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            <Stack.Screen
                name="userLogs"
                component={UserLogs}
                options={{
                    title: 'Select User',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            <Stack.Screen
                name="viewUserLogs"
                component={ViewUserLogs}
                options={{
                    title: 'Logs',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            />
            <Stack.Screen
                name="resetPassword"
                component={ResetPassword}
                options={{
                    title: 'Reset Password',
                    headerStyle: styles.screenHeader,
                    headerTitleStyle: styles.screenHeaderTxt,
                }}
            /> */}
        </Stack.Navigator>
    );
}