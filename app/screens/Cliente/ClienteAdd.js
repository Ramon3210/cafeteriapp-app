import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native";

export default function ClienteAdd() {
    const navigation = useNavigation();
    const [txtNombre, setNombre] = useState('Escribe el nombre del cliente')
    const [txtFechaNacimiento, setFechaNacimiento] = useState('Fecha de nacimiento del cliente')
    const [txtTipoCliente, setTipoCliente] = useState('Tipo de cliente')
    const [txtNumAcompa, setNumAcompa] = useState('Numero de acompañantes')
    const [txtMenoresEdad, setMenoresEdad] = useState('Cantidad de menores de edad')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>
                <Text style={styles.textTitle}>Registrar clientes</Text>
                <Text>Nombre del cliente</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNombre}
                    onChangeText={n => setNombre(n)}
                />
                <Text>Fecha de nacimiento</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtFechaNacimiento}
                    onChangeText={fn => setFechaNacimiento(fn)}
                />
                <Text>Tipo de cliente</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtTipoCliente}
                    onChangeText={t => setTipoCliente(t)}
                />
                <Text>Numero de acompañantes</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNumAcompa}
                    onChangeText={a => setNumAcompa(a)}
                />
                <Text>Menores de edad</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtMenoresEdad}
                    onChangeText={m => setMenoresEdad(m)}
                />
                <Button
                    title="Agregar cliente"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch('http://192.168.0.7:3000/clientes/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                nombreCliente: txtNombre,
                                fechaNacimiento: txtFechaNacimiento,
                                tipoCliente: txtTipoCliente,
                                numAcompa: Number(txtNumAcompa),
                                numMenores: Number(txtMenoresEdad)
                            })
                        }).then(() => {
                            alert('Cliente agregado')
                            navigation.navigate('clientes')
                        })
                    }}
                />
                <Text style={styles.textTitle}>DATOS DEL CLIENTE</Text>
                <Text>NOMBRE: {txtNombre}</Text>
                <Text>FECHA NACIMIENTO: {txtFechaNacimiento}</Text>
                <Text>TIPO DE CLIENTE: {txtTipoCliente}</Text>
                <Text>NUMERO DE ACOMPAÑANTES: {txtNumAcompa}</Text>
                <Text>MENORES DE EDAD: {txtMenoresEdad}</Text>
                <Text>TEXTO DE BOTON {btnEnviar}</Text>
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