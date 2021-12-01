import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { editEmail } from '../Actions/authActions';
import { editPassword } from '../Actions/authActions';

import general from '../general';

export function Login(props) {
    return (
        <View style={general.container}>
            <TextInput
                placeholder="Seu e-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                style={general.input}
                value={props.email}
                onChangeText={(text) => props.editEmail(text)}
            />
            <TextInput
                placeholder="Sua senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                style={general.input}
                value={props.password}
                onChangeText={(text) => props.editPassword(text)}
            />
            <TouchableOpacity style={general.btn}>
                <Text style={general.btnText}>Fazer Login</Text>
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

const loginConnect = connect(mapStateToProps, { editEmail, editPassword })(Login);

export default loginConnect;