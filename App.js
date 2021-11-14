import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailsScreen from './app/screens/DetailScreen';
import LoginScreen from './app/screens/LoginScreen';
import SafeScreen from './app/screens/SafeScreen';
import SignupScreen from './app/screens/SignupScreen';
import { useState } from 'react';
import ListingsScreen from './app/screens/ListingsScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const stack=createStackNavigator();
const stackNavigator=()=>(
  <stack.Navigator>
    <stack.Screen name="Listings" component={ListingsScreen}></stack.Screen>
    <stack.Screen name="Details" component={DetailsScreen}></stack.Screen>
  </stack.Navigator>
);

export default function App() {


  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    // <NavigationContainer>
    //   <stackNavigator></stackNavigator>
    // </NavigationContainer>
    <SafeScreen style={styles.container}>
      {/* <LoginScreen username={username} password={password} /> */}
      {/* <SignupScreen setpassword={setpassword} setusername={setusername}/> */}
      {/* <DetailsScreen></DetailsScreen> */}
      <ListingsScreen></ListingsScreen>
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
