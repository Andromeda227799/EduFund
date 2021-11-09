import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import constants from "expo-constants";
import colors from "../config/colors";

function SafeScreen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default SafeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.screen,
  },
});
