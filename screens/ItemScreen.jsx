import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import Plus from '../assets/Plus.png'
import CancelButton from '../assets/CancelButton.png'
import AteButton from '../assets/AteButton.png'
import SafeImage from '../assets/SafeImage.png'
import DangerImage from '../assets/DangerImage.png'

export default function SetupScreen({ navigation }) {
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
      
      <View style={styles.topContainer}>
        <View style={styles.topContainerHeader}>
          <Text style={styles.itemName}>Coca-Cola</Text>

          <View style={styles.tagContainer}>
            <Text style={styles.healthyTag}>Healthy</Text>
            <Text style={styles.fillingTag}>Filling</Text>
            <Text style={styles.tastyTag}>Tasty</Text>
          </View>
          
          {safe ?
            <Image style={styles.safeOrNot} source={SafeImage}></Image> :
            <Image style={styles.safeOrNot} source={DangerImage}></Image>
          }
        </View>
        
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
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.cancelWrapper}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.ateWrapper}>
          <Text style={styles.ateText}>I ate it</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 30
  },
  topContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    gap: 30
  },
  topContainerHeader: {
    display: 'flex',
    alignSelf: 'stretch',
    gap: 10
  },
  itemName: {
    color: '#0E3B4C',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 48,
  },
  tagContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 5,
  },
  healthyTag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: "#BBD9AC",
    color: '#0E3B4C',
    fontSize: 16,
  },
  fillingTag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: "#B5ACD9",
    color: '#0E3B4C',
    fontSize: 16,
  },
  tastyTag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: "#D9ACAC",
    color: '#0E3B4C',
    fontSize: 16,
  },
  safeOrNot: {
    marginVertical: 5,
  },
  descriptionContainer: {
    gap: 10,
  },
  header: {
    color: '#0E3B4C',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 24,
  },
  descriptiontext: {
    color: '#145A62',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
  },
  ingredientsSection: {
    gap: 10,
  },
  ingredientsContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
  },
  ingredient: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#0E3B4C',
  },
  ingredientText: {
    color: '#0E3B4C',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  cancelWrapper: {
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 170,
    borderRadius: 10,
    borderColor: "#F2C94C",
  },
  ateWrapper: {
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 170,
    borderRadius: 10,
    borderColor: "#F2C94C",
    backgroundColor: "#F2C94C",
  },
  cancelText: {
    color: "#F2C94C",
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 20,
  },
  ateText: {
    color: "#f1f1f1",
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 20,
  }

});
