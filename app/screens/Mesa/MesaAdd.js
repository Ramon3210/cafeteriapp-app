import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function MesaAdd() {

    const navigation = useNavigation();
    const [txtNumSillas, setNumSillas] = useState('Escribe la cantidad de sillas')
    const [txtUbicacionMesa, setUbicacionMesa] = useState('Ubicacion de la mesa')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>
                <Text>Numero de sillas</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNumSillas}
                    onChangeText={n => setNumSillas(n)}
                />
                <Text>Ubicacion de la mesa</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtUbicacionMesa}
                    onChangeText={u => setUbicacionMesa(u)}
                />
                <Button
                    title="Agregar mesa"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch('http://192.168.0.7:3000/mesas/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                cantidadSillas: Number(txtNumSillas),
                                ubicacionSilla: txtUbicacionMesa
                            })
                        }).then(() => {
                            alert('Mesa agregada')
                            navigation.navigate('mesas')
                        })
                    }}
                />
                <Text style={styles.textTitle}>DATOS DE LA MESA</Text>
                <Text>NUMERO DE SILLAS: {txtNumSillas}</Text>
                <Text>UBICACION DE LA MESA: {txtUbicacionMesa}</Text>
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
    input: {
        height: 40,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: "90%"
    },
    btnStyle: {
        backgroundColor: "#4B413F"
    },
    btnContainer: {
        width: "90%",
        marginBottom: 10
    }
})