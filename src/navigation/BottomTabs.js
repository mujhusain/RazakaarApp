import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#CCC' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'user'
                : 'user';
            } else if (route.name === 'Search') {
              iconName = focused
                ? 'search'
                : 'search';
            } else if (route.name === 'Favorites') {
              iconName = focused
                ? 'envelope'
                : 'envelope'
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
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favorites" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}