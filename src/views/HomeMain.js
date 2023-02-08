import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PlantVarientCard from '../components/PlantVarientCard'
const vegImg = require('../assets/vege.png')
const outdoor = require('../assets/outdoorPlant.png')
const indoor = require('../assets/indoorPlant.png')

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function HomeMain() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ marginTop: 100 }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', width: width }}>
        <View style={{ width: width * 0.8, marginBottom: 10, }}>
          <Text style={{ fontSize: 18, color: '#325A3E', fontWeight: '700' }}>Let’s find your Items!</Text>
        </View>
        <View style={{
          height: height * 0.067,
          width: width * 0.8,
          backgroundColor: '#F0F0F0',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: 10,
          marginBottom: 10,
          paddingLeft: 10
        }}>
          <Image source={require('../assets/search.png')} style={{ width: 15, height: 17, }} />
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Search"
            keyboardType="numeric"
            placeholderTextColor={'#999898'}
          />
        </View>
        <PlantVarientCard image={vegImg} title={'Vegitables'} />
        <PlantVarientCard image={vegImg} title={'Fruits'} />
        <PlantVarientCard image={outdoor} title={'OutDoorPlants'} />
        <PlantVarientCard image={indoor} title={'InDoor Plants'} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: height * 0.067,
    width: width * 0.8,
    // margin: 12,
    // padding: 10,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    paddingLeft: 20,
    color:'#000'

  },
})