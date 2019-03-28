import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, withdrawCoins } from '../actions';
import {
  View,
  Image,
  ImageBackground,
  Text
} from 'react-native';
import { Overlay } from 'react-native-elements';

import { TourButton, TourButtonGold, TourButtonMedium, TourButtonMediumRed } from './Buttons.js';

import Colors from '../constants/Colors.js';
import style from '../assets/Style.js';
import TourInfoSection from './TourInfoSection.js';


class SponsoredTours extends Component {

  state = {
    pressed: false,
    isVisible: false
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
      this.setState({ isVisible: true })
    }

    acceptButton = () => {

      const tourId = this.props.id;
      this.props.addPlayer(tourId);
      this.props.withdrawCoins(500);
      this.setState({
        pressed: true,
        isVisible: false
      })

      navigate('Ongoing', {
        tourId: tourId
      })
    }

    return (
      <View style={style.itemContainerGoldBorder}>
        <TourInfoSection
          tourId={tourId}
        />
        <Text style={style.sponsorInfoText}>
          Join the tournament to win <Text style={{ fontFamily: 'alergia-normal-semibold' }}>10.000 coins</Text> and a <Text style={{ fontFamily: 'alergia-normal-semibold' }}>unique background</Text> for your card!
        </Text>
        <View style={style.singleButtonContainer}>
          {!this.state.pressed ?
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
          {this.state.isVisible === true &&
            <Overlay
              height='auto'
              width='90%'
              isVisible={this.state.isVisible == true}
              onBackdropPress={() => this.setState({ isVisible: false })}
              overlayBackgroundColor={'black'}
              overlayStyle={{
                borderColor: Colors.appBlueColor,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: Colors.appBackgroundColor
              }}>
              <View>
                <Text style={style.paragraphText}>
                  Participating in this tournament costs <Text style={{ fontFamily: 'alergia-normal-semibold' }}>500 coins</Text>. Do you want to join?
                </Text>
                <View style={style.doubleButtonContainer}>
                  <TourButtonMediumRed
                    buttonTitle={'Cancel'}
                    buttonFunc={() => this.setState({ isVisible: false })}
                    />
                  <TourButtonMedium
                    buttonTitle={'Pay and join'}
                    buttonFunc={acceptButton}
                  />
                </View>
              </View>
            </Overlay>
          }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours
   };
};

export default connect(mapStateToProps, { addPlayer, withdrawCoins })(SponsoredTours);
