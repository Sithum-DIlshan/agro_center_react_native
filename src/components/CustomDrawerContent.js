import { StyleSheet, ImageBackground, Text, useWindowDimensions, View, Image } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

const bgImage = require('../assets/nevSlider.webp')

export default function CustomDrawerContent(props) {
    const { height, width } = useWindowDimensions();

    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props} contentContainerStyle={{
                paddingTop: 0
            }} >
                <View  style={{ height: 260, overflow: 'hidden', backgroundColor:'#325A3E' }}>
                    <View style={styles.headerWrapper}>
                        {/* <Logo width={112} height={112} /> */}
                        <Image source={require('../assets/leaf.png')} style={{ width: 150, height: 150, marginBottom:20 }} />
                        <Text style={styles.headerTitle}>Akila Dhambure</Text>
                        <Text style={styles.headerBase}>Edit Profile</Text>

                    </View>
                </View>
                <DrawerItemList {...props} />
                {/* <DrawerItem
                    label="Help"
                    // onPress={() => props.navigation.navigate('HomeMain')}
                    icon={}
                    style={{ borderWidth: 1, borderColor: '#DADADA', borderRadius: 8, }}
                /> */}
            </DrawerContentScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    headerWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 700,
        fontFamily: 'Urbanist-Bold',
        color: '#FFFFFF'
    },
    headerBase: {
        fontSize: 15,
        fontWeight: 700,
        fontFamily: 'Urbanist-Bold',
        color: '#FFFFFF'
    }
})