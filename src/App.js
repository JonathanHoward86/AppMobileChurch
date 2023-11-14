import React from 'react';
import { Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import VideoLibraryScreen from './screens/VideoLibraryScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RedFrameDetailsScreen from './screens/RedFrameDetailsScreen';
import BlackFrameDetailsScreen from './screens/BlackFrameDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BibleScreen from './screens/BibleScreen';
import CalendarScreen from './screens/CalendarScreen';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem('userId');
    console.log("Reading from AsyncStorage:", value);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error("Error reading userId from AsyncStorage:", e);
  }
  return null;
}

export const storeUserId = async (userId) => {
  try {
    await AsyncStorage.setItem('userId', userId.toString());
    console.log(`Successfully stored userId: ${userId}`);
  } catch (e) {
    console.error("Error saving userId to AsyncStorage:", e);
  }
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LandingStack = () => (
    <Stack.Navigator 
      initialRouteName="Landing"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black', // choose your header color
        },
        headerTintColor: 'white', // choose your header text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
    <Stack.Screen 
      name="Landing" 
      component={LandingScreen}
    />
    <Stack.Screen 
      name="Login" 
      component={LoginScreen} 
    />
    <Stack.Screen 
      name="Register" 
      component={RegisterScreen}
    />
    <Stack.Screen 
      name="RedFrameDetails" 
      component={RedFrameDetailsScreen}
    />
    <Stack.Screen 
      name="BlackFrameDetails" 
      component={BlackFrameDetailsScreen}
    />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    {/* Add other screens if necessary */}
  </Stack.Navigator>
);

const SermonsTab = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="SermonsTab" 
      component={VideoLibraryScreen} 
      options={{ title: ''}}
    />
  </Stack.Navigator>
);

const CalendarTab = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="CalendarTab" 
      component={CalendarScreen}
      options={{ title: ''}} 
    />
  </Stack.Navigator>
);

const BibleTab = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="BibleTab" 
      component={BibleScreen}
      options={{ title: ''}}
    />
  </Stack.Navigator>
);

const ProfileTab = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ProfileScreen" 
      component={ProfileScreen}
      options={{ title: ''}}
    />
  </Stack.Navigator>
);

const CustomTabBarIcon = () => {
  return (
    <Image
      source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocLkNhVRLMa6pnYYh00Ilex0G7fTdsul4G_U6-El0W7c8kc=s83-c-mo' }}
      style={{ width: 30, height: 30, borderRadius: 15 }}
    />
  );
};

export const addEvent = async (userId, eventName, eventDate, eventTime) => {  // Added eventTime
  try {
    const response = await axios.post('/addEvent', { userId, eventName, eventDate, eventTime });  // Added eventTime
    console.log(response.data.message);
    console.log("Event added:", response.data.message);  // Changed from result to response.data.message
  } catch (error) {
    console.error("Error adding event:", error);
  }
};

const TAB_LABEL_FONT_SIZE = 16;
const PROFILE_TAB_LABEL_FONT_SIZE = 14;
const TAB_BAR_FONT_WEIGHT = 'bold';

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white', // Active (selected) tab label and icon color
          tabBarInactiveTintColor: 'grey', // Inactive (unselected) tab label and icon color
          tabBarStyle: {
            backgroundColor: 'black', // Tab bar background color
          },
        }}
      >
        <Tab.Screen
          name="Landing"
          component={LandingStack}
          options={{
            tabBarLabel: '', //Hide the label
            tabBarIcon: ({ color }) => (
              <Text style={{ color, fontSize: TAB_LABEL_FONT_SIZE, fontWeight: TAB_BAR_FONT_WEIGHT }}>Home</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Sermons" 
          component={SermonsTab}
          options={{
            tabBarLabel: '', //Hide the label
            tabBarIcon: ({ color }) => (
              <Text style={{ color, fontSize: TAB_LABEL_FONT_SIZE, fontWeight: TAB_BAR_FONT_WEIGHT }}>Sermons</Text>
            ),
          }}
         />
        <Tab.Screen 
          name="Calendar" 
          component={CalendarTab}
          options={{
            tabBarLabel: '', //Hide the label
            tabBarIcon: ({ color }) => (
              <Text style={{ color, fontSize: TAB_LABEL_FONT_SIZE, fontWeight: TAB_BAR_FONT_WEIGHT }}>Calendar</Text>
            ),
          }}
         />
        <Tab.Screen 
          name="Bible" 
          component={BibleTab}
          options={{
            tabBarLabel: '', //Hide the label
            tabBarIcon: ({ color }) => (
              <Text style={{ color, fontSize: TAB_LABEL_FONT_SIZE, fontWeight: TAB_BAR_FONT_WEIGHT }}>Bible</Text>
            ),
          }}
         />
        <Tab.Screen
          name="Login"
          component={LoginStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Text style={{ color, fontSize: TAB_LABEL_FONT_SIZE, fontWeight: TAB_BAR_FONT_WEIGHT }}>Login</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileTab}
          options={{
            tabBarLabel: '', // Hide the label
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: 'center' }}>
                <CustomTabBarIcon />
                <Text style={{ color, fontSize: PROFILE_TAB_LABEL_FONT_SIZE, fontWeight: TAB_BAR_FONT_WEIGHT }}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;