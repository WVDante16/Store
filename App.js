import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "Home" component = {HomeScreen} />
        <Drawer.Screen name = "Menu" component = {MenuScreen} />
        <Drawer.Screen name = "Details" component = {DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}