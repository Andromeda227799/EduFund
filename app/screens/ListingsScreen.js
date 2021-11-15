import React, { useEffect, useState } from "react";
import SafeScreen from "./SafeScreen";
import Card from "../components/Card";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import funds from "../api/funds";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppLoader from "../components/AppLoader";
import useApi from "../hooks/useApi";

import AppSearchBar from "../components/AppSearchBar";
import useCopy from "../hooks/useCopy";
function ListingsScreen({ navigation }) {
  // const [list, setlist] = useState([]);
  // const getListingsApi=useApi(listingApi.getListings);
  const endpoints = ["/100350", "/100121", "/120248", "/101361", "/139537"];
  const images = [
    require("../assets/icici.png"),
    require("../assets/hdfc.png"),
    require("../assets/lic.png"),
    require("../assets/canara.png"),
    require("../assets/mahindra.png"),
  ];
  const {
    data,
    error,
    loading,
    setData,
    request: loadListings,
  } = useApi(funds.getFund, endpoints, images);
  //   const {data:ListofItems,error,loading,request:loadListings}=useApi(listingApi.getListings);

  useEffect(() => {
    loadListings();
    // console.log(data);
  }, []);

  loadChart = false;
  //   let chartYears=[],chartValues=[];
  let orignalData=[];
  if (data) {
    loadChart = true;
    orignalData=data;
  }
  const handleReload = () => {
    loadListings();
    setData([]);
    //   setSearch("");
  };
  //   const{copy,setcopy}=useCopy(data);
  
  return (
    <SafeScreen>
      <View style={styles.container}>
        {error && (
          <View style={styles.error}>
            <AppText>Unable to Fetch Data. Please Retry!</AppText>
            <AppButton title="Retry" onPress={loadListings}></AppButton>
          </View>
        )}
        <AppLoader visible={loading} />
        <View style={styles.searchContainer}>
          {loadChart && (
            <AppSearchBar width="90%" setData={setData}></AppSearchBar>
          )}
          <MaterialCommunityIcons
            onPress={handleReload}
            name={"reload"}
            size={28}
            color="red"
          />
        </View>

        {loadChart && (
          <FlatList
            data={data}
            keyExtractor={(data) => data["meta"]["fund_house"]}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Details", { data: item })
                }
              >
                <View style={styles.ListContainer}>
                  <Card
                    title={item["meta"]["fund_house"]}
                    subTitle={item["meta"]["scheme_code"]}
                    imageUrl={item.imageUri}
                  />
                </View>
              </TouchableWithoutFeedback>
            )}
          ></FlatList>
        )}
      </View>
    </SafeScreen>
  );
}

export default ListingsScreen;
const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ListContainer: {
    marginTop: 20,
  },
  error: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
