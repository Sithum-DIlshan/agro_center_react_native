import { StyleSheet, ScrollView, Text, useWindowDimensions, TouchableOpacity, View, Image, TextInput, ActivityIndicator, ToastAndroid, Alert } from 'react-native'
import React, { useMemo, useState } from 'react'
import Button from '../components/Button';
import { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    SlideInRight,
    StretchInY,
    FadeIn,
    BounceInDown,
    FadeOut,
    BounceIn
} from 'react-native-reanimated';


const user = require('../assets/user1.png')

export default function ProfileView() {
    const { height, width } = useWindowDimensions();


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ marginTop: 100 }} contentContainerStyle={{ flexDirection: 'column', alignItems: 'center', }}>
                <View style={{ width: 150, height: 150, borderRadius: 200, justifyContent: 'flex-end', backgroundColor: 'grey' }}>
                    <Image style={{ width: 150, height: 150, borderRadius: 150, position: 'absolute' }} source={user} />
                    <Animated.View
                        // accessibilityState={isVisible}
                        entering={BounceIn.duration(500)}
                        style={{ alignSelf: 'center', position: 'absolute', }}
                    >
                        <TouchableOpacity style={{ width: 70, height: 20, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, justifyContent: 'center', alignItems: 'center', }}>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <TextInput
                    style={[styles.input, { width: width * 0.85 }]}
                    placeholder="User Name"
                    placeholderTextColor={"#8391A1"}
                />
                <TextInput
                    style={[styles.input, { width: width * 0.85 }]}
                    placeholder="Email I'd"
                    placeholderTextColor={"#8391A1"}
                />

                <TextInput
                    style={[styles.input, { width: width * 0.85 }]}
                    placeholder="Phone Number"
                    placeholderTextColor={"#8391A1"}
                    // onChangeText={text => setEmail(text)}
                    editable={false}
                />
                <TextInput
                    style={[styles.input, { width: width * 0.85 }]}
                    placeholder="Password"
                    placeholderTextColor={"#8391A1"}
                    secureTextEntry
                />
                <View style={{ margin: 10 }}>
                </View>
                <View>
                    <Button title={"Update"} onPress={() => Alert.alert('press')} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Button title={"Set Security Questions"} onPress={() => Alert.alert('press')} />
                </View>
                {/* <ActivityIndicator style={{ marginTop: VERTICAL_MEASUREMENTS.GAP_2X }} animating={updateProfileLoading || fileUploadLoading} size="large" color="#0000ff" /> */}

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 56,
        borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 8,
        color: "#000",
        paddingLeft: 20,
        fontFamily: 'Quicksand-Medium',
        fontSize: 16,
        margin: 10,
        backgroundColor: '#f7f8f9'
    },
    phoneNumberWrapper: {
        height: 56,
        borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 8,
        color: "#DADADA",
        // paddingLeft: 20,
        fontFamily: 'Quicksand-Medium',
        fontSize: 16,
        margin: 10,
        backgroundColor: '#f7f8f9',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    titleText: {
        color: "#000",
        fontSize: 25,
        marginBottom: 25,
        fontWeight: "bold",
    },
    pickerTitleStyle: {
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "center",
        fontWeight: "bold",
    },
    pickerStyle: {
        // position: 'absolute',
        height: 50,
        width: 80,
        marginVertical: 10,
        borderColor: "#303030",
        alignItems: "center",
        marginHorizontal: 10,
        padding: 10,
        // backgroundColor: "white",
        borderRadius: 5,
        fontSize: 16,
        color: "#000",
    },
    selectedCountryTextStyle: {
        paddingLeft: 5,
        color: "#000",
        textAlign: "right",
    },

    countryNameTextStyle: {
        paddingLeft: 10,
        color: "#000",
        textAlign: "right",
    },

    searchBarStyle: {
        flex: 1,
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
    },
    fadingText: {
        fontSize: 28,
    },
})