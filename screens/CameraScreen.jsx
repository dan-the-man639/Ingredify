import React, { useState, useEffect, useRef } from 'react';

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import IngredifyLogo from '../assets/IngredifyLogo.png'
import Plus from '../assets/Plus.png'
import BackButton from '../assets/BackButton.png'
import NextButton from '../assets/NextButton.png'
import ProgressBar2 from '../assets/ProgressBar2.png'
import GradientDiagonal from '../assets/GradientDiagonal.png'
import CameraButton from '../assets/CameraButton.png'

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

      <Camera style={styles.camera}></Camera>

      <TouchableOpacity onPress={() => navigation.navigate("NamingScreen")} style={styles.cameraButtonWrapper}>
        <Image source={CameraButton} style={styles.cameraButton}></Image>
      </TouchableOpacity>


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
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },  
  cameraButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  cameraButton: {
    marginBottom: 70,
    borderColor: '#fff',
  }

});
