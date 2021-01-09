import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pagos from "../screens/Pago/Pago";
import PagosDet from "../screens/Pago/PagoDet";
import PagosAdd from "../screens/Pago/PagoAdd";
import PagosList from "../screens/Pago/PagoList";


const Stack = createStackNavigator();

export default function PagoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pagos"
        component={Pagos}
        options={{ title: "Pagos" }}
      />
      <Stack.Screen
        name="pagos-list"
        component={PagosList}
        options={{ title: "Lista de pagos" }}
      />
      <Stack.Screen
        name="pagos-add"
        component={PagosAdd}
        options={{ title: "Agregar pago" }}
      />
    </Stack.Navigator>
  );
}
