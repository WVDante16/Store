import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import image from './assets/quieroestarsolo.png';

function HomeScreen({props}) {
    return (
        <View style={styles.container}>
            <Image 
                style = {{width: 400, height: 250, marginBottom: 15}}
                source = {require("./assets/quieroestarsolo.png")}
            />
            <Text style={styles.text}>Pasele a la tiendita</Text>
            <Button onPress={() => navigation.navigate("Store")}/>
        </View>
    );
}

export default HomeScreen;