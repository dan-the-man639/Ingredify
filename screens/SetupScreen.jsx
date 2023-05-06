import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function SetupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SetupScreen</Text>
      <StatusBar style="auto" />

      <Button 
        title="Navigate to Landing"
        onPress={() => navigation.navigate("LandingScreen")}
      />

    </View>
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
