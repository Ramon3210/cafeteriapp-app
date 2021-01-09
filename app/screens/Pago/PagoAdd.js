import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Dimensions, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { startLocationUpdatesAsync } from "expo-location";

export default function OrdenAdd() {
  const navigation = useNavigation();
  const [txtIdEmpleado, setIdEmpleado] = useState('Numero de empleado')
  const [txtIdCliente, setIdCliente] = useState('Identificador del cliente')
  const [txtIdOrden, setIdOrden] = useState('Numero de orden')
  const [txtTotalApagar, setTotalApagar] = useState('Total a pagar')
  const [btnEnviar, setEnviar] = useState('')

  return (
    <View style={styles.viewBody}>
      <Text style={styles.textTitle}>AGREGAR PAGO</Text>

      <Text>Numero de empleado</Text>
      <TextInput
        style={styles.input}
        placeholder={txtIdEmpleado}
        onChangeText={ne => setIdEmpleado(ne)}
      />
      <Text>Identificador del cliente</Text>
      <TextInput
        style={styles.input}
        placeholder={txtIdCliente}
        onChangeText={c => setIdCliente(c)}
      />
      <Text>Numero de orden</Text>
      <TextInput
        style={styles.input}
        placeholder={txtIdOrden}
        onChangeText={no => setIdOrden(no)}
      />
      <Text>Total a pagar</Text>
      <TextInput
        style={styles.input}
        placeholder={txtTotalApagar}
        onChangeText={t => setTotalApagar(t)}
      />

      <Button
          title="Agregar pago"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => {
            fetch('http://192.168.0.7:3000/pagos/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                idEmpleado:Number(txtIdEmpleado),
                idCliente:Number(txtIdCliente),
                idOrden:Number(txtIdOrden),
                totalApagar:txtTotalApagar
              })
            }).then(() => {
              alert('Pago agregado')
              navigation.navigate('pagos')
            })
          }}
      />

      <Text style={styles.textTitle}>INFORMACIÓN</Text>
      <Text>Numero de empleado:{txtIdEmpleado}</Text>
      <Text>Identificador del cliente:{txtIdCliente}</Text>
      <Text>Numero de orden:{txtIdOrden}</Text>
      <Text>Total a pagar:{txtTotalApagar}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%'
  },
  btnStyle: {
      backgroundColor: "#4B413F"
  },
  btnContainer: {
      width: "90%",
      marginBottom: 10
  }
})