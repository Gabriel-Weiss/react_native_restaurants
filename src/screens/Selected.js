import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useRestaurantHook from "../hooks/useRestaurantHook";

export const Selected = () => {
  const [{ data, loading, error }, getRestaurant] = useRestaurantHook();
  const route = useRoute();

  const id = route.params.id;
  // const { height, width } = Dimensions.get("window");

  useEffect(() => {
    getRestaurant(id);
  }, []);

  let content;
  loading &&
    (content = <ActivityIndicator size={"large"} marginVertical={30} />);
  error && (content = <Text>{error}</Text>);
  data &&
    (content = (
      <FlatList
        data={data.photos}
        showsVerticalScrollIndicator={false}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.photos} />
        )}
      />
    ));

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photos: {
    resizeMode: "stretch",
    aspectRatio: 1,
  },
});
