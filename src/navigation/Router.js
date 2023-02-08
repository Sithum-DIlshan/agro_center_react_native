import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButton from '../components/HeaderButton';
import RegistrationScreen from '../views/RegistrationScreen';
import WelcomeScreen from '../views/WelcomeScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

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
        </Stack.Navigator>
    );
}
