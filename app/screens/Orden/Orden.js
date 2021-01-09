import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Orden() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Ordenes</Text>

      <View style={styles.viewBtn}>
      <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{food}' }}
      />
        <Button
          title="Agregar orden"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("ordenes-add")}
        />
        <Button
          title="Lista de ordenes"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("ordenes-list")}
        />
      </View>
    </ScrollView>
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
  btnStyle: {
    backgroundColor: "#4B413F",
    marginBottom: 10
  },
  btnContainer: {
    width: "70%"
  },
  viewBtn: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  photo: {
    height: 240,
    width: 240,
    marginBottom: 20,
    marginTop: 20
  }
});

