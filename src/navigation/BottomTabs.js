import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Settings from '../screens/Settings';
import UserProfile from '../screens/UserProfile';
import Bookmarked from '../screens/Bookmarked';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{ showLabel: false }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'User_Profile') {
              iconName = focused
                ? 'user'
                : 'user-o';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'search'
                : 'search';
            } else if (route.name === 'Bookmarked') {
              iconName = focused
                ? 'bookmark'
                : 'bookmark-o';
            } else if (route.name === 'Favorites') {
              iconName = focused
                ? 'heart'
                : 'heart-o'
            }
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Bookmarked" component={Bookmarked} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="User_Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}