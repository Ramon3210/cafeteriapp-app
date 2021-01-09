import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function MesaAdd() {

    const navigation = useNavigation();
    const [txtDescripcionPlatillo, setDescripcionPlatillo] = useState('Descripcion del platillo')
    const [txtPorcionesPlatillo, setPorcionesPlatillo] = useState('Porciones del platillo')
    const [txtPrecioPlatillo, setPrecioPlatillo] = useState('Precio del platillo')
    const [txtHoraPlatillo, setHoraPlatillo] = useState('Hora del platillo')
    const [txtComentariosPlatillo, setComentariosPlatillo] = useState('Comentarios del platillo')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>
                <Text>Descripcion del platillo</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtDescripcionPlatillo}
                    onChangeText={d => setDescripcionPlatillo(d)}
                />
                <Text>Porciones del platillos</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtPorcionesPlatillo}
                    onChangeText={po => setPorcionesPlatillo(po)}
                />
                <Text>Precio del platillos</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtPrecioPlatillo}
                    onChangeText={pr => setPrecioPlatillo(pr)}
                />
                <Text>Hora del platillos</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtHoraPlatillo}
                    onChangeText={h => setHoraPlatillo(h)}
                />
                <Text>Comentarios del platillos</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtComentariosPlatillo}
                    onChangeText={c => setComentariosPlatillo(c)}
                />
                <Button
                    title="Agregar platillo"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch('http://192.168.0.7:3000/platillos/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                descripcionPlatillo: txtDescripcionPlatillo,
                                porcionesPlatillo: txtPorcionesPlatillo,
                                precioPlatillo: txtPrecioPlatillo,
                                horaPlatillo: txtHoraPlatillo,
                                comentariosPlatillo: txtComentariosPlatillo
                            })
                        }).then(() => {
                            alert('Platillo agregado')
                            navigation.navigate('platillos')
                        })
                    }}
                />
                <Text style={styles.textTitle}>DATOS DEL PLATILLO</Text>
                <Text>DESCRIPCION DEL PLATILLO: {txtDescripcionPlatillo}</Text>
                <Text>PORCIONES DEL PLATILLO: {txtPorcionesPlatillo}</Text>
                <Text>PRECIO DEL PLATILLO: {txtPrecioPlatillo}</Text>
                <Text>HORA DEL PLATILLO: {txtHoraPlatillo}</Text>
                <Text>COMENTARIOS DEL PLATILLO: {txtComentariosPlatillo}</Text>
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