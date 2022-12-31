
// Import React and Component
import React from 'react';

import 'react-native-gesture-handler';
// Import Navigators from React Navigation
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import Splashscreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import { WelcomeScreen} from './src/screens/WelcomeScreen';
import { BottomTabs } from './src/navigation/BottomTabs';
import CheckOut from './src/screens/CheckOut';
import EventDetails from './src/screens/EventDetails';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupScreen"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="BottomTabs">
      {/* <Stack.Navigator initialRouteName="Checkout"> */}
        {/* SplashScreen which will come once for 2 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={Splashscreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation  for landing page */}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        {/* Navigation for bottom tabs navigation */}
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        {/* Checkout screen navigation */}
        <Stack.Screen
          name="Checkout"
          component={CheckOut}
          options={{ headerShown: false }}
        />

        {/* Event Details screen navigation */}
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;