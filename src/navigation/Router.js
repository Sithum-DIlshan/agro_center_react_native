import HeaderButton from '../components/HeaderButton';
import DetailedView from '../views/DetailedView';
import IndoorPlants from '../views/IndoorPlants';
import MapScreen from '../views/MapScreen';
import RegistrationScreen from '../views/RegistrationScreen';
import WelcomeScreen from '../views/WelcomeScreen';
import DrawerNavigation from './DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegistrationScreen} options={
                ({ navigation, route }) => (
                    {

                        headerLeft: () => (
                            <HeaderButton
                                onPress={() => {
                                    navigation.goBack()
                                }}
                                radius={20}
                            />
                        ),
                        headerTitle: '',
                        headerTransparent: true,
                        // headerTitleAlign: getTitleAlign(route),
                        headerTintColor: '#2E5BD9',
                        headerTitleStyle: {
                            fontFamily: 'Urbanist-Bold',
                            fontSize: 20,
                        },
                        headerStyle: {

                        },
                        // headerTitleContainerStyle:{
                        //     width:width * 0.85
                        // }
                    })
            } />
            <Stack.Screen name="IndoorPlants" component={IndoorPlants} options={
                ({ navigation, route }) => (
                    {

                        headerLeft: () => (
                            <HeaderButton
                                onPress={() => {
                                    navigation.goBack()
                                }}
                                radius={20}
                            />
                        ),
                        headerTitle: 'Indoor Plants',
                        headerTransparent: true,

                        headerTitleAlign: 'center',
                        headerTintColor: '#2E5BD9',
                        headerTitleStyle: {
                            fontFamily: 'Urbanist-Bold',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#325A3E'
                        },
                        headerStyle: {

                        },
                        // headerTitleContainerStyle:{
                        //     width:width * 0.85
                        // }
                    })
            } />

            <Stack.Screen name="DetailedView" component={DetailedView} options={
                ({ navigation, route }) => (
                    {

                        headerLeft: () => (
                            <HeaderButton
                                onPress={() => {
                                    navigation.goBack()
                                }}
                                radius={20}
                            />
                        ),
                        headerTitle: '',
                        headerTransparent: true,

                        headerTitleAlign: 'center',
                        headerTintColor: '#2E5BD9',
                        headerTitleStyle: {
                            fontFamily: 'Urbanist-Bold',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#325A3E'
                        },
                        headerStyle: {

                        },
                        // headerTitleContainerStyle:{
                        //     width:width * 0.85
                        // }
                    })
            } />


            <Stack.Screen name="MapScreen" component={MapScreen} options={
                ({ navigation, route }) => (
                    {

                        headerLeft: () => (
                            <HeaderButton
                                onPress={() => {
                                    navigation.goBack()
                                }}
                                radius={20}
                            />
                        ),
                        headerTitle: 'Location',
                        headerTransparent: true,

                        headerTitleAlign: 'center',
                        headerTintColor: '#2E5BD9',
                        headerTitleStyle: {
                            fontFamily: 'Urbanist-Bold',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#000'
                        },
                        headerStyle: {

                        },
                        // headerTitleContainerStyle:{
                        //     width:width * 0.85
                        // }
                    })
            } />
        </Stack.Navigator>
    );
}
