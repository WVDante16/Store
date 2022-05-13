import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Box from './Box';
import NavigationBottom from './NavigationBottom';

const products = [
    {id: 1, title: "Mouse", description: "Mouse gamer para PC", image: 'https://m.media-amazon.com/images/I/61IHl1PNgPL._AC_SY355_.jpg', stock: '300'},
    {id: 2, title: "Teclado", description: "Teclado mecanico gamer", image: 'https://m.media-amazon.com/images/I/51ordArGD6L._AC_SY355_.jpg', stock: '200'},
    {id: 3, title: "Monitor", description: "Monitor Gamer full HD 4K", image: 'https://m.media-amazon.com/images/I/716+x95q79S._AC_SY355_.jpg', stock: '100'},
    {id: 4, title: "Pintura", description: "Pintura amarilla", image: 'https://m.media-amazon.com/images/I/51LvWj2t2YL._AC_SY450_.jpg', stock: '0'},
    {id: 5, title: "Silla", description: "Silla Gamer", image: 'https://m.media-amazon.com/images/I/61vy57CrvnL._AC_SY450_.jpg', stock: '1'},
]

function MenuScreen({navigation}) {
    return (
        <View style = {styles.root}>
            <View style = {styles.containerBox}>
                {
                    products.map((product, i) => (
                        <Box
                            key = {i}
                            id = {product.id}
                            title = {product.title}
                            description = {product.description}
                            image = {product.image}
                            stock = {product.stock}
                        />
                    ))
                }
            </View>
            <NavigationBottom navigation = {navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#ccff90',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default MenuScreen;