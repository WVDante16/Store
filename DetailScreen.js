import React from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
import NavigationBottom from './NavigationBottom';

function DetailScreen({route, navigation}) {
    const {id, title, description, image, stock} = route.params;

    navigation.setOptions({
        title: title,
        headerRight: () => (
            <button
                title="Buy"
                onProgress={() => {}}
                disabled={stock === 0}
            />
        )
    })

    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66ffa6'}}>
            <Text>Details Screen</Text>
            <Text>Producto: {id}</Text>
            <Text>Nombre: {title}</Text>
            <Text>Description: {description}</Text>
            <Text>Stock: {stock}</Text>

            <NavigationBottom navigation = {navigation} />
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
    }
})

export default DetailScreen;