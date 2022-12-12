import { FlatList, StyleSheet, View } from "react-native";
import { Category } from "./Category";

export const Categories = ({ categories, setSelected, selected }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
        renderItem={({ item }) => (
          <Category
            name={item.name}
            image={item.image}
            isSelected={item.name === selected}
            select={() => setSelected(item.name)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
});
