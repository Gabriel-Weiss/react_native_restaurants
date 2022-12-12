import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Category = ({ name, image, isSelected, select }) => {
  return (
    <TouchableOpacity onPress={select}>
      <View
        style={[
          styles.container,
          isSelected
            ? { backgroundColor: "#660066" }
            : { borderWidth: 1, borderColor: "#660066" },
        ]}
      >
        <View>
          <Image style={styles.image} source={image} />
        </View>
        <Text
          style={[
            styles.header,
            isSelected ? { color: "#ffffff" } : { color: "#660066" },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    padding: 10,
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  header: {
    fontWeight: "bold",
  },
});
