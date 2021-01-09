import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import ClientesStack from "./ClienteStack";
import MesasStack from "./MesaStack";
import OrdenesStack from "./OrdenStack";
import PlatillosStack from "./PlatilloStack";
import PagosStack from "./PagoStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="clientes"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#4B413F"
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="clientes"
          component={ClientesStack}
          options={{ title: "Clientes" }}
        />
        <Tab.Screen
          name="mesas"
          component={MesasStack}
          options={{ title: "Mesas" }}
        />
        <Tab.Screen
          name="ordenes"
          component={OrdenesStack}
          options={{ title: "Ordenes" }}
        />
        <Tab.Screen
          name="platillos"
          component={PlatillosStack}
          options={{ title: "Platillos" }}
        />
        <Tab.Screen
          name="pagos"
          component={PagosStack}
          options={{ title: "Pagos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "clientes":
      iconName = "account-group";
      break;
    case "mesas":
      iconName = "seat-outline";
      break;
    case "ordenes":
      iconName = "silverware";
      break;
    case "platillos":
      iconName = "food";
      break;
    case "pagos":
      iconName = "credit-card-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
