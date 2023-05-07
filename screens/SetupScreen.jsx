import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import Plus from '../assets/Plus.png'
import BackButton from '../assets/BackButton.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar2 from '../assets/ProgressBar2.png'
import GradientDiagonal from '../assets/GradientDiagonal.png'

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
      <Image source={GradientDiagonal} style={styles.backgroundImage}></Image>
      
      <Image source={IngredifyLogo} style={styles.logo}></Image>

      <Text style={styles.title}>Personalize Your Profile</Text>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Allergies</Text>
        <View style={styles.options}>
          <TouchableOpacity style={peanuts ? styles.restrictionOn : styles.restrictionOff} onPress={() => setPeanuts(!peanuts)}>
            <Text style={peanuts ? styles.restrictionTextOn : styles.restrictionTextOff}>Peanuts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={nuts ? styles.restrictionOn : styles.restrictionOff} onPress={() => setNuts(!nuts)}>            
            <Text style={nuts ? styles.restrictionTextOn : styles.restrictionTextOff}>Nuts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={eggs ? styles.restrictionOn : styles.restrictionOff} onPress={() => setEggs(!eggs)}>
            <Text style={eggs ? styles.restrictionTextOn : styles.restrictionTextOff}>Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Diseases</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.restriction} onPress={() => setDiabetes(!diabetes)}>
            <Text style={styles.restrictionText}>Diabetes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restriction} onPress={() => setHighBloodPressure(!highBloodPressure)}>
            <Text style={styles.restrictionText}>High Blood Pressure</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Cultural Restrictions</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.restriction} onPress={() => setHalal(!halal)}>
            <Text style={styles.restrictionText}>Halal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Other Restrictions</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.restriction} onPress={() => setVegetarian(!vegetarian)}>
            <Text style={styles.restrictionText}>Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restriction} onPress={() => setVegan(!vegan)}>
            <Text style={styles.restrictionText}>Vegan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.bottomContainer}>
        <Image source={ProgressBar2} style={styles.progressBar}></Image>

        <View style={styles.bottomButtons}>
          <TouchableOpacity onPress={() => navigation.navigate("LandingScreen")} style={styles.backButtonWrapper}>
            <Image source={BackButton} style={styles.backButton}></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.nextButtonWrapper}>
            <Image source={NextButton} style={styles.nextButton}></Image>
          </TouchableOpacity>
        </View>

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
    justifyContent: 'flex-start',
    backgroundColor: '#0E3B4C',
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 30
  },
  title: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 40,
    lineHeight: 45,
    alignSelf: 'stretch',
  },
  conditionContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  label: {
    color: '#7BC55E',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 45,
    alignSelf: 'stretch',
  },
  options: {
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
  },
  restriction: {
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10
  },
  restrictionOn: {
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: '#F1F1F1'
  },
  restrictionOff: {
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10
  },
  plus: {
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 14,
    gap: 10,
  },
  restrictionText: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 14,
  },
  restrictionTextOn: {
    color: '#0E3B4C',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 14,
  },
  restrictionTextOff: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 14,
  },
  plusText: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 24,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  bottomButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  }
});
