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
  const {source}=route.params;
  
  const {
    data,
    error,
    loading,
    setData,
    request: loadListings,
  } = useApi(funds.getFund,"/"+source["schemeCode"]);
  //  console.log(data[0]);
  useEffect(() => {
    loadListings();
  }, []);

  
 
  let loadChart=false;
  let chartYears=[],chartValues=[];
  if(data&&data[0]&&data[0]["data"]){
    loadChart=true;
    const {values,years}=usePreProcessing(data[0]);
    chartYears=years;
    chartValues=values;
  }

  return (
    <SafeScreen>
      <View style={styles.detailsContainer}>
        {/* <AppText style={styles.title}>{route.params.Listing.title}</AppText> */}
        {loadChart&&<AppText style={styles.title}>{data[0]["meta"]["fund_house"]}</AppText>}
        {/* <AppText style={styles.price}>₹ {route.params.Listing.price}</AppText> */}
        {loadChart&&<AppText style={styles.price}>{data[0]["meta"]["scheme_code"]}</AppText>}
        {/* {loadChart&&<AppText style={styles.desc}>{data["meta"]["scheme_name"]}</AppText>} */}
      </View>
      <View style={styles.descContainer}>
        {loadChart&&<AppText style={styles.desc}>{data[0]["meta"]["scheme_name"]}</AppText>}
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
    paddingTop:0,
    alignItems:"center",
    
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
    textAlign:"center",
  },
  chartContainer: {
    marginVertical: 20,
    padding: 10,
  },
  desc:{
    textAlign:"center",
  },
  descContainer:{
    paddingTop:10,
    borderTopColor:"red",
    alignItems:"center",

    borderTopWidth:5,
  }
});

export default DetailScreen;
