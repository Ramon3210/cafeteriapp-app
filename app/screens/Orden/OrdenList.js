import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/Orden/ListItem';
import useFetch from '../../hooks/useFetch';
import OrdenDet from "./OrdenDet";


export default function OrdenList({ navigation }) {

    const { loading, data: ordenes } = useFetch('http://192.168.0.7:3000/ordens')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={ordenes}
                    keyExtractor={x => x.idOrden}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('ordenes-det', { id: item.idOrden, fechaOrden: item.fechaOrden })}
                            fechaOrden={item.fechaOrden}
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
