import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import { TourButton } from '../components/Buttons.js';
import TourInfoSection from './TourInfoSection.js';

class Tour extends Component {

  render() {

    const tourId = this.props.id;
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const tourName = thisTour.name;
    const tourStatus = thisTour.finished;
    const totalMatches = thisTour.totalMatches;
    const numberOfPartic = thisTour.participants.length;
    const maxPlayers = thisTour.players;
    const owner = tourName.replace(`'s Tournament`, '' );
    const { navigate } = this.props.navigation;
    let winconText;

    switch (thisTour.wincon) {
      case '1':
        winconText = 'Survived longest';
        break
      case '2':
        winconText = 'Most kills';
        break
      case '3':
        winconText = 'Most top 5';
        break
      default:
        winconText = '';
        break
    }

    navigateToOngoing = () => {
      navigate('Ongoing', {
        tourId: tourId,
        owner: owner
      })
    }

    navigateToFinished = () => {
      navigate('Finished', {
        tourId: tourId,
        owner: owner
      })
    }

    return (
      <ScrollView contentContainerStyle={
        tourStatus === false
          ? style.itemContainer
          : style.itemContainerNoBorder}
        automaticallyAdjustContentInsets={false}
      >

        <TourInfoSection
          titleName={tourName}
          titleMatches={totalMatches}
          tourInfoWincon={winconText}
          tourInfoPartic={numberOfPartic}
          tourInfoMaxPartic={maxPlayers}
          owner={owner}
        />

        {tourStatus === false ? (
          <View style={{
            alignItems: 'center',
            padding: 10
          }}>
            <TourButton
              buttonTitle={'View tournament'}
              buttonFunc={navigateToOngoing}
            />
          </View>
        ) : (
            <View style={{
              alignItems: 'center',
              padding: 10
            }}>
              <TourButton
                buttonTitle={'View tournament'}
                buttonFunc={navigateToFinished}
              />
            </View>
          )}
      </ScrollView>
    )

  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(Tour);
