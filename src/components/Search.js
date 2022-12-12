import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export const Search = ({ setSelected }) => {
  const [input, setInput] = useState("");
  const handleOnEndEditing = () => {
    if (!input) return;
    setSelected(input);
    setInput("");
  };
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={25} color={"#660066"} />
      <TextInput
        // autoFocus={true}
        placeholder="Search"
        value={input}
        style={styles.textInput}
        cursorColor={"#660066"}
        placeholderTextColor={"#ffccff"}
        onEndEditing={handleOnEndEditing}
        onChangeText={(text) => {
          setInput(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    width: "90%",
    borderWidth: 1,
    borderRadius: 40,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#660066",
    justifyContent: "center",
    alignContent: "flex-start",
  },
  textInput: {
    width: "80%",
    fontSize: 22,
    marginLeft: 10,
    alignContent: "center",
  },
});
