import React from "react";
import { Image, StyleSheet, View, Alert, Keyboard } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";

import { useEffect, useState } from "react";
function LoginScreen({navigation}) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSignup = () => {
    // return false;
    Alert.alert("Alert", "User Created", [{ text: "Okay!",onPress:()=>{navigation.navigate("Login",{username:username,password:password})} }]);
    console.log("bas");
  };

  return (
    <View style={styles.Container}>
      {!isKeyboardVisible && (
        <View style={styles.ImageContainer}>
          <Image
            style={styles.Image}
            source={require("../assets/logo.png")}
          ></Image>
        </View>
      )}
      <View style={{ alignItems: "center" }}>
        <AppText
          style={{ fontSize: 30, fontWeight: "bold", color: colors.white }}
        >
          Signup Page
        </AppText>
      </View>
      <View style={{ margin: 15, marginTop: 30 }}>
        <AppTextInput placeholder="Enter Username" setText={setusername} />
        <AppTextInput
          placeholder="Enter Password"
          secureTextEntry
          setText={setpassword}
        />
        <AppTextInput placeholder="Enter Age" KeykeyboardType="numeric" setText={() => {}} />
        <AppTextInput placeholder="Enter Fund ID" setText={() => {}} />
      </View>
      <View style={{ margin: 15, marginTop: 30 }}>
        <AppButton onPress={handleSignup} title="Sign Up"></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#021030",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  ImageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 160,
  },
  Image: {
    height: 200,
    width: 200,
  },
  InputContainer: {
    justifyContent: "space-between",
    padding: 15,
    width: "100%",
    height: 200,
  },
});
export default LoginScreen;
