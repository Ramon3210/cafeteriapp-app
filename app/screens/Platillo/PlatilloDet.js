import React, { useState } from "react";
import { ScrollView, StyleSheet, Text,TextInput, View, Button } from 'react-native';
import useFetch from '../../hooks/useFetch';

export default function PlatilloDet({ route, navigation }) {

    const { id } = route.params;
    const [txtDescripcionPlatillo, setDescripcionPlatillo] = useState('')
    const [txtPorcionesPlatillo, setPorcionesPlatillo] = useState('')
    const [txtPrecioPlatillo, setPrecioPlatillo] = useState('')
    const [txtHoraPlatillo, setHoraPlatillo] = useState('')
    const [txtComentariosPlatillo, setComentariosPlatillo] = useState('')
    const { loading, data } = useFetch(`http://192.168.0.7:3000/platillos/${id}`)

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            
        <View style={styles.viewBtn}>

            {loading ? <Text>Cargando ...</Text> :
                <>

                <TextInput
                    style={styles.input}
                    value={data.idPlatillo}
                />
                <Text>Descripcion del platillo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.descripcionPlatillo}
                    onChangeText={d => setDescripcionPlatillo(d)}
                />
                <Text>Porciones del platillo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.porcionesPlatillo}
                    onChangeText={po => setPorcionesPlatillo(po)}
                />
                <Text>Precio del platillo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.precioPlatillo}
                    onChangeText={pr => setPrecioPlatillo(pr)}
                />
                <Text>Hora del platillo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.horaPlatillo}
                    onChangeText={h => setHoraPlatillo(h)}
                />
                <Text>Comentarios del platillo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={data.comentariosPlatillo}
                    onChangeText={c => setComentariosPlatillo(c)}
                />

                <Button
                    title="Eliminar platillo"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/platillos/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        }).then(() => {
                            alert('Platillo eliminado')
                            navigation.navigate('platillos')
                        })
                    }}
                />

                <Button
                    title="Editar platillo"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.0.7:3000/platillos/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                idPlatillo:id,
                                descripcionPlatillo: txtDescripcionPlatillo,
                                porcionesPlatillo: txtPorcionesPlatillo,
                                precioPlatillo: txtPrecioPlatillo,
                                horaPlatillo: txtHoraPlatillo,
                                comentariosPlatillo: txtComentariosPlatillo
                            })
                        }).then(() => {
                            alert('Platillo editado')
                            navigation.navigate('platillos')
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