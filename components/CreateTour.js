import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTour } from '../actions';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Picker
} from 'react-native';

import style from '../assets/Style.js';
import { TourButton } from './TourButton.js';
import { addTour } from '../services/AddTourService';

class CreateTour extends Component {

  state = {
    name: '',
    players: '',
    wincon: '',
    totalMatches: ''
  }

  // createTour = () => {
  //   if (this.state.name !== '') {
  //     let newTour = {
  //       'name': this.state.name,
  //       'players': this.state.players,
  //       'wincon': this.state.wincon,
  //       'totalMatches': this.state.totalMatches
  //     }
  //     this.props.createTour(newTour)
  //     this.props.buttonFunc()
  //   }
  // }

  handleSubmit = () => {
    addTour(this.state.name, this.state.players, this.state.wincon, this.state.totalMatches);
    this.props.buttonFunc();
  }

  render() {

    const { name, players, wincon, totalMatches } = this.state

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
            placeholder={'Fyll i antal spelare...'}
            maxLength={2}
            onChangeText={(event) =>
              this.setState({ players: event })}
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
          <Text style={style.headerText}>Seger villkor: </Text>
          <Picker
            selectedValue={this.state.wincon}
            style={{ height: 50, width: '100%', backgroundColor: 'white' }}
            onValueChange={(itemValue) => this.setState({ wincon: itemValue })}>
            <Picker.Item label="Överlevt flest minuter" value="1" />
            <Picker.Item label="Flest sammanlagda kills" value="2" />
            <Picker.Item label="Flest placeringar i top 5" value="3" />
          </Picker>

          <Text style={style.headerText}>Antal matcher: </Text>
          <TextInput
            id='totalMatches'
            value={totalMatches}
            style={style.inputField}
            placeholder={'Fyll i en siffra...'}
            maxLength={2}
            onChangeText={(event) =>
              this.setState({ totalMatches: event })
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
            buttonFunc={this.handleSubmit}
          />
        </View>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, { createTour })(CreateTour);
