//import React from 'react';
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text,TextInput, View, Button } from 'react-native';
import useFetch from '../../hooks/useFetch';

export default function MesaDet({ route, navigation }) {

    const { id } = route.params;
    const [txtNumSillas, setNumSillas] = useState('')
    const [txtUbicacionMesa, setUbicacionMesa] = useState('')
    const { loading, data } = useFetch(`http://192.168.0.7:3000/mesas/${id}`)

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            
        <View style={styles.viewBtn}>

            {loading ? <Text>Cargando ...</Text> :
                <>

                <TextInput
                    style={styles.input}
                    value={data.idMesa}
                />
                <Text>Cantidad de sillas</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.cantidadSillas}
                    onChangeText={n => setNumSillas(String(n))}
                />
                <Text>Ubicacion de la mesa</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.ubicacionSilla}
                    onChangeText={u => setUbicacionMesa(u)}
                />

                <Button
                    title="Eliminar mesa"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/mesas/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        }).then(() => {
                            alert('Mesa eliminada')
                            navigation.navigate('mesas')
                        })
                    }}
                />

                <Button
                    title="Editar mesa"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/mesas/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                idMesa:id,
                                cantidadSillas: Number(txtNumSillas),
                                ubicacionSilla: txtUbicacionMesa
                            })
                        }).then(() => {
                            alert(txtNumSillas)
                            navigation.navigate('mesas')
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        backgroundColor: "#4B413F"
    },
    btnContainer: {
        width: "90%",
        marginBottom: 10
    },
    input: {
        height: 40,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: "90%"
    },
    viewBtn: {
        flex: 6,
        alignItems: "center"
      }
})