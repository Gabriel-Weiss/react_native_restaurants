import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Restaurants } from "../components/Restaurants";
import { Search } from "../components/Search";
import categories from "../constants/categoryList";

export const Home = () => {
  const [selected, setSelected] = useState("Burger");

  return (
    <View style={styles.container}>
      <View style={styles.upperSide}>
        <Header />
        <Search setSelected={setSelected} />
      </View>
      <View style={styles.middleSide}>
        <Categories
          categories={categories}
          setSelected={setSelected}
          selected={selected}
        />
      </View>
      <View style={styles.lowerSide}>
        <Restaurants selected={selected} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  upperSide: { marginHorizontal: 25 },
  middleSide: { marginHorizontal: 0 },
  lowerSide: {},
});
