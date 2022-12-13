import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Restaurant = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id: restaurant.id,
          name: restaurant.name,
        })
      }
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: restaurant.image_url }} />
        <View style={styles.info}>
          <Text style={styles.bold}>{restaurant.name}</Text>
          <View>
            <Text> {restaurant.rating} </Text>
            <Text style={[styles.bold, styles.golden]}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 350,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#660066",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  golden: {
    color: "gold",
  },
});
