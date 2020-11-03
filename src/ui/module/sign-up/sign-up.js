import React, { Component } from "react";
import { View, Alert, Picker } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { Gutters, Layout, Colors } from '../../shared/styles';
import { CallPOST } from "../../../base/communication";
import schoolList from "../../../base/constants/schoolList.json";

export class SignupScreen extends Component {
    constructor({ navigation }) {
        super()
        this.navigation = navigation;
        this.state = {
            username: '',
            accesskey: '',
            email: '',
            school: ''
        }
    }

    buttonClickListener = () => {
        CallPOST('reg/', this.state).then((json) => {
            this.navigation.navigate('Login');
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
                    label='Email'
                    textContentType='emailAddress'
                    mode='flat'
                    theme={{ roundness: 6 }}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    style={Colors.BgWhite}
                    label='Password'
                    mode='flat'
                    textContentType='password'
                    theme={{ roundness: 6 }}
                    onChangeText={accesskey => this.setState({ accesskey })}
                />
                <View style={Gutters.mTop10}>
                    <Picker
                        selectedValue={this.state.school}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(school) => this.setState({ school })}
                    >
                        {
                            schoolList.map(el => <Picker.Item key={el.id} label={el.name} value={el.id} />)
                        }
                    </Picker>
                </View>
                <Button mode='contained' style={Gutters.mTop10} raised theme={{ roundness: 6 }}
                    onPress={this.buttonClickListener}>
                    Sign up
    </Button>

            </View>
        );
    }
}