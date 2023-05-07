import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';


import ProfileImage from '../assets/IngredifyLogo.png'
import CameraButton from '../assets/CameraButton.png'
import HomeButtonSelected from '../assets/HomeButtonSelected.png'
import ProfileButton from '../assets/ProfileButton.png'
import GradientVertical from '../assets/GradientVertical.png'


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
        <Image source={GradientVertical} style={styles.headerBackground}></Image>
        <View style={styles.profilePicture}>
          <Image source={ProfileImage} style={styles.profileImage}></Image>
        </View>
        <View style={styles.headerTextSection}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.name}>Ri Hong</Text>
        </View>
      </View>

      <View style={styles.bodySections}>
        <View style={styles.section}>
          <Text style={styles.title}>Fact of the day</Text>
          <View style={styles.factBox}>
            <Text style={styles.factTitle}>Halal</Text>
            <Text style={styles.factText}>Lorem ipsum dolor sit amet consectetur. Posuere aliquam sem quis eget lectus posuere.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>What I ate today</Text>
          <View style={styles.foodBox}>
            <View style={styles.foodItem}>
              <Text style={styles.foodName}>Coca-Cola</Text>
              <Text style={styles.time}>11:59 am</Text>
            </View>
            <View style={styles.foodItem}>
              <Text style={styles.foodName}>Coca-Cola</Text>
              <Text style={styles.time}>11:59 am</Text>
            </View>
            <View style={styles.foodItem}>
              <Text style={styles.foodName}>Coca-Cola</Text>
              <Text style={styles.time}>11:59 am</Text>
            </View>
          </View>
        </View>
      </View>
      


      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.homeButtonWrapper}>
          <Image source={HomeButtonSelected} style={styles.homeButton}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")} style={styles.cameraButtonWrapper}>
          <Image source={CameraButton} style={styles.cameraButton}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={styles.profileButtonWrapper}>
          <Image source={ProfileButton} style={styles.profileButton}></Image>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 30
  },
  header: {
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: '#145A62',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 20,
    overflow: 'hidden'
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1000,
    height: 100,
    resizeMode: 'stretch',
  },
  profilePicture: {
    backgroundColor: '#F2C94C',
    width: 100,
    height: 70,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  welcomeText: {
    color: '#7BC55E',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 30,
  },
  name: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 30,
  },
  bodySections: {
    marginTop: 80,
    gap: 20,
  },
  section: {
    display: 'flex',
    alignSelf: 'stretch',
  },
  title: {
    color: '#0E3B4C',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 20,
    paddingVertical: 20,
  },
  factBox: {
    backgroundColor: '#145A62',
    borderRadius: 10,
    padding: 25,
    gap: 15,
  },
  factTitle: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 16,
  },
  factText: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 15,
  },
  foodBox: {
    display: 'flex',
    gap: 15,
  },
  foodItem: {
    backgroundColor: '#f1f1f1',
    shadowColor: '#0e3b4c',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 25,
  },
  foodName: {
    color: '#145A62',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 16,
    // width: 100,
    // display: 'flex',
    // alignSelf: 'flex-start'
  },
  time: {
    color: '#145A62',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 14,
    // width: 80,
    // display: 'flex',
    // alignSelf: 'flex-end'
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
