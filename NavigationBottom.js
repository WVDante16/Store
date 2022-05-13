import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function NavigationBottom({}) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.root}>
            <Button 
                color="#4f83cc"
                title="Atras"
                onPress={() => navigation.goBack()}
            />

            <Button 
                color="#4f83cc"
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
        backgroundColor: '#002f6c',

        padding: 5,
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
    }
})

export default NavigationBottom;