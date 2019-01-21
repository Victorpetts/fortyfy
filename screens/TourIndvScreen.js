import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TourButton } from '../components/TourButton.js';
import style from '../assets/Style.js';

export default class TourIndvScreen extends React.Component {



  static navigationOptions = {
    title: 'Tournament Name',
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


  render() {
    return (
      <View style={style.mainContainer}>
        <Text style={style.headerText}>Mirandas turnering</Text>

      </View>


    )
  }
}
