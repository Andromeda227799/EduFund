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


const Stack=createStackNavigator();
const StackNavigator=()=>(
  <Stack.Navigator>
    <Stack.Screen name="Signup" component={SignupScreen} ></Stack.Screen>
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    
    <Stack.Screen name="Listings" component={ListingsScreen}></Stack.Screen>
    <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
    
    
    
  </Stack.Navigator>
);

export default function App() {


  
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
    // <IotTemp></IotTemp>
    // <SafeScreen style={styles.container}>
    //   {/* <LoginScreen username={username} password={password} /> */}
    //   {/* <SignupScreen setpassword={setpassword} setusername={setusername}/> */}
    //   {/* <DetailsScreen></DetailsScreen> */}
    //   <ListingsScreen></ListingsScreen>
    // </SafeScreen>
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
