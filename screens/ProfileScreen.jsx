import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import ProfilePicture from '../assets/LogoJustPicture.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar from '../assets/ProgressBar.png'
import LandingImage from '../assets/LandingImage.png'
import GradientDiagonal from '../assets/GradientDiagonal.png'


export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.profileCard}>
        <Image style={styles.profilePicture} source={ProfilePicture}></Image>
        <Text style={styles.name}>Ri Hong</Text>
      </View>

      {/* REPLACE THIS WITH THE SELECTION THINGS FROM SETUPSCREEN ONCE DONE */}

      {/* REPLACE THIS WITH THE NAVBAR FROM HOMESCREEN AND CHANGE OUT THE ICONS ONCE DONE */}

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
    fontFamily: 'RL',
    // fontWeight: 600,
    fontSize: 40,
    lineHeight: 45,
  },
  forYou: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 40,
    lineHeight: 45,
  },
  description: {
    color: '#CCF9FF',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 16,
  }
});
