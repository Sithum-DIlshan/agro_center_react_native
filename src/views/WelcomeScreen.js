import { Alert, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function WelcomeScreen() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const onChangeName = (text) => {
        setName(text)
    }

    const onChangePassword = (text) => {
        setPassword(text)
    }

    const navigation = useNavigation()

    const onPressLogin = () => {
        if (name == 'Akila' && password == 'akila123') {
            navigation.navigate("Drawer")
        } else {
            Alert.alert('Wrong details try again ...')
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled >
            <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('../assets/leaf.png')} style={{ width: 202, height: 202, marginBottom: 20, marginTop: 30 }} />
                    <Text>
                        <Text style={[styles.textCommon, { color: '#000' }]}>Agri </Text>
                        <Text style={[styles.textCommon, { color: '#3A7F0D' }]}>Market</Text>
                    </Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Image source={require('../assets/welcome.png')} style={{ width: 177, height: 54, marginBottom: 20, marginTop: 30 }} />
                    <Text style={{ color: '#A6A6A6', fontSize: 16, fontWeight: '700' }}>Login to your account</Text>

                    <View style={{
                        height: height * 0.067,
                        width: width * 0.9,
                        backgroundColor: '#E1E5E2',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        borderRadius: 10,
                        margin: 30
                    }}>
                        <Image source={require('../assets/user.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder="Full Name"
                            placeholderTextColor={'#999898'}
                        />

                    </View>

                    <View style={{
                        height: height * 0.067,
                        width: width * 0.9,
                        backgroundColor: '#E1E5E2',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        borderRadius: 10,
                    }}>
                        <Image source={require('../assets/lock.png')} style={{ width: 20, height: 20, marginLeft: 20 }} />

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            placeholderTextColor={'#999898'}
                            secureTextEntry
                        />

                    </View>

                </View>

                <View style={{ marginTop: 20, alignItems: 'center', }}>
                    <View style={{ width: width * 0.9, alignItems: 'flex-end', justifyContent: 'flex-start', }}>
                        <Text style={{ fontSize: 14, color: '#325A3E' }}>Forget Password?</Text>
                    </View>
                    <TouchableOpacity onPress={onPressLogin} style={{ borderRadius: 50, width: width * 0.9, height: height * 0.075, backgroundColor: '#325A3E', marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity >
                    <Text style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 14, color: '#999999', fontWeight: '700' }}>Don???t have an account?  </Text>
                        <Text style={{ fontSize: 14, color: '#325A3E', fontWeight: '700' }} onPress={() => navigation.navigate("Register")}>Sign up</Text>
                    </Text>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    textCommon: {
        fontSize: 25,
        fontWeight: '700',
    },
    input: {
        height: height * 0.067,
        width: width * 0.8,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#E1E5E2',
        color: '#000'
    },
    container: {
        flex: 1,
    },
})