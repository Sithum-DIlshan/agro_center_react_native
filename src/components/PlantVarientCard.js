import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function PlantVarientCard({image, title}) {
    const { width, height } = useWindowDimensions()

    return (
        <View style={{ width: width * 0.95, height: 130, alignSelf: 'center', backgroundColor: '#E8F5EE', borderRadius: 20, flexDirection: 'row', margin:5 }}>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', }}>
                <Image source={image} style={{ width: 90, height: 120 }} />
            </View>
            <View style={{ flex: 4, justifyContent: 'flex-start', marginTop: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: '500', color: '#3B7254' }}>{title}</Text>
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#9D9999' }}>Lorem ipsum</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                <TouchableOpacity style={{width:75, height:40, backgroundColor:'#325A3E', alignItems:'center', justifyContent:'center', borderRadius: 5,}}>
                    <Text style={{color:'#fff', fontWeight:'500', fontSize:16, }}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})