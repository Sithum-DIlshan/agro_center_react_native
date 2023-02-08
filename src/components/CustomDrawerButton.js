import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawerButton(props) {
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();

    // useEffect(() => {
    //         console.log(props);
    // })
    return (
            <TouchableOpacity
                style={styles.button}
                onPress={props.onPress}
            >
                <Image source={require('../assets/drawer.png')} style={{ width: 25, height: 20, }} />

            </TouchableOpacity>

        

    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        // margin: 10,
        borderRadius: 41 / 2
    },
    button: {
        width: 50,
        height: 50,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        borderRadius: 15,
        // marginTop: 40
        // margin: 10
        borderWidth: 1,
        borderColor: '#E8ECF4',
        marginTop:10
    },
    buttonInnerText: {
        fontFamily: 'Urbanist-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '#FFFFFF'
    }
})