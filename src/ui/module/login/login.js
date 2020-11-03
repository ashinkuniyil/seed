import React, { Component } from "react";
import {View, Alert } from 'react-native';
import {Button, TextInput, Text } from 'react-native-paper';

import { Gutters, Layout, Colors } from '../../shared/styles';
import { CallPOST } from "../../../base/communication";

export class LoginScreen extends Component {
    constructor({ navigation }) {
        super()
        this.navigation = navigation;
        this.state = {
            username: '',
            accesskey: ''
        }
    }

    buttonClickListener = () => {
        const { username, accesskey } = this.state;
        CallPOST('auth/', {
            username: username,
            password: accesskey,
        }).then((json) => {
            console.log(json);
            this.navigation.navigate('Details');
        }).catch((error) => {
            Alert.alert('error');
        });
    }

    render() {
        return (
            <View style={Layout.container}>
                <TextInput
                    style={Colors.BgWhite}
                    label='Username'
                    mode='flat'
                    theme={{ roundness: 6 }}
                    onChangeText={username => this.setState({ username })}
                />
                <TextInput
                    style={Colors.BgWhite}
                    label='Password'
                    mode='flat'
                    textContentType='password'
                    theme={{ roundness: 6 }}
                    onChangeText={accesskey => this.setState({ accesskey })}
                />
                <Button mode='contained' style={Gutters.mTop10} raised theme={{ roundness: 6 }}
                    onPress={this.buttonClickListener}>
                    Login
    </Button>
                <Text style={Gutters.mTop10} onPress={() => this.navigation.navigate('Signup')}>Sign up</Text>

            </View>
        );
    }
}