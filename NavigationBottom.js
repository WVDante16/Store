import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function NavigationBottom({navigation}) {
    return (
        <View style={styles.containerNavBottom}>
        <Button 
            color="#455a64"
            title="Atras"
            onPress={() => navigation.goBack()}
        />

        <Button 
            color="#455a64"
            title="Home"
            onPress={() => navigation.popToTop()}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffc2',

        padding: 5,
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
    }
})

export default NavigationBottom;