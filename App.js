import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeScreen from './app/screens/SafeScreen';

export default function App() {
  return (
    <SafeScreen style={styles.container}>
      <Text>App.js to start working on EDUFUNd!</Text>
      
    </SafeScreen>
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
