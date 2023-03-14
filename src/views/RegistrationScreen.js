import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



export default function RegistrationScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:50, marginTop:50}}>
                <Text style={[styles.textCommon, { color: '#000' }]}>Registration</Text>
                <Text style={{ color: '#A5AFA8', fontSize: 20, fontWeight: '700', }}>Create your new account</Text>
            </View>

            <View style={{ alignItems: 'center', }}>
                <View style={{
                    height: height * 0.067,
                    width: width * 0.9,
                    backgroundColor: '#F0F0F0',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginBottom: 10
                }}>
                    <Image source={require('../assets/user.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Full Name"
                        
                        placeholderTextColor={'#999898'}
                    />
                </View>
                <View style={{
                    height: height * 0.067,
                    width: width * 0.9,
                    backgroundColor: '#F0F0F0',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginBottom: 10

                }}>
                    <Image source={require('../assets/mail.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Email"
                        
                        placeholderTextColor={'#999898'}
                    />
                </View>
                <View style={{
                    height: height * 0.067,
                    width: width * 0.9,
                    backgroundColor: '#F0F0F0',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginBottom: 10

                }}>
                    <Image source={require('../assets/lock.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Password"
                        
                        placeholderTextColor={'#999898'}
                        secureTextEntry
                    />
                </View>
                <View style={{
                    height: height * 0.067,
                    width: width * 0.9,
                    backgroundColor: '#F0F0F0',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginBottom: 10

                }}>
                    <Image source={require('../assets/lock.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Confirm Password"
                        
                        placeholderTextColor={'#999898'}
                        secureTextEntry
                    />
                </View>
                <View style={{
                    height: height * 0.067,
                    width: width * 0.9,
                    backgroundColor: '#F0F0F0',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginBottom: 20

                }}>
                    <Image source={require('../assets/contact.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Contact No"
                        
                        placeholderTextColor={'#999898'}
                    />
                </View>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center', }}>
                <Text style={{ marginTop: 20, width:276,textAlign:'center'}}>
                    <Text style={{ fontSize: 14, color: '#325A3E', fontWeight: '500',  }}>By signing you agree to our </Text>
                    <Text style={{ fontSize: 14, color: '#999999', fontWeight: '500', }}>term of use and privacy notice</Text>
                </Text>
                <TouchableOpacity style={{ borderRadius: 50, width: width * 0.9, height: height * 0.075, backgroundColor: '#325A3E', marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: '700' }}>Sign up</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 14, color: '#999999', fontWeight: '500' }}>already have an account?  </Text>
                    <Text style={{ fontSize: 14, color: '#325A3E', fontWeight: '500', }}>Login</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textCommon: {
        fontSize: 35,
        fontWeight: '700',
    },
    input: {
        height: height * 0.067,
        width: width * 0.8,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F0F0F0',

    },
})