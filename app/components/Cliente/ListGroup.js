import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ListGroup() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    section: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#eee',
        paddingTop: 2,
        paddingLeft: 10,
        paddingTop: 10
    },
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})

const DATA = [
    {
        title: 'Grupo: ISC 7A',
        data: [
            { key: '1', name: 'ACEVEDO BONILLA SALVADOR' },
            { key: '2', name: 'CASTELLANOS DIAZ MAURO YEUDIEL' },
            { key: '3', name: 'FERNANDEZ PEREZ ALEJANDRO' },
            { key: '4', name: 'MEJIA MANZO ALEJANDRA' },
            { key: '5', name: 'PONCE FERNANDEZ ANDREA KAREN' }
        ]
    },
    {
        title: 'Grupo: ISC 7B',
        data: [
            { key: '6', name: 'CHAVEZ FERNANDEZ MARCO ALBERTO' },
            { key: '7', name: 'GODINEZ GUILLEN GUILLERMO' },
            { key: '8', name: 'LOREDO RIVERA AXEL JOEL' },
            { key: '9', name: 'HERNANDEZ VIERA ANDREA VICTORIA' },
            { key: '10', name: 'SANTANA SALAZAR SELENE SHECCID' }
        ]
    },
    {
        title: 'Grupo: MSC 3º',
        data: [
            { key: '11', name: 'CARRANZA CAMPOS FERNANDO' },
            { key: '12', name: 'CHAVEZ GUERRERO YADIRA' },
            { key: '13', name: 'GARCIA FERNANDEZ RAMON' },
            { key: '14', name: 'HERNANDEZ BARRERA JUAN CARLOS' },
            { key: '15', name: 'MORENO GATICA OSCAR DANIEL' }
        ]
    }
]