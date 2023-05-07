import React, { useState } from 'react';
import { StateContext } from '../App';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import Plus from '../assets/Plus.png'
import CancelButton from '../assets/CancelButton.png'
import AteButton from '../assets/AteButton.png'
import SafeImage from '../assets/SafeImage.png'
import DangerImage from '../assets/DangerImage.png'

export default function SetupScreen({ navigation, route }) {
  
  const [peanuts, setPeanuts] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [eggs, setEggs] = useState(false);

  const [diabetes, setDiabetes] = useState(false);
  const [highBloodPressure, setHighBloodPressure] = useState(false);

  const [halal, setHalal] = useState(false);

  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);

  const [safe, setSafe] = useState(false);


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.itemName}>{route.params.itemName}</Text>

      <View style={styles.tagContainer}>
        <Text style={styles.tag}>Healthy</Text>
        <Text style={styles.tag}>Filling</Text>
      </View>

      
      {safe ?
        <Image style={styles.safeOrNot} source={SafeImage}></Image> :
        <Image style={styles.safeOrNot} source={DangerImage}></Image>
      }
      

      <View style={styles.descriptionContainer}>
        <Text style={styles.header}>Description</Text>
        <Text style={styles.descriptiontext}>Lorem ipsum dolor sit amet consectetur. Tincidunt ac aliquet tellus vitae amet urna. Velit platea vulputate sit nibh curabitur. Lacinia ornare sapien interdum sit.</Text>
      </View>

      <View style={styles.ingredientsSection}>
        <Text style={styles.header}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          <TouchableOpacity style={styles.ingredient}>
            <Text style={styles.ingredientText}>Sugar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ingredient}>
            <Text style={styles.ingredientText}>Corn Syrup</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.buttonWrapper}>
          <Image source={CancelButton} style={styles.cancelButton}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.buttonWrapper}>
          <Image source={AteButton} style={styles.ateButton}></Image>
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
    gap: 10,
  },
  restrictionText: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 14,
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
