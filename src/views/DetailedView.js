import { StyleSheet, Text, View, useWindowDimensions, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const bgImage = require('../assets/Rectangle.png')
const plant1 = require('../assets/plant1.png')


export default function DetailedView() {
    const { width, height } = useWindowDimensions()
    const navigation = useNavigation()
    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground source={bgImage} resizeMode="cover" style={{ height: 200, borderBottomEndRadius: 49, borderBottomStartRadius: 49, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>

                </ImageBackground>
                <View style={{ width: width, justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', top: 0 }}>
                    <Image source={plant1} style={{ width: width * 0.5, height: width * 0.5, }} />
                </View>

                <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#325A3E' }}>Aloe Vera</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000' }}>Rs. 300.00</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')} style={{ width: 100, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9ED854' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Location</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 20, padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#666666', marginTop: 10 }}>About the Plant</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: '#666666' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</Text>

                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#666666', marginTop: 30 }}>How to Care</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: '#666666' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</Text>

                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#666666', marginTop: 30 }}>Rating & Reviews</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: '#666666' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</Text>
                </View>
            </ScrollView>
            <View style={{ width: width, height: height * 0.1, flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 2, backgroundColor: '#02108C', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={require('../assets/Vector.png')} style={{ width: 20, height: 20, marginRight: 20 }} />
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Added</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 2, backgroundColor: '#069F03', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Buy</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}

const styles = StyleSheet.create({})