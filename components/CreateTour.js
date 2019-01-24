import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTour } from '../actions';
import {
  View,
  Text,
  TextInput,
  Keyboard
} from 'react-native';

import style from '../assets/Style.js';
import { TourButton } from './TourButton.js';

class CreateTour extends Component {

  state = {
    name: '',
    players: ''
  }

  createTour = () => {
    if (this.state.name !== '' && this.state.players !== '') {
      let newTour = { 'name': this.state.name, 'players': this.state.players }
      this.props.createTour(newTour)
    }
  }

  render() {

    const { name, players } = this.state

    return (
      <View style={style.mainContainer}>
      <View style={style.container}>
        <Text style={style.headerText}>Turneringsnamn: </Text>
        <TextInput
          id='name'
          value={name}
          style={style.inputField}
          placeholder={'Fyll i turneringsnamn...'}
          maxLength={20}
          onChangeText={(event) =>
            this.setState({ name: event })}
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={style.headerText}>Max antal spelare: </Text>
        <TextInput
          id='players'
          value={players}
          style={style.inputField}
          placeholder={'Fyll i en siffra...'}
          maxLength={2}
          onChangeText={(event) =>
            this.setState({ players: event })
          }
          onSubmitEditing={Keyboard.dismiss}
          keyboardType='numeric'
        />
        </View>
        <View style={style.buttonContainer}>
          <TourButton
            buttonTitle={'GÅ TILLBAKA'}
            buttonFunc={this.props.buttonFunc}
            />
          <TourButton
            buttonTitle={'SKAPA TURNERING'}
            buttonFunc={this.createTour}
          />
        </View>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, {createTour})(CreateTour);
