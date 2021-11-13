import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppChart from "../components/AppChart";
import AppText from "../components/AppText";

import colors from "../config/colors";

import funds from "../api/funds";
import useApi from "../hooks/useApi";
import SafeScreen from "./SafeScreen";

import { useEffect } from "react";
function DetailScreen({ route }) {
  const { data, error, loading, request } = useApi(funds.getFund);
  useEffect(() => {
    request();
    console.log(data);
  },[]);
  return (
    <SafeScreen>
      {error && (
        <View style={styles.error}>
          <AppText>Unable to Fetch Data. Please Retry!</AppText>
          <AppButton title="Retry" onPress={loadListings}></AppButton>
        </View>
      )}
      <View style={styles.chartContainer}>
        <AppChart data={data}></AppChart>
      </View>
      <View style={styles.detailsContainer}>
        {/* <AppText style={styles.title}>{route.params.Listing.title}</AppText> */}
        <AppText style={styles.title}>fund1</AppText>
        {/* <AppText style={styles.price}>₹ {route.params.Listing.price}</AppText> */}
        <AppText style={styles.price}>$50</AppText>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  chartContainer: {
    marginVertical: 40,
    padding: 10,
  },
});

export default DetailScreen;
