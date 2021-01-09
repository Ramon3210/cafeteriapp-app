import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Mesas from "../screens/Mesa/Mesa";
import MesasAdd from "../screens/Mesa/MesaAdd";
import MesasDet from "../screens/Mesa/MesaDet";
import MesasList from "../screens/Mesa/MesaList";


const Stack = createStackNavigator();

export default function MesaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mesas"
        component={Mesas}
        options={{ title: "Mesas" }}
      />
      <Stack.Screen
        name="mesas-add"
        component={MesasAdd}
        options={{ title: "Agregar mesa" }}
      />
      <Stack.Screen
        name="mesas-list"
        component={MesasList}
        options={{ title: "Lista de mesas" }}
      />
      <Stack.Screen
        name="mesas-det"
        component={MesasDet}
        options={{ title: "Detalle de mesas" }}
      />
    </Stack.Navigator>
  );
}
