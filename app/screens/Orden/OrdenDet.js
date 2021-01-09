//import React from 'react';
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text,TextInput, View, Button } from 'react-native';
import useFetch from '../../hooks/useFetch';

export default function OrdenDet({ route, navigation }) {

    const { id } = route.params;
    const [txtfechaOrden, setFechaOrden] = useState('')
    const [txtHoraOrden, setHoraOrden] = useState('')
    const { loading, data } = useFetch(`http://192.168.0.7:3000/ordens/${id}`)

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            
        <View style={styles.viewBtn}>

            {loading ? <Text>Cargando ...</Text> :
                <>

                <TextInput
                    style={styles.input}
                    value={data.idOrden}
                />
                <Text>Fecha de la orden</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.fechaOrden}
                    onChangeText={n => setFechaOrden(String(n))}
                />
                <Text>Hora de la orden</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.horaOrden}
                    onChangeText={u => setHoraOrden(u)}
                />

                <Button
                    title="Eliminar orden"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/ordens/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        }).then(() => {
                            alert('Orden eliminada')
                            navigation.navigate('ordenes')
                        })
                    }}
                />

                <Button
                    title="Editar orden"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/ordens/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                idOrden:id,
                                fechaOrden: txtfechaOrden,
                                horaOrden: txtHoraOrden
                            })
                        }).then(() => {
                            alert('Orden actualizada')
                            navigation.navigate('ordenes')
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
