import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Platillo() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>
      <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{dish}' }}
      />
      <Button
        title="Agregar platillo"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("platillos-add")}
      />

      <Button
        title="Lista de platillos"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("platillos-list")}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  listStyle: {
    marginTop: 0
  },
  btnStyle: {
    backgroundColor: "#4B413F"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 10
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  },
  photo: {
    height: 240,
    width: 240,
    marginBottom: 20,
    marginTop: 20
  }
});