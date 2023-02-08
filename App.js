import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})