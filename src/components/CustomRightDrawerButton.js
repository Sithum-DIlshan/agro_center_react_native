import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const bgImage = require('../assets/nevSlider.webp')

export default function CustomRightDrawerButton(props) {
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    const [imgProfile, setImgProfile] = useState()


   

    return (
        // <View style={{ position: 'absolute', padding: 10, paddingTop: height * 0.05,  flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Your Profile")}>
            <Image source={require('../assets/leaf.png')} style={{ width: 50, height: 50 }} />

            </TouchableOpacity>

        // </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: 'center',
        // margin: 10,
        borderRadius: 50 / 2
    },
    button: {
        width: 50,
        height: 50,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        borderRadius: 41,
        marginTop: 10
        // margin: 10
    },
    buttonInnerText: {
        fontFamily: 'Urbanist-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '#FFFFFF'
    }
})