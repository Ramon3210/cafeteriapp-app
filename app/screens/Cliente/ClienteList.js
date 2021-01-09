import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/Cliente/ListItem';
import useFetch from '../../hooks/useFetch';
import GruposDet from "../Mesa/MesaDet";


export default function ClienteList({ navigation }) {

    const { loading, data: clientes } = useFetch('http://192.168.0.7:3000/clientes')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={clientes}
                    keyExtractor={x => x.idCliente}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('clientes-det', { id: item.idCliente, nombreCliente: item.nombreCliente })}
                            nombreCliente={item.nombreCliente}
                        />
                    }
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    }
});