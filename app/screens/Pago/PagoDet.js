import React, { useState } from "react";
import { ScrollView, StyleSheet, Text,TextInput, View, Button } from 'react-native';
import useFetch from '../../hooks/useFetch';

export default function PagoDet({ route, navigation }) {

    const { id } = route.params;
    const [txtIdEmpleado, setIdEmpleado] = useState('')
    const [txtIdCliente, setIdCliente] = useState('')
    const [txtIdOrden, setIdOrden] = useState('')
    const [txtTotalApagar, setTotalApagar] = useState('')
    const { loading, data } = useFetch(`http://192.168.0.7:3000/pagos/${id}`)

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            
        <View style={styles.viewBtn}>

            {loading ? <Text>Cargando ...</Text> :
                <>

                <TextInput
                    style={styles.input}
                    value={data.idPago}
                />
                <Text>Numero de empleado</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.idEmpleado}
                    onChangeText={e => setIdEmpleado(e)}
                />
                <Text>Numero de cliente</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.idCliente}
                    onChangeText={c => setIdCliente(c)}
                />
                <Text>Numero de orden</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.idOrden}
                    onChangeText={o => setIdOrden(o)}
                />
                <Text>Total a pagar</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.totalApagar}
                    onChangeText={t => setTotalApagar(t)}
                />

                <Button
                    title="Eliminar pago"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/pagos/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        }).then(() => {
                            alert('Pago eliminado')
                            navigation.navigate('pagos')
                        })
                    }}
                />

                <Button
                    title="Editar pago"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/pagos/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                idPago:id,
                                idEmpleado:Number(txtIdEmpleado),
                                idCliente:Number(txtIdCliente),
                                idOrden:Number(txtIdOrden),
                                totalApagar:txtTotalApagar
                            })
                        }).then(() => {
                            alert('Pago actualizado')
                            navigation.navigate('pagos')
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