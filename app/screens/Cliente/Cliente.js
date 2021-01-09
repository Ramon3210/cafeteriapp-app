import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Cliente() {
  const navigation = useNavigation();

//   state = {
//     image: ''
// }


  return (
    <View style={styles.viewBtn}>
      <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{client}' }}
      />
      <Button
        title="Agregar cliente"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("clientes-add")}
      />
      <Button
        title="Lista de clientes"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("clientes-list")}
      />
    </View>
  );
}

// async function getImage(image) {
//   let imageReturn = await Storage.get('9807139f-e5b4-428e-8dfb-d7cfeebe87ab.jpeg')
//   this.setState({
//       image: imageReturn
//   })
// }

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
    width: "60%",
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

