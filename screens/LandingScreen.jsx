import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar from '../assets/ProgressBar.png'
import LandingImage from '../assets/LandingImage.png'
import GradientDiagonal from '../assets/GradientDiagonal.png'


export default function LandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={GradientDiagonal} style={styles.backgroundImage}></Image>
      <View style={styles.topContainer}>
        <Image source={IngredifyLogo} style={styles.logo}></Image>
        <View style={styles.landingImageContainer}>
          <Image source={LandingImage} style={styles.landingImage}></Image>
        </View>

        <View style={styles.textContainer}>
          <View>
            <Text style={styles.discoverFood}>Discover food</Text>
            <Text style={styles.forYou}>for you</Text>
          </View>
          <Text style={styles.description}>Ingredify is here to help you find what foods you can eat.</Text>
        </View>

      </View>
      
      
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
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1000,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E3B4C',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  topContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 30,
  },
  landingImageContainer: {
    alignSelf: 'stretch',
    aspectRatio: 1/1,
    overflow: 'hidden',
    borderRadius: 30,
  },
  landingImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    alignSelf: 'stretch',
    borderWidth: 2,
    // aspectRatio: 1/1
  },
  textContainer: {
    alignSelf: 'stretch',
    gap: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  discoverFood: {
    color: '#7BC55E',
    fontFamily: 'Baloo 2',
    fontWeight: 600,
    fontSize: 40,
    lineHeight: 45,
  },
  forYou: {
    color: '#F1F1F1',
    fontFamily: 'Baloo 2',
    fontWeight: 600,
    fontSize: 40,
    lineHeight: 45,
  },
  description: {
    color: '#CCF9FF',
    fontFamily: 'Baloo 2',
    fontWeight: 600,
    fontSize: 16,
  }
});
