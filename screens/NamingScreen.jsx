import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import NextButton from '../assets/NextButton.png'
import React, { useState } from 'react';


export default function NamingScreen({ navigation }) {
  const [text, onChangeText] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <Image source={IngredifyLogo} style={styles.logo}></Image>

      <Text style={styles.title}>This item/product's name is...</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <TouchableOpacity onPress={() => navigation.navigate("ItemScreen")} style={styles.nextButtonWrapper}>
        <Image source={NextButton} style={styles.nextButton}></Image>
      </TouchableOpacity>

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
  }
});
