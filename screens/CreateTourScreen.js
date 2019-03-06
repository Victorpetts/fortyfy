import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Picker,
  ScrollView
} from 'react-native';

import { createTour } from '../actions';
import style from '../assets/Style.js';
import { TourButton } from '../components/Buttons.js';
import DatePicker from 'react-native-datepicker';

class CreateTourScreen extends Component {

  state = {
    name: '',
    players: '',
    wincon: '',
    totalMatches: '',
    fromDate: '',
    toDate: ''
  };

  static navigationOptions = {
    title: 'New Tournament',
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
        fontSize: 30
    }
  };

  createTour = () => {
    if (this.state.name !== '') {
      const newId = this.props.tours.length + 1;
      let newTour = {
        'id': newId,
        'name': this.state.name,
        'players': this.state.players,
        'wincon': this.state.wincon,
        'totalMatches': this.state.totalMatches,
        'finished': false,
        'fromDate': this.state.fromDate,
        'toDate': this.state.toDate
      }
      this.props.createTour(newTour);
      this.props.navigation.navigate('Tournaments');
    }
  }

  render() {

    const { name, players, wincon, totalMatches } = this.state

    return (
      <View style={style.mainContainer}>
        <ScrollView style={style.inputFieldContainer}>
          <Text style={style.inputFieldText}>Tournament name: </Text>
          <TextInput
            id='name'
            value={name}
            style={style.inputField}
            placeholder={'Fill in the tournament name...'}
            maxLength={20}
            onChangeText={(event) =>
              this.setState({ name: event })}
            onSubmitEditing={Keyboard.dismiss}
          />
          <Text style={style.inputFieldText}>Maximum amount of players: </Text>
          <TextInput
            id='players'
            value={players}
            style={style.inputField}
            placeholder={'Fill in the amount of players...'}
            maxLength={2}
            onChangeText={(event) =>
              this.setState({ players: event })}
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
          <Text style={style.inputFieldText}>Time duration: </Text>
          <View style={{
            flexDirection: 'row',
            marginVertical: 10
          }}>
            <DatePicker
              style={{ width: 150 }}
              date={this.state.fromDate}
              is24Hour={true}
              mode="datetime"
              placeholder="select date"
              format="Do MM, HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36,
                },
                dateText: {
                    marginLeft: '5%',
                    marginRight: '5%',
                    width: '90%',
                    color: 'white'
                }
              }}
              onDateChange={(date) => { this.setState({ fromDate: date }), console.log('From date:', date) }}
            />
            <DatePicker
              showIcon={false}
              style={{ width: 150 }}
              date={this.state.toDate}
              is24Hour={true}
              mode="datetime"
              placeholder="select date"
              format="Do MM, HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              textStyle={{ color: 'white' }}
              customStyles={{
                dateInput: {
                  marginLeft: 36,
                },
                dateText: {
                    marginLeft: '5%',
                    marginRight: '5%',
                    width: '90%',
                    color: 'white'
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ toDate: date }), console.log('To date:', date)}}
            />
          </View>
          <Text style={style.inputFieldText}>Win condition: </Text>
          <View style={style.pickerField}>
          <Picker
            selectedValue={this.state.wincon}
            onValueChange={(itemValue) => this.setState({ wincon: itemValue })}>
            <Picker.Item label="Survived most minutes" value="1" />
            <Picker.Item label="Most accumulated kills" value="2" />
            <Picker.Item label="Most placements in top 5" value="3" />
          </Picker>
          </View>

          <Text style={style.inputFieldText}>Total matches: </Text>
          <TextInput
            id='totalMatches'
            value={totalMatches}
            style={style.inputField}
            placeholder={'Fill in a number...'}
            maxLength={2}
            onChangeText={(event) =>
              this.setState({ totalMatches: event })
            }
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
        <View style={{
           marginVertical: 10,
           alignSelf: 'flex-end'
        }}>
          <TourButton
            buttonTitle={'CREATE TOURNAMENT'}
            buttonFunc={this.createTour}
          />
        </View>
        </ScrollView>
      </View>
    )
  };
};


const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, { createTour })(CreateTourScreen);
