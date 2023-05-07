import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { StateContext } from '../App';

import ProfilePictureBigger from '../assets/ProfilePictureBigger.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar from '../assets/ProgressBar.png'
import LandingImage from '../assets/LandingImage.png'
import GradientDiagonal from '../assets/GradientDiagonal.png'


import ProfileImage from '../assets/ProfilePicture.png'
import CameraButton from '../assets/CameraButton.png'
import HomeButton from '../assets/HomeButton.png'
import ProfileButtonSelected from '../assets/ProfileButtonSelected.png'
import GradientVertical from '../assets/GradientVertical.png'



export default function ProfileScreen({ navigation }) {
  const { state, setState } = useContext(StateContext);
  const togglePeanuts = () => {
    setState(prevState => ({ ...prevState, peanuts: !prevState.peanuts }));
  };
  const toggleNuts = () => {
    setState(prevState => ({ ...prevState, nuts: !prevState.nuts }));
  };
  const toggleEggs = () => {
    setState(prevState => ({ ...prevState, eggs: !prevState.eggs }));
  };
  const toggleDiabetes = () => {
    setState(prevState => ({ ...prevState, diabetes: !prevState.diabetes }));
  };
  const togglehighBloodPressure = () => {
    setState(prevState => ({ ...prevState, highBloodPressure: !prevState.highBloodPressure }));
  };
  const toggleHalal = () => {
    setState(prevState => ({ ...prevState, halal: !prevState.halal }));
  };
  const toggleVegetarian = () => {
    setState(prevState => ({ ...prevState, vegetarian: !prevState.vegetarian }));
  };
  const toggleVegan = () => {
    setState(prevState => ({ ...prevState, vegan: !prevState.vegan }));
  };
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.profileCard}>
        <Image style={styles.profilePicture} source={ProfilePictureBigger}></Image>
        <Text style={styles.name}>Ri Hong</Text>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Allergies</Text>
        <View style={styles.options}>
          <TouchableOpacity style={state.peanuts ? styles.restrictionOn : styles.restrictionOff} onPress={() => togglePeanuts()}>
            <Text style={state.peanuts ? styles.restrictionTextOn : styles.restrictionTextOff}>Peanuts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={state.nuts ? styles.restrictionOn : styles.restrictionOff} onPress={() => toggleNuts()}>            
            <Text style={state.nuts ? styles.restrictionTextOn : styles.restrictionTextOff}>Nuts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={state.eggs ? styles.restrictionOn : styles.restrictionOff} onPress={() => toggleEggs()}>
            <Text style={state.eggs ? styles.restrictionTextOn : styles.restrictionTextOff}>Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Diseases</Text>
        <View style={styles.options}>
          <TouchableOpacity style={state.diabetes ? styles.restrictionOn : styles.restrictionOff} onPress={() => toggleDiabetes()}>
            <Text style={state.diabetes ? styles.restrictionTextOn : styles.restrictionTextOff}>Diabetes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={state.highBloodPressure ? styles.restrictionOn : styles.restrictionOff} onPress={() => togglehighBloodPressure()}>
            <Text style={state.highBloodPressure ? styles.restrictionTextOn : styles.restrictionTextOff}>High Blood Pressure</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Cultural Restrictions</Text>
        <View style={styles.options}>
          <TouchableOpacity style={state.halal ? styles.restrictionOn : styles.restrictionOff} onPress={() => toggleHalal()}>
            <Text style={state.halal ? styles.restrictionTextOn : styles.restrictionTextOff}>Halal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.label}>Other Restrictions</Text>
        <View style={styles.options}>
          <TouchableOpacity style={state.vegetarian ? styles.restrictionOn : styles.restrictionOff} onPress={() => toggleVegetarian()}>
            <Text style={state.vegetarian ? styles.restrictionTextOn : styles.restrictionTextOff}>Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={state.vegan ? styles.restrictionOn : styles.restrictionOff} onPress={() => toggleVegan()}>
            <Text style={state.vegan ? styles.restrictionTextOn : styles.restrictionTextOff}>Vegan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.homeButtonWrapper}>
          <Image source={HomeButton} style={styles.homeButton}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")} style={styles.cameraButtonWrapper}>
          <Image source={CameraButton} style={styles.cameraButton}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={styles.profileButtonWrapper}>
          <Image source={ProfileButtonSelected} style={styles.profileButton}></Image>
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
    justifyContent: 'flex-start',
    backgroundColor: '#0E3B4C',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  name: {
    color: '#F2C94C',
    textAlign: 'center',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 24,
    marginBottom: 25,
  },
  conditionContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    marginBottom: 25,
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
  navigationContainer: {
    backgroundColor: '#0E3B4C',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  cameraButton: {
    marginBottom: 70,
  }
});
