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
import FinishedTour from '../components/FinishedTour.js';
import OngoingTour from '../components/OngoingTour.js';


class TourIndvScreen extends Component {

  state =  {
    ongoing: false
  }

  static navigationOptions = {
    header: null,
    headerLeft: null,
  };


  render() {

  const tourName = this.props.navigation.getParam('tourName');
  const numbPlayers = this.props.navigation.getParam('numbPlayers');
  const tourStatus = this.props.navigation.getParam('tourStatus');


    return (
      <ScrollView style={style.mainContainer}>

        {!tourStatus
        ? <View>
          <OngoingTour tourName={tourName} />
          <View style={style.buttonContainer}>
            <TourButton buttonTitle={'MANAGE TOURNAMENT'} />
            <TourButton buttonTitle={'INVITE FRIENDS'} />
          </View>
        </View>
        : <FinishedTour  tourName={tourName} />
        }

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(TourIndvScreen);
