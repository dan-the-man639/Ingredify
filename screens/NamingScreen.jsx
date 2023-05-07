import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';

import IngredifyLogoDark from '../assets/IngredifyLogoDark.png'
import NextButton from '../assets/NextButton.png'
import React, { useState } from 'react';


export default function NamingScreen({ navigation }) {
  const [text, onChangeText] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <Image source={IngredifyLogoDark} style={styles.logo}></Image>

      <View style={styles.inputSection}>
        <Text style={styles.title}>This item/product's name is...</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Item Name"
          placeholderTextColor="#82A5A9"
          selectionColor="#145A62"
          underlineColorAndroid="transparent"
          keyboardType="default"
        />

        <TouchableOpacity onPress={() => navigation.navigate("ItemScreen", {'itemName': text})} style={styles.nextButtonWrapper}>
          <Image source={NextButton} style={styles.nextButton}></Image>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f1f1f1',
    borderWidth: 5,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderColor: '#145A62',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputSection: {
    marginTop: 180,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    gap: 15,
  },
  title: {
    color: '#0E3B4C',
    fontFamily: 'Baloo2',
    fontWeight: 600,
    fontSize: 20,
  },
  input: {
    borderRadius: 15,
    borderWidth: 3,
    height: 65,
    borderColor: '#145A62',
    paddingHorizontal: 30,
    fontSize: 16,
  },
  nextButtonWrapper: {
    alignSelf: 'flex-end'
  }
});
