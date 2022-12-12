import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/screens/Home";
import { Selected } from "./src/screens/Selected";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={Home}
          options={{
            headerTitle: () => (
              <Ionicons name="restaurant-outline" size={40} color="#660066" />
            ),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Restaurant"
          component={Selected}
          options={{
            headerTitleStyle: { fontWeight: "bold", color: "white" },
            headerStyle: { backgroundColor: "#660066" },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
