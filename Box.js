import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Box({id, description}) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.root}>
            <Text>Producto #{id}</Text>
                <Button
                    color="#455a64"
                    title="Ver"
                    onPress={
                        () => navigation.navigate('Details', {
                            id: id,
                            title: title,
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
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 1, 
        borderRadius: 8,
        margin: 10, 
    }
})

export default Box;