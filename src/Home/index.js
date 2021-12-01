import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import general from '../general';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={general.container}>
            <TouchableOpacity style={general.btn} onPress={ () => navigation.navigate('Login')}>
                <Text style={general.btnText}>Fazer Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={general.btn} onPress={ () => navigation.navigate('Cadastro')}>
                <Text style={general.btnText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}