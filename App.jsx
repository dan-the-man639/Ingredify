import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LandingScreen from './screens/LandingScreen.jsx'
import SetupScreen from './screens/SetupScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Baloo2: require('./assets/fonts/Baloo2-VariableFont_wght.ttf'),
    Baloo2Bold: require('./assets/fonts/BoldBaloo2-VariableFont_wght.ttf'),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
