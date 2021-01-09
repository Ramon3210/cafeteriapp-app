import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/Mesa/ListItem';
import useFetch from '../../hooks/useFetch';
import MesasDet from "./MesaDet";


export default function MesaList({ navigation }) {

    const { loading, data: mesas } = useFetch('http://192.168.0.7:3000/mesas')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={mesas}
                    keyExtractor={x => x.idMesa}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('mesas-det', { id: item.idMesa, ubicacionSilla: item.ubicacionSilla })}
                            ubicacionSilla={item.ubicacionSilla}
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

