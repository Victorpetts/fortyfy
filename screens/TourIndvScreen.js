import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TourButton } from '../components/TourButton.js';
import style from '../assets/Style.js';
import { FinishedTour } from '../components/FinishedTour.js';
import OngoingTour from '../components/OngoingTour.js';


class TourIndvScreen extends Component {

  state  = {
    ongoing: false
  }

  static navigationOptions = {
    title: 'Tournaments',
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

  const tourName = this.props.navigation.getParam('tourName');
  const numbPlayers = this.props.navigation.getParam('numbPlayers');

    return (
      <ScrollView style={style.mainContainer}>

        {!this.state.ongoing
        ? <View>
          <OngoingTour tourName={tourName} />
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

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(TourIndvScreen);
