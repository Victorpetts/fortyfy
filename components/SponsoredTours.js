import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions';
import {
  View,
  Image,
  ImageBackground,
  Text
} from 'react-native';

import { TourButton, TourButtonGold } from './Buttons.js';

import style from '../assets/Style.js';
import TourInfoSection from './TourInfoSection.js';


class SponsoredTours extends Component {

  state = {
    pressed: false
  }

  render() {

    const tourId = this.props.id;
    const { navigate } = this.props.navigation;

    navigateToOngoing = () => {
      navigate('Ongoing', {
        tourId: tourId
      })
    }

    buttonFunc = () => {

      const tourId = this.props.id;

      this.props.addPlayer(tourId);
      this.setState({ pressed: true })
    }

    return (
      <View style={style.itemContainerGoldBorder}>
        <TourInfoSection
          tourId={tourId}
        />
        <Text style={{ marginHorizontal: 25, textAlign: 'center' }}>
          Join the tournament to win 10.000 coins and a unique background for your card!
        </Text>
        <View style={style.singleButtonContainer}>
          {this.state.pressed === false ?
            <TourButtonGold
              buttonTitle={'Join tournament'}
              buttonFunc={buttonFunc}
            />
            :
            <TourButton
              buttonTitle={'View tournament'}
              buttonFunc={navigateToOngoing}
           />
          }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    users: state.users
   };
};

export default connect(mapStateToProps, { addPlayer })(SponsoredTours);
