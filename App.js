import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './src/Home';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Reducers from './src/Reducers';

let store = createStore(Reducers);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
