import React from 'react';
import { connect } from 'react-redux';
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

import { TourButton } from '../components/TourButton.js';
import MyTours from '../components/MyTours';
import CreateTour from '../components/CreateTour.js';
import style from '../assets/Style.js';

export default class TournamentsScreen extends React.Component {

  state = {
    toggle: false
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
      toggle: !prevState.toggle
    }))
  }

  // addTour = (newTour) => {
  //   this.setState(prevState => ({
  //     toggle: !prevState.toggle,
  //     tours: [...prevState.tours, newTour]
  //   }))
  // }

  render() {

    return (
      <ScrollView style={style.mainContainer}>
          {!this.state.toggle
            ?
            <View>
              <MyTours
                navigation={this.props.navigation}
              />
              <View style={style.buttonContainer}>
                <TourButton
                  buttonTitle={`CREATE TOURNAMENT`}
                  buttonFunc={this.toggleTour}
                />
                <TourButton
                  buttonTitle={'SEARCH TOURNAMENT'}
                />
              </View>
            </View>
            :
            <CreateTour
              buttonFunc={this.toggleTour}
            />
          }
      </ScrollView>
    )
  }
}
