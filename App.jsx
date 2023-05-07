import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LandingScreen from './screens/LandingScreen.jsx'
import SetupScreen from './screens/SetupScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import NamingScreen from './screens/NamingScreen.jsx'
import ItemScreen from './screens/ItemScreen.jsx'
import CameraScreen from './screens/CameraScreen.jsx'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Baloo2: require('./assets/fonts/Baloo2-VariableFont_wght.ttf'),
    RB: require('./assets/fonts/Roboto-Black.ttf'),
    RL: require('./assets/fonts/Roboto-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SetupScreen"
          component={SetupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="NamingScreen"
          component={NamingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ItemScreen"
          component={ItemScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="CameraScreen"
          component={CameraScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
