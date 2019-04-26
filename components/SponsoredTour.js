import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinTour, withdrawCoins } from '../actions';
import {
  View,
  Text
} from 'react-native';
import { Overlay } from 'react-native-elements';

import {
  TourButton,
  TourButtonGold,
  TourButtonMedium,
  TourButtonMediumRed
} from './Buttons.js';
import TourInfoSection from './TourInfoSection.js';

import Colors from '../constants/Colors.js';
import style from '../assets/Style.js';


class SponsoredTour extends Component {

  state = {
    pressed: false,
    isVisible: false
  }

  render() {

    const tourId = this.props.id;
    const { navigate } = this.props.navigation;
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const hasJoined = thisTour.joined;

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
      this.props.joinTour(tourId);
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
      <View>

        {!hasJoined ?
          <View style={style.itemContainerGoldBorder}>
            <TourInfoSection
              tourId={tourId}
            />
            <View style={style.singleButtonContainer}>
              <TourButtonGold
                buttonTitle={'Join tournament'}
                buttonFunc={buttonFunc}
              />
            </View>
            <Text style={style.sponsorInfoText}>
              Join the tournament to win <Text style={{ fontFamily: 'alergia-normal-semibold' }}>10.000 coins</Text> and a <Text style={{ fontFamily: 'alergia-normal-semibold' }}>unique background</Text> for your card!
            </Text>
          </View>
        :
          <View style={style.itemContainerBlueBorder}>
            <TourInfoSection
              tourId={tourId}
            />
            <View style={style.singleButtonContainer}>
              <TourButton
                buttonTitle={'View tournament'}
                buttonFunc={navigateToOngoing}
              />
            </View>
            <Text style={style.sponsorInfoText}>
              Play your matches to win <Text style={{ fontFamily: 'alergia-normal-semibold' }}>10.000 coins</Text> and a <Text style={{ fontFamily: 'alergia-normal-semibold' }}>unique background</Text> for your card!
            </Text>
          </View>
        }

        { this.state.isVisible &&
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours
   };
};

export default connect(mapStateToProps, { joinTour, withdrawCoins })(SponsoredTour);
