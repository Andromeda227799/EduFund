import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppLineChart from "../components/AppLineChart";
import AppProgressChart from "../components/AppProgressChart"
import AppText from "../components/AppText";

import colors from "../config/colors";

import funds from "../api/funds";
import useApi from "../hooks/useApi";
import SafeScreen from "./SafeScreen";

import { useEffect } from "react";
import usePreProcessing from "../hooks/usePreprocessing";
import AppBarChart from "../components/AppBarChart";
function DetailScreen({ route }) {
  const { data, error, loading, request } = useApi(funds.getFund,"/100350");
  
  useEffect(() => {
    request();
    // console.log(data);
    
  },[]);
  loadChart=false;
  let chartYears=[],chartValues=[];
  if(data&&data["data"]){
    loadChart=true;
    const {values,years}=usePreProcessing(data);
    chartYears=years;
    chartValues=values;
  }
  return (
    <SafeScreen>
      {error && (
        <View style={styles.error}>
          <AppText>Unable to Fetch Data. Please Retry!</AppText>
          <AppButton title="Retry" onPress={loadListings}></AppButton>
        </View>
      )}
      <View style={styles.detailsContainer}>
        {/* <AppText style={styles.title}>{route.params.Listing.title}</AppText> */}
        {loadChart&&<AppText style={styles.title}>{data["meta"]["fund_house"]}</AppText>}
        {/* <AppText style={styles.price}>₹ {route.params.Listing.price}</AppText> */}
        {loadChart&&<AppText style={styles.price}>{data["meta"]["scheme_code"]}</AppText>}
        {/* {loadChart&&<AppText style={styles.desc}>{data["meta"]["scheme_name"]}</AppText>} */}
      </View>
      <View style={styles.descContainer}>
        {loadChart&&<AppText style={styles.desc}>{data["meta"]["scheme_name"]}</AppText>}
      </View>
      <View style={styles.chartContainer}>
        {loadChart&&<AppLineChart labels={chartYears}data={chartValues}></AppLineChart>}
        {loadChart&&<AppBarChart labels={chartYears}data={chartValues}></AppBarChart>}
      </View>
      
      
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    alignItems:"center"
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginTop:10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  chartContainer: {
    marginVertical: 20,
    padding: 10,
  },
  desc:{

  },
  descContainer:{
    paddingTop:10,
    borderTopColor:"red",
    alignItems:"center",

    borderTopWidth:5,
  }
});

export default DetailScreen;
