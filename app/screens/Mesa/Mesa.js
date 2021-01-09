import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Mesa() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>

      <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{table}' }}
      />
      <Button
        title="Agregar mesa"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("mesas-add")}
      />
      <Button
        title="Lista de mesas"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("mesas-list")}
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

