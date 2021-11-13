import React from "react";
import { Image, StyleSheet, View ,Alert} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";


function LoginScreen({username,password}) {
  const [inputPassword, setinputPassword] = React.useState('')
  const [inputUsername, setinputUsername] = React.useState('')
  const verifyLogin=()=>{
    if(inputUsername==username&&inputPassword==password){
      // return true;
      console.log("good");
    }else{
      // return false;
      Alert.alert("Alert", "User Does not Exist!", [
        { text: "Okay!"}
      ]);
      console.log("bas");
    }
  }


  return (
    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View style={{alignItems:"center"}}>
        <AppText style={{fontSize:30,fontWeight:"bold",color:colors.white}}>Login</AppText>
      </View>
      <View style={{ margin: 15, marginTop: 30 }}>
      <AppTextInput setText={setinputUsername} />
        <AppTextInput secureTextEntry setText={setinputPassword}/>
      </View>
      <View style={{ margin: 15, marginTop: 30 }}>
        <AppButton onPress={verifyLogin} title="login"></AppButton>
      </View>
      <View style={{alignItems:"center"}}>
        <AppText style={{color:colors.white}}>New User? Click Here</AppText>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#021030",
    height: "100%",
    flexDirection:"column",
    justifyContent:"center"
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
