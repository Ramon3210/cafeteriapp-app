import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Clientes from "../screens/Cliente/Cliente";
import ClientesAdd from "../screens/Cliente/ClienteAdd";
import ClientesDet from "../screens/Cliente/ClienteDet";
import ClientesGpo from "../screens/Cliente/ClienteGpo";
import ClientesList from "../screens/Cliente/ClienteList";


const Stack = createStackNavigator();

export default function ClienteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="clientes"
        component={Clientes}
        options={{ title: "Clientes" }}
      />
      <Stack.Screen
        name="clientes-add"
        component={ClientesAdd}
        options={{ title: "Gestion de clientes" }}
      />
      <Stack.Screen
        name="clientes-det"
        component={ClientesDet}
        options={{ title: "Clientes detalle" }}
      />
      <Stack.Screen
        name="alumnos-gpo"
        component={ClientesGpo}
        options={{ title: "Alumnos por Grupo" }}
      />
      <Stack.Screen
        name="clientes-list"
        component={ClientesList}
        options={{ title: "Lista de clientes" }}
      />
    </Stack.Navigator>
  );
}
