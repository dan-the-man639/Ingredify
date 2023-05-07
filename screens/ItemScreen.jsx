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
  
  const [carbonatedWater, setCarbonatedWater] = useState(true);
  const [citricAcid, setCitricAcid] = useState(false);
  const [desc, setDesc] = useState("Carbonated water, also known as sparkling water or soda water, is water that has been infused with carbon dioxide gas under pressure, which creates bubbles and gives it a refreshing, fizzy taste. Carbonated water can be consumed on its own, or used as a mixer in cocktails or other beverages. It is a popular alternative to sugary soft drinks, as it is calorie-free and can help quench thirst without adding extra calories to one's diet. Some people also believe that carbonated water can aid digestion and provide other health benefits, although scientific evidence on these claims is limited.");

  const [healthy, setHealthy] = useState(false);
  const [filling, setFilling] = useState(true);
  const [tasty, setTasty] = useState(true);


  const [safe, setSafe] = useState(false);

  const toggle = () => {
    setCarbonatedWater(!carbonatedWater);
    setCitricAcid(!citricAcid);
    if (carbonatedWater) {
      setDesc("Carbonated water, also known as sparkling water or soda water, is water that has been infused with carbon dioxide gas under pressure, which creates bubbles and gives it a refreshing, fizzy taste. Carbonated water can be consumed on its own, or used as a mixer in cocktails or other beverages. It is a popular alternative to sugary soft drinks, as it is calorie-free and can help quench thirst without adding extra calories to one's diet. Some people also believe that carbonated water can aid digestion and provide other health benefits, although scientific evidence on these claims is limited.")
      setFilling(true)
      setTasty(true)
      setHealthy(false)
    } else {
      setDesc("Citric acid is a weak organic acid found in citrus fruits like lemons, limes, and oranges. It has a sour taste and is commonly used as a flavoring agent in food and beverages. Citric acid is also used as a preservative and acidifying agent in food products. Additionally, it has various industrial applications, such as in cleaning products, cosmetics, and pharmaceuticals. Citric acid is a naturally occurring compound and is generally considered safe for consumption in small amounts.")
      setFilling(false)
      setTasty(true)
      setHealthy(true)
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.topContainer}>
        <View style={styles.topContainerHeader}>
          <Text style={styles.itemName}>{route.params.itemName}</Text>

          <View style={styles.tagContainer}>
            {healthy ? <Text style={styles.healthyTag}>Healthy</Text> : <></>}
            {filling ? <Text style={styles.fillingTag}>Filling</Text> : <></>}
            {tasty ? <Text style={styles.tastyTag}>Tasty</Text> : <></>}
          </View>
          
          {safe ?
            <Image style={styles.safeOrNot} source={SafeImage}></Image> :
            <Image style={styles.safeOrNot} source={DangerImage}></Image>
          }
        </View>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.header}>Description</Text>
          <Text style={styles.descriptiontext}>{desc}</Text>
        </View>

        <View style={styles.ingredientsSection}>
          <Text style={styles.header}>Ingredients</Text>
          <View style={styles.ingredientsContainer}>
          <TouchableOpacity style={carbonatedWater ? styles.ingredientOn : styles.ingredientOff} onPress={() => toggle()}>
              <Text style={carbonatedWater ? styles.ingredientTextOn : styles.ingredientTextOff}>Carbonated Water</Text>
            </TouchableOpacity>
            <TouchableOpacity style={citricAcid ? styles.ingredientOn : styles.ingredientOff} onPress={() => toggle()}>
              <Text style={citricAcid ? styles.ingredientTextOn : styles.ingredientTextOff}>Citric Acid</Text>
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
  ingredientOn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#0E3B4C',
    backgroundColor: '#0E3B4C'
  },
  ingredientOff: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#0E3B4C',
    // backgroundColor: 'red'
  },
  ingredientTextOn: {
    color: '#F1F1F1',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 16,
  },
  ingredientTextOff: {
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
