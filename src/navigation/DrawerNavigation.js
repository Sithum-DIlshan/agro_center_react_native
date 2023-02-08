import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CustomDrawerButton from '../components/CustomDrawerButton';
import CustomDrawerContent from '../components/CustomDrawerContent';
import CustomRightDrawerButton from '../components/CustomRightDrawerButton';

export default function DrawerNavigation() {
    const { height, width } = useWindowDimensions();
    const Drawer = createDrawerNavigator();
    const options = {
        headerShown: false
    }

    return (
        <Drawer.Navigator
            id='Drawer'
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
                drawerStyle: {
                    width: width * 0.68,
                },
                headerLeft: (props) => (
                    <CustomDrawerButton
                        onPress={() => {
                            navigation.openDrawer();
                        }}

                        {...props}
                    />
                ),
                headerRight: (props) => (
                    <CustomRightDrawerButton
                        {...props}
                    />
                ),
                headerTitle: 'Agri Market',
                headerTransparent: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '700',
                    fontSize: 25,
                    color: '#3A7F0D'
                },
                headerBackgroundContainerStyle:{
                    backgroundColor:'#fff'
                }
            })}
            initialRouteName={'Main'}

        >
            {/* <Drawer.Screen name="HomeMain" component={HomeMainScreen} options={options}/> */}
            <Drawer.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    drawerIcon: (({ color }) => <View style={{ marginLeft: 45, paddingRight: 20 }}><Image source={require('../assets/homeFill.png')} style={{ width: 20, height: 25 }} /></View>),
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveBackgroundColor: '#F7F8F9',
                    drawerActiveTintColor: '#DADADA',
                    drawerInactiveTintColor: '#F7F8F9',
                    drawerInactiveBackgroundColor: '#F7F8F9',


                }}
            />
            <Drawer.Screen
                name="Cart"
                component={TabNavigator}
                options={{
                    drawerIcon: (({ color }) => <View style={{ marginLeft: 45, paddingRight: 20 }}><Image source={require('../assets/cart.png')} style={{ width: 20, height: 25 }} /></View>),
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveBackgroundColor: '#F7F8F9',
                    drawerActiveTintColor: '#DADADA',
                    drawerInactiveTintColor: '#F7F8F9',
                    drawerInactiveBackgroundColor: '#F7F8F9',


                }}
            />
            <Drawer.Screen
                name="Categories"
                component={TabNavigator}
                options={{
                    drawerIcon: (({ color }) => <View style={{ marginLeft: 45, paddingRight: 20 }}><Image source={require('../assets/category.png')} style={{ width: 20, height: 25 }} /></View>),
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveBackgroundColor: '#F7F8F9',
                    drawerActiveTintColor: '#DADADA',
                    drawerInactiveTintColor: '#F7F8F9',
                    drawerInactiveBackgroundColor: '#F7F8F9',


                }}
            />
            <Drawer.Screen
                name="Agri Guidance"
                component={TabNavigator}
                options={{
                    drawerIcon: (({ color }) => <View style={{ marginLeft: 45, paddingRight: 20 }}><Image source={require('../assets/city-guide.png')} style={{ width: 20, height: 25 }} /></View>),
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveBackgroundColor: '#F7F8F9',
                    drawerActiveTintColor: '#DADADA',
                    drawerInactiveTintColor: '#F7F8F9',
                    drawerInactiveBackgroundColor: '#F7F8F9',


                }}
            />
            <Drawer.Screen
                name="Help"
                component={TabNavigator}
                options={{
                    drawerIcon: (({ color }) => <View style={{ marginLeft: 45, paddingRight: 20 }}><Image source={require('../assets/help.png')} style={{ width: 20, height: 25 }} /></View>),
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveBackgroundColor: '#F7F8F9',
                    drawerActiveTintColor: '#DADADA',
                    drawerInactiveTintColor: '#F7F8F9',
                    drawerInactiveBackgroundColor: '#F7F8F9',


                }}
            />
            <Drawer.Screen
                name="Settings"
                component={TabNavigator}
                options={{
                    drawerIcon: (({ color }) => <View style={{ marginLeft: 45, paddingRight: 20 }}><Image source={require('../assets/settings.png')} style={{ width: 20, height: 25 }} /></View>),
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveBackgroundColor: '#F7F8F9',
                    drawerActiveTintColor: '#DADADA',
                    drawerInactiveTintColor: '#F7F8F9',
                    drawerInactiveBackgroundColor: '#F7F8F9',


                }}
            />
            <Drawer.Screen
                name="Logout"
                component={TabNavigator}
                options={{
                    drawerIcon: (({ color }) => <View style={{ marginLeft: 45, paddingRight: 20 }}><Image source={require('../assets/logout.png')} style={{ width: 20, height: 25 }} /></View>),
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveBackgroundColor: '#F7F8F9',
                    drawerActiveTintColor: '#DADADA',
                    drawerInactiveTintColor: '#F7F8F9',
                    drawerInactiveBackgroundColor: '#F7F8F9',


                }}
            />


        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    hideItem: {
        borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 8,
        marginTop: 40,
        display: 'none'
    },
    drawerItem: {
        // borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 8,
        marginTop: 15,
    },
    drawerLabel: {
        alignSelf: 'center',
        marginLeft: -65,
        color: '#393B3D'
    }
})