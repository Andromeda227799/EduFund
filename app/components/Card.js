import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imageUrl} />
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={3} style={styles.title}>
          {title}
        </AppText>
        <AppText style={styles.subTitle}>ID-{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
