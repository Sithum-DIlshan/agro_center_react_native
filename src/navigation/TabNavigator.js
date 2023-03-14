import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeMain from '../views/HomeMain';
import { Image } from 'react-native'
import ProfileView from '../views/ProfileView';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{
        headerShown: false,
        tabBarIcon: (({ color }) => <Image source={require('../assets/home.png')} style={{ width: 23, height: 26, tintColor: '#cccccc' }} />),
        tabBarLabel: '',
      }} component={HomeMain} />
      <Tab.Screen name="Favorites" options={{
        headerShown: false,
        tabBarIcon: (({ color }) => <Image source={require('../assets/heart.png')} style={{ width: 23, height: 26, tintColor: '#313131' }} />),
        tabBarLabel: '',
      }} component={HomeMain} />
      <Tab.Screen name="Cart" options={{
        headerShown: false,
        tabBarIcon: (({ color }) => <Image source={require('../assets/bottomCart.png')} style={{ width: 23, height: 26, tintColor: '#313131' }} />),
        tabBarLabel: '',
      }} component={HomeMain} />
      <Tab.Screen name="Profile" options={{
        headerShown: false,
        tabBarIcon: (({ color }) => <Image source={require('../assets/profile.png')} style={{ width: 23, height: 26, tintColor: '#313131' }} />),
        tabBarLabel: '',
      }} component={ProfileView} />


      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}