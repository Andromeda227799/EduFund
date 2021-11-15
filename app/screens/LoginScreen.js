import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";

import { useState } from "react";

function LoginScreen({ route, navigation }) {
  const [inputPassword, setinputPassword] = useState("");
  const [inputUsername, setinputUsername] = useState("");
  const { username, password } = route.params;
  const verifyLogin = () => {
    if (inputUsername == username && inputPassword == password) {
      // return true;
      Alert.alert("Alert", "Login Success!", [
        {
          text: "Okay!",
          onPress: () => {
            navigation.navigate("Listings");
          },
        },
      ]);
      console.log("good");
    } else {
      // return false;
      Alert.alert("Alert", "User Does not Exist!", [{ text: "Okay!" }]);
      console.log("bas");
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View style={{ alignItems: "center" }}>
        <AppText
          style={{ fontSize: 30, fontWeight: "bold", color: colors.white }}
        >
          Login
        </AppText>
      </View>
      <View style={{ margin: 15, marginTop: 30 }}>
        <AppTextInput placeholder="Enter Username" setText={setinputUsername} />
        <AppTextInput placeholder="Enter Password" secureTextEntry setText={setinputPassword} />
      </View>
      <View style={{ margin: 15, marginTop: 30 }}>
        <AppButton onPress={verifyLogin} title="login"></AppButton>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Signup")}>
          <AppText style={{ color: colors.white }}>
            New User? Click Here
          </AppText>
        </TouchableWithoutFeedback>
        
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
