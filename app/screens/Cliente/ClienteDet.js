//import React from 'react';
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text,TextInput, View, Button } from 'react-native';
import useFetch from '../../hooks/useFetch';

export default function ClienteDet({ route, navigation }) {

    const [txtNombre, setNombre] = useState('')
    const [txtFechaNacimiento, setFechaNacimiento] = useState('')
    const [txtTipoCliente, setTipoCliente] = useState('')
    const [txtNumAcompa, setNumAcompa] = useState('')
    const [txtMenoresEdad, setMenoresEdad] = useState('')
    const { id } = route.params;

    const { loading, data } = useFetch(`http://192.168.0.7:3000/clientes/${id}`)

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            
        <View style={styles.viewBtn}>
            {loading ? <Text>Cargando ...</Text> :
                <>
            <Text style={styles.textTitle}>Gestionar clientes</Text>
                <TextInput
                    style={styles.input}
                    value={data.idCliente}
                />

                <Text>Nombre del cliente</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.nombreCliente}
                    onChangeText={nom => setNombre(nom)}
                />

                <Text>Fecha de nacimiento</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.fechaNacimiento}
                    onChangeText={f => setFechaNacimiento(f)}
                />

                <Text>Tipo de cliente</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.tipoCliente}
                    onChangeText={t => setTipoCliente(t)}
                />

                <Text>Numero de compañantes</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.numAcompa}
                    onChangeText={a => setNumAcompa(String(a))}
                />

                <Text>Menores de edad</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.numMenores}
                    onChangeText={m => setMenoresEdad(String(m))}
                />

                <Button
                    title="Eliminar cliente"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/clientes/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        }).then(() => {
                            alert('Cliente eliminado')
                            navigation.navigate('clientes')
                        })
                    }}
                />

                <Button
                    title="Editar cliente"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/clientes/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                idCliente:id,
                                nombreCliente: txtNombre,
                                fechaNacimiento: txtFechaNacimiento,
                                tipoCliente: txtTipoCliente,
                                numAcompa: Number(txtNumAcompa),
                                numMenores: Number(txtMenoresEdad)
                            })
                        }).then(() => {
                            alert(id)
                            alert(txtNombre)
                            alert(txtFechaNacimiento)
                            alert(txtTipoCliente)
                            alert(txtNumAcompa)
                            alert(txtMenoresEdad)
                            navigation.navigate('clientes')
                        })
                    }}
                />

                </>
            }
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    // container: {
    //      flex: 1,
    //      alignItems: 'center',
    //      justifyContent: 'center'
    // },
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
    // btnContainer: {
    //     width: "90%",
    //     marginBottom: 10
    // },
      btnContainer: {
        width: "60%",
        marginBottom: 10
      },
      viewBtn: {
        flex: 6,
        alignItems: "center"
      }
})