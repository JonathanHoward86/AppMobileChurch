import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import VideoLibraryScreen from './screens/VideoLibraryScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RedFrameDetailsScreen from './screens/RedFrameDetailsScreen';
import BlackFrameDetailsScreen from './screens/BlackFrameDetailsScreen';
import BibleScreen from './screens/BibleScreen';
import EventsScreen from './screens/EventsScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LandingStack = () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen name="Landing" component={LandingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="RedFrameDetails" component={RedFrameDetailsScreen} />
    <Stack.Screen name="BlackFrameDetails" component={BlackFrameDetailsScreen} />
    {/* Add more screens here */}
  </Stack.Navigator>
);

const SermonsTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="SermonsTab" component={VideoLibraryScreen} />
    {/* Add more screens for Sermons tab */}
  </Stack.Navigator>
);  2

const EventsTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventsTab" component={EventsScreen} />
    {/* Add more screens for Events tab */}
  </Stack.Navigator>
);

const BibleTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="BibleTab" component={BibleScreen} />
    {/* Add more screens for Bible tab */}
  </Stack.Navigator>
);

const App = () => {
 
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
          style: {
            backgroundColor: 'white', // Background color of the tab bar
          },
          labelStyle: {
            fontSize: 16,
          },
        }}
        >
        <Tab.Screen
          name="Home"
          component={LandingStack}
          options={{
            tabBarLabel: 'Landing',
            tabBarIcon: ({ color, size }) => (
              <Text style={{color, fontSize: size}}>Home</Text>
            ),
          }}
        />
        <Tab.Screen name="Sermons" component={SermonsTab} />
        <Tab.Screen name="Events" component={EventsTab} />
        <Tab.Screen name="Bible" component={BibleTab} />
        {/* Add more tab screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
