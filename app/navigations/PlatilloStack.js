import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Platillos from "../screens/Platillo/Platillo";
import PlatillosAdd from "../screens/Platillo/PlatilloAdd";
import PlatillosDet from "../screens/Platillo/PlatilloDet";
import PlatillosList from "../screens/Platillo/PlatilloList";


const Stack = createStackNavigator();

export default function PlatilloStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="platillos"
        component={Platillos}
        options={{ title: "Platillos" }}
      />
      <Stack.Screen
        name="platillos-add"
        component={PlatillosAdd}
        options={{ title: "Agregar platillo" }}
      />
      <Stack.Screen
        name="platillos-list"
        component={PlatillosList}
        options={{ title: "Lista de platillos" }}
      />
      <Stack.Screen
        name="platillos-det"
        component={PlatillosDet}
        options={{ title: "Detalle de los platillos" }}
      />
    </Stack.Navigator>
  );
}