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
  const [dataShown, setdataShown] = useState([]);
  const [loadChart, setLoadChart] = useState(false);
  const {
    data,
    error,
    loading,
    setData,
    request: loadListings,
  } = useApi(funds.getFund, "");

  useEffect(() => {
    loadListings();
  }, []);

  useEffect(() => {
      setdataShown(data[0]);
      if (data[0])setLoadChart(true);
  }, [data]);

  const handleReload = () => {
    loadListings();
    setData([]);
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        {error && (
          <View style={styles.error}>
            <AppText>Unable to Fetch Data. Please Retry!</AppText>
            <AppButton title="Retry" onPress={loadListings}></AppButton>
          </View>
        )}
        <AppLoader visible={!loadChart} />
        <View style={styles.searchContainer}>
          {loadChart && (
            <AppSearchBar data={data} width="90%" setdataShown={setdataShown}></AppSearchBar>
          )}
          <MaterialCommunityIcons
            onPress={handleReload}
            name={"cancel"}
            size={28}
            color="red"
          />
        </View>

        {loadChart && (
          <FlatList
            data={dataShown}
            keyExtractor={(data) => data["schemeCode"] + data["schemeName"]}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("pressed-->", item);
                  navigation.navigate("Details", { source: item });
                }}
              >
                <View style={styles.ListContainer}>
                  <Card
                    title={item["schemeName"]}
                    subTitle={item["schemeCode"]}
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
