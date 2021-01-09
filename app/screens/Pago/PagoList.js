import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/Pago/ListItem';
import useFetch from '../../hooks/useFetch';
import PagoDet from "./PagoDet";


export default function PagoList({ navigation }) {

    const { loading, data: pagos } = useFetch('http://192.168.0.7:3000/pagos')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={pagos}
                    keyExtractor={x => x.idPago}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('pagos-det', { id: item.idPago, totalApagar: item.totalApagar })}
                            totalApagar={item.totalApagar}
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