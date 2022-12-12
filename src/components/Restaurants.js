import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useRestaurantsHook from "../hooks/useRestaurantsHook";
import { Restaurant } from "./Restaurant";

export const Restaurants = ({ selected }) => {
  const [{ data, loading, error }, getRestaurants] = useRestaurantsHook();

  useEffect(() => {
    getRestaurants(selected);
  }, [selected]);

  let content;
  loading &&
    (content = <ActivityIndicator size={"large"} marginVertical={30} />);
  error && (content = <Text>{error}</Text>);
  data &&
    (content = (
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <Restaurant restaurant={item} />}
      />
    ));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    color: "#660066",
  },
});
