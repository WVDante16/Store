import React from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
import NavigationBottom from './NavigationBottom';

function DetailScreen({route, navigation}) {
    const {id, name, description, image, stock} = route.params;

    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#03a9f4'}}>
            <Text>Details Screen</Text>
            <Image 
                style={styles.imagen}
                source = {{uri: image}}
            />
            <Text>Producto: {id}</Text>
            <Text>Nombre: {name}</Text>
            <Text>Description: {description}</Text>
            <Text>Stock: {stock}</Text>

            <NavigationBottom />
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#00b248',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    },

    imagen: {
        width: 150,
        height: 150,
    }
})

export default DetailScreen;