import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TourButton } from '../components/TourButton.js';
import style from '../assets/Style.js';
import { FinishedTour } from '../components/FinishedTour.js';
import { OngoingTour } from '../components/OngoingTour.js';

export default class TourIndvScreen extends React.Component {

  state  = {
    ongoing: false
  }



  static navigationOptions = {
    title: 'Mirandas turnering',
    headerLeft: null,
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
      <ScrollView style={style.mainContainer}>

        {!this.state.ongoing
        ? <View>
          <OngoingTour />
          <View style={style.buttonContainer}>
            <TourButton buttonTitle={'HANTERA TURNERING'} />
            <TourButton buttonTitle={'BJUD IN VÄNNER'} />
          </View>
        </View>
        : <FinishedTour />
        }
        
      </ScrollView>


    )
  }
}
