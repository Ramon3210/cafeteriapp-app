import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ordenes from "../screens/Orden/Orden";
import OrdenesInfo from "../screens/Orden/OrdenDet";
import OrdenesAdd from "../screens/Orden/OrdenAdd";
import OrdenesList from "../screens/Orden/OrdenList";

const Stack = createStackNavigator();

export default function OrdenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ordenes"
        component={Ordenes}
        options={{ title: "Ordenes" }}
      />
      <Stack.Screen
        name="ordenes-det"
        component={OrdenesInfo}
        options={{ title: "Detalle de ordenes" }}
      />
      <Stack.Screen
        name="ordenes-add"
        component={OrdenesAdd}
        options={{ title: "Agregar orden" }}
      />
      <Stack.Screen
        name="ordenes-list"
        component={OrdenesList}
        options={{ title: "Lista de ordenes" }}
      />
    </Stack.Navigator>
  );
}
