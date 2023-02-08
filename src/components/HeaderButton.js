import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'

export default function HeaderButton({ onPress, radius }) {
    const { width, height } = useWindowDimensions();
    return (
        <TouchableOpacity
            style={[styles.button, { borderRadius: radius, }]}
            onPress={onPress}
        >
            <Image source={require('../assets/arrow.png')} style={{ width: 10, height: 15, }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 41,
        height: 41,
        alignItems: "center",
        backgroundColor: "#EFEAEA",
        justifyContent: 'center',
        // marginLeft: 20
        // marginTop: 40,
        // margin:10
    },
    buttonInnerText: {
        fontFamily: 'Urbanist-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '#FFFFFF'
    }
})