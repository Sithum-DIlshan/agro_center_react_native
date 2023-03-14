import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Button({ onPress, title, color, isDisabled }) {
    const { width, height } = useWindowDimensions();
    return (
        <TouchableOpacity
            style={[styles.button, { width: width * 0.7, backgroundColor: ' ' }]}
            onPress={onPress}
            disabled={isDisabled == null ? false : isDisabled}
        >
            <Text style={styles.buttonInnerText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 46,
        alignItems: "center",

        justifyContent: 'center',
        borderRadius: 15,
        // marginTop: 40
    },
    buttonInnerText: {
        fontFamily: 'Urbanist-Regular',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF'
    }
})