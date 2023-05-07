import React, { useState, useEffect, useRef } from 'react';

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import Plus from '../assets/Plus.png'
import BackButton from '../assets/BackButton.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar2 from '../assets/ProgressBar2.png'
import GradientDiagonal from '../assets/GradientDiagonal.png'

export default function SetupScreen({ navigation }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  return (
    <SafeAreaView style={styles.container}>

      <Camera style={styles.camera}>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("NamingScreen")} style={styles.nextButtonWrapper}>
            <Image source={NextButton} style={styles.nextButton}></Image>
          </TouchableOpacity>
        </View>
      </Camera>



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
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }

});
