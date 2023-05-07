import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import Plus from '../assets/Plus.png'
import BackButton from '../assets/BackButton.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar from '../assets/ProgressBar.png'
import ProfileImage from '../assets/IngredifyLogo.png'



export default function HomeScreen({ navigation }) {
  const [peanuts, setPeanuts] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [eggs, setEggs] = useState(false);

  const [diabetes, setDiabetes] = useState(false);
  const [highBloodPressure, setHighBloodPressure] = useState(false);

  const [halal, setHalal] = useState(false);

  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePicture}>
          <Image source={ProfileImage} style={styles.profileImage}></Image>
        </View>
        <View style={styles.headerTextSection}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.name}>Ri Hong</Text>
        </View>
      </View>


      <View style={styles.section}>
        <Text style={styles.title}>Fact of the Day</Text>
        <View style={styles.factBox}>
          <Text style={styles.factTitle}>Halal</Text>
          <Text style={styles.factText}>Lorem ipsum dolor sit amet consectetur. Posuere aliquam sem quis eget lectus posuere.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>What I ate today</Text>
        <View style={styles.factBox}>
          <View style={styles.foodItem}>
            <Text style={styles.foodName}>Coca-Cola</Text>
            <Text style={styles.time}>11:59 am</Text>
          </View>
        </View>
      </View>
    


      <View style={styles.bottomContainer}>
        <Image source={ProgressBar} style={styles.progressBar}></Image>

        <TouchableOpacity onPress={() => navigation.navigate("LandingScreen")} style={styles.backButtonWrapper}>
          <Image source={BackButton} style={styles.backButton}></Image>
        </TouchableOpacity>

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
  },
});
