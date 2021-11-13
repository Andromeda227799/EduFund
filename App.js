import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailsScreen from './app/screens/DetailScreen';
import LoginScreen from './app/screens/LoginScreen';
import SafeScreen from './app/screens/SafeScreen';
import SignupScreen from './app/screens/SignupScreen';
export default function App() {


  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  return (
    <SafeScreen style={styles.container}>
      {/* <LoginScreen username={username} password={password} /> */}
      {/* <SignupScreen setpassword={setpassword} setusername={setusername}/> */}
      <DetailsScreen></DetailsScreen>
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
