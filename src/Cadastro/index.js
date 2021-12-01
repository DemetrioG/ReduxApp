import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import general from '../general';

export function Cadastro(props) {
    return (
        <View style={general.container}>
            <TextInput
                placeholder="Seu e-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                style={general.input}
                value={props.email}
            />
            <TextInput
                placeholder="Sua senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                style={general.input}
                value={props.password}
            />
            <TouchableOpacity style={general.btn}>
                <Text style={general.btnText}>Fazer Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

const cadastroConnect = connect(mapStateToProps)(Cadastro);

export default cadastroConnect;