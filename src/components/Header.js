import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Find your favorite</Text>
      <Text style={styles.boldHeader}>delicious meal!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  lightHeader: {
    fontSize: 35,
    color: "#660066",
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#660066",
  },
});
