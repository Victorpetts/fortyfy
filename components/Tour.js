import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import { TourButton } from '../components/TourButton.js';
import TourInfoSection from './TourInfoSection.js';

class Tour extends Component {


  render() {

    const numberOfPartic = this.props.partic.length;
    const tourName = this.props.name;
    const numbPlayers = this.props.players;
    const tourStatus = this.props.finished;
    const { navigate } = this.props.navigation;
    const totalMatches = this.props.totalMatches;
    const wincon = this.props.wincon;
    const fromDate = this.props.fromDate;
    const toDate = this.props.toDate;
    const filter = this.props.tours.find(thisTour => thisTour.name === tourName);
    let winconText;
    let owner = tourName.replace(`'s Tournament`, '' );

    switch (filter.wincon) {
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
        winconText = 'Most kills';
        break
    }

    navigateToOngoing = () => {
      navigate('Ongoing', {
        tourName: tourName,
        numbPlayers: numbPlayers,
        tourStatus: tourStatus,
        totalMatches: totalMatches,
        wincon: wincon,
        fromDate: fromDate,
        toDate: toDate,
        owner: owner
      })
    }

    navigateToFinished = () => {
      navigate('Finished', {
        tourName: tourName,
        numbPlayers: numbPlayers,
        tourStatus: tourStatus,
        totalMatches: totalMatches,
        wincon: wincon,
        fromDate: fromDate,
        toDate: toDate,
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
          titleName={this.props.name}
          titleMatches={this.props.totalMatches}
          tourInfoWincon={winconText}
          tourInfoPartic={numberOfPartic}
          tourInfoMaxPartic={this.props.players}
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
  return {
    partic: state.partic,
    tours: state.tours
  };
};

export default connect(mapStateToProps, null)(Tour);
