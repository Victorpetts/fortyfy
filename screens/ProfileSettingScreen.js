import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Switch,
  Keyboard
} from 'react-native';

import { TourButtonFullWidth } from '../components/Buttons.js';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';


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
      backgroundColor: Colors.appBlackColor,
      height: 60,
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      textAlign: 'center',
      width: '75%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    }
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={style.mainContainer}>
        <ScrollView style={style.inputFieldContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={style.inputFieldText}>Notifications:</Text>
            <View style={{ paddingTop: 20 }}>
              <Switch
                value={this.state.toggleSwitch}
                onValueChange={value => this.setState({ toggleSwitch: value })}
                trackColor={{ false: 'grey', true: Colors.appBrightBlueColor }}
                thumbColor={Colors.appBlueColor}
              />
            </View>
          </View>
          <Text style={style.inputFieldText}>Email Address: </Text>
          <TextInput
            id='name'
            style={style.inputField}
            placeholder={'sirYonyfy@hotmail.com'}
            maxLength={20}
            onSubmitEditing={Keyboard.dismiss}
          />
          <View style={{ paddingTop: 20 }}>
            <TourButtonFullWidth
              buttonTitle={'Change Email Address'}
            />
          </View>
          <Text style={style.inputFieldText}>Current Password: </Text>
          <TextInput
            id='name'
            style={style.inputField}
            placeholder={'Current Password'}
            maxLength={20}
            onSubmitEditing={Keyboard.dismiss}
          />
          <Text style={style.inputFieldText}>New Password: </Text>
          <TextInput
            id='name'
            style={style.inputField}
            placeholder={'New Password'}
            maxLength={20}
            onSubmitEditing={Keyboard.dismiss}
          />
        <Text style={style.inputFieldText}>Retype New Password: </Text>
          <TextInput
            id='name'
            style={style.inputField}
            placeholder={'Retype New Password:'}
            maxLength={20}
            onSubmitEditing={Keyboard.dismiss}
          />
          <View style={{ paddingTop: 20 }}>
            <TourButtonFullWidth
              buttonTitle={'Change Password'}
            />
          </View>
          <Text style={style.inputFieldText}>Phone Number: </Text>
          <TextInput
            id='name'
            style={style.inputField}
            placeholder={'073-1337404'}
            maxLength={20}
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
          <View style={{ paddingTop: 20 }}>
            <TourButtonFullWidth
              buttonTitle={'Change Phone Number'}
            />
          </View>
        </ScrollView>
      </ScrollView>
    )
  };
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default ProfileSettingScreen;
