import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Box({id, name, description, image, stock}) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.root}>
            <Image 
                style = {styles.imagen}
                source = {{uri: image}}
            />
            <Text>Producto #{id}</Text>
                <Button
                    color="#4f83cc"
                    title="Ver"
                    onPress={
                        () => navigation.navigate('Details', {
                            id: id,
                            name: name,
                            description: description,
                            image: image,
                            stock: stock,
                        })
                    }
                />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: 160,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5d99c6',
        borderWidth: 1, 
        borderRadius: 8,
        margin: 10, 
    },

    text: {
        textAlign: 'center'
    },

    imagen: {
        width: 158,
        height: 150,
        bottom: 4, 
    }
})

export default Box;