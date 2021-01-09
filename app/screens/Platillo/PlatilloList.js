import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/Platillo/ListItem';
import useFetch from '../../hooks/useFetch';
import PlatillosDet from "./PlatilloDet";


export default function PlatilloList({ navigation }) {

    const { loading, data: platillos } = useFetch('http://192.168.0.7:3000/platillos')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={platillos}
                    keyExtractor={x => x.idPlatillo}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('platillos-det', { id: item.idPlatillo, descripcionPlatillo: item.descripcionPlatillo })}
                            descripcionPlatillo={item.descripcionPlatillo}
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