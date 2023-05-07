import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';


import ProfileImage from '../assets/IngredifyLogo.png'
import CameraButton from '../assets/CameraButton.png'
import HomeButtonSelected from '../assets/HomeButtonSelected.png'
import ProfileButton from '../assets/ProfileButton.png'


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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
