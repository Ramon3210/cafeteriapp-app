import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Dimensions, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { startLocationUpdatesAsync } from "expo-location";

export default function OrdenAdd() {
  const navigation = useNavigation();
  const [txtfechaOrden, setFechaOrden] = useState('Fecha de la orden')
  const [txtHoraOrden, setHoraOrden] = useState('Hora de la orden')
  const [btnEnviar, setEnviar] = useState('')


  return (
    <View style={styles.viewBody}>
      <Text style={styles.textTitle}>AGREGAR ORDEN</Text>

      <Text>Fecha de la orden</Text>
      <TextInput
        style={styles.input}
        placeholder={txtfechaOrden}
        onChangeText={f => setFechaOrden(f)}
      />
      <Text>Hora de la orden</Text>
      <TextInput
        style={styles.input}
        placeholder={txtHoraOrden}
        onChangeText={h => setHoraOrden(h)}
      />

      <Button
          title="Agregar orden"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => {
            fetch('http://192.168.0.7:3000/ordens/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  fechaOrden: txtfechaOrden,
                  horaOrden: txtHoraOrden
              })
            }).then(() => {
              alert('Orden agregada')
              navigation.navigate('ordenes')
            })
          }}
      />

      <Text style={styles.textTitle}>INFORMACIÓN</Text>
      <Text>Fecha de la orden:{txtfechaOrden}</Text>
      <Text>Hora de la orden:{txtHoraOrden}</Text>
      <Text>Texto con click:{btnEnviar}</Text>
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
