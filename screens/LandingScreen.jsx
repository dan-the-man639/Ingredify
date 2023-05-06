import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar from '../assets/ProgressBar.png'


export default function LandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={IngredifyLogo} style={styles.logo}></Image>

      <View style={styles.textContainer}>
        <Text style={styles.discoverFood}>Discover Food</Text>
        <Text style={styles.forYou}>for you</Text>
      </View>

      <Text style={styles.description}>Ingredify is here to help you find what foods you can eat.</Text>
      
      
      <View style={styles.bottomContainer}>
      <Image source={ProgressBar} style={styles.progressBar}></Image>

      <TouchableOpacity onPress={() => navigation.navigate("SetupScreen")} style={styles.nextButtonWrapper}>
        <Image source={NextButton} style={styles.nextButton}></Image>
      </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
