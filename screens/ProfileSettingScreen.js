import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Switch,
    Keyboard
} from 'react-native';

import { TourButton } from '../components/TourButton.js';

import { FontAwesome } from '@expo/vector-icons';
import style from '../assets/Style.js';

class ProfileSettingScreen extends Component {

    state = {

        toggleSwitch: false
    };

    static navigationOptions = {
        title: 'Settings',
        headerTintColor: 'white',
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: 'black',
            height: 90
        },
        headerTitleStyle: {
            color: 'yellow',
            fontSize: 34
        }
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={style.mainContainer}>
                <ScrollView style={style.inputFieldContainer}>
                    <Text style={style.inputFieldText}>Change Email: </Text>
                    <TextInput
                        id='name'
                        value={name}
                        style={style.inputField}
                        placeholder={'Email'}
                        maxLength={20}
                        onChangeText={(event) =>
                            this.setState({ name: event })}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <Text style={style.inputFieldText}>Old Password: </Text>
                    <TextInput
                        id='name'
                        value={name}
                        style={style.inputField}
                        placeholder={'Old Password'}
                        maxLength={20}
                        onChangeText={(event) =>
                            this.setState({ name: event })}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <Text style={style.inputFieldText}>New Password: </Text>
                    <TextInput
                        id='name'
                        value={name}
                        style={style.inputField}
                        placeholder={'New Password'}
                        maxLength={20}
                        onChangeText={(event) =>
                            this.setState({ name: event })}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <Text style={style.inputFieldText}>Change Phone Number: </Text>
                    <TextInput
                        id='name'
                        value={name}
                        style={style.inputField}
                        placeholder={'Phone number'}
                        maxLength={20}
                        onChangeText={(event) =>
                            this.setState({ name: event })}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Switch
                            value={this.state.toggleSwitch}
                            onValueChange={value => this.setState({ toggleSwitch: value })}
                            trackColor={{ false: 'grey', true: 'yellow' }}
                            thumbColor={'yellow'}
                        />
                        <Text style={style.smallText}>Notifications</Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        alignSelf: 'flex-end'
                    }}>
                        <TourButton
                            buttonTitle={'SAVE'}
                            buttonFunc={() => navigate('Home')}
                        /></View>
                </ScrollView>
            </ScrollView>
        )
    };
};

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, null)(ProfileSettingScreen);