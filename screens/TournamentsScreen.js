import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import tournaments from '../tournaments.json';
import { TourButton } from '../components/TourButton.js';
import { MyTours } from '../components/MyTours.js';
import { CreateTour } from '../components/CreateTour.js';
import style from '../assets/Style.js';

export default class TournamentsScreen extends React.Component {

  state = {
    tours: tournaments,
    create: false,
    // buttonTitle: '',
    // buttonFunc: ''
  }


  static navigationOptions = {
    title: 'Tournaments',
    headerStyle: {
      backgroundColor: 'black',
      height: 90,
      borderBottomWidth: 4,
      borderColor: 'yellow'
    },
    headerTitleStyle: {
      color: 'yellow',
      fontSize: 34,
      fontFamily: 'sans-serif'
    }
  };

  toggleTour = () => {
    this.setState(prevState => ({
      create: !prevState.create
    }))
  }

  addTour = (newTour) => {
    this.setState(prevState => ({
      create: !prevState.create,
      tours: [...prevState.tours, newTour]
    }))
  }

  render() {

    return (
      <ScrollView style={style.mainContainer}>
          {!this.state.create
            ?
            <View>
              <MyTours
                tours={this.state.tours}
              />
              <View style={style.buttonContainer}>

                <TourButton
                  buttonTitle={'SKAPA TURNERING'}
                  buttonFunc={this.toggleTour}
                />
                <TourButton
                  buttonTitle={'HITTA TURNERING'}
                />
              </View>
            </View>
            : 
            <CreateTour
              addTour={this.addTour}
              buttonFunc={this.toggleTour}
            />
          }
      </ScrollView>
    )
  }
}
