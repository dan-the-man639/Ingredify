import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import Plus from '../assets/Plus.png'
import BackButton from '../assets/BackButton.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar from '../assets/ProgressBar.png'

export default function SetupScreen({ navigation }) {
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
      <Image source={IngredifyLogo} style={styles.logo}></Image>

      <Text style={styles.title}>Personalize Your Profile</Text>

      <View>
        <Text style={styles.label}>Allergies</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.restriction} onPress={() => setPeanuts(!peanuts)}>
            <Text>Peanuts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restriction} onPress={() => setNuts(!nuts)}>            
            <Text>Nuts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restriction} onPress={() => setEggs(!eggs)}>
            <Text>Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Image source={Plus} style={styles.plus}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.label}>Diseases</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.restriction} onPress={() => setDiabetes(!diabetes)}>
            <Text style={styles.restrictionText}>Diabetes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restriction} onPress={() => setHighBloodPressure(!highBloodPressure)}>
            <Text style={styles.restrictionText}>High Blood Pressure</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.label}>Cultural Restrictions</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.restriction} onPress={() => setHalal(!halal)}>
            <Text style={styles.restrictionText}>Halal</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.label}>Other</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.restriction} onPress={() => setVegetarian(!vegetarian)}>
            <Text style={styles.restrictionText}>Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restriction} onPress={() => setVegan(!vegan)}>
            <Text style={styles.restrictionText}>Vegan</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.bottomContainer}>
        <Image source={ProgressBar} style={styles.progressBar}></Image>

        <TouchableOpacity onPress={() => navigation.navigate("LandingScreen")} style={styles.backButtonWrapper}>
          <Image source={BackButton} style={styles.backButton}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.nextButtonWrapper}>
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
