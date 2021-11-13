import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultStyles from "../config/styles";
function AppText({ children, style, ...otherprops }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherprops}>
      {children}
    </Text>
  );
}

export default AppText;
