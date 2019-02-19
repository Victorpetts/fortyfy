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
import style from '../assets/Style.js';

export default class TournamentsScreen extends React.Component {

  static navigationOptions = {
    title: 'Tournaments',
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

  // addTour = (newTour) => {
  //   this.setState(prevState => ({
  //     toggle: !prevState.toggle,
  //     tours: [...prevState.tours, newTour]
  //   }))
  // }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={style.mainContainer}>
            <View>
              <MyTours
                navigation={this.props.navigation}
              />
              <View style={style.buttonContainer}>
                <TourButton
                  buttonTitle={'CREATE TOURNAMENT'}
                  buttonFunc={() => navigate('TourCreate')}
                />
                <TourButton
                  buttonTitle={'SEARCH TOURNAMENT'}
                />
              </View>
            </View>
      </ScrollView>
    )
  }
}
