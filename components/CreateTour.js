import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import { Icon } from 'expo';

import style from '../assets/Style.js';

export class CreateTour extends React.Component {
  render() {
    return (
        <View style={style.container}>
        <Text style={style.headerText}>Turneringsnamn: </Text>
        <TextInput 
            style={style.inputField}
            placeholder={'Fyll i turneringsnamn...'}
            maxLength={20}
            onSubmitEditing={this.props.addTour}
        />
      </View>
  )}
}
