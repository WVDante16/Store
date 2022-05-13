import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Menu" component = {MenuScreen} />
        <Stack.Screen name = "Details" component = {DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}