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

    const ownersId = thisTour.owner;
    const ownerObj = this.props.users.find(user => user.id === ownersId);
    const owner = ownerObj.name;
    const ownerLvl = ownerObj.lvl;

    const { navigate } = this.props.navigation;

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

      <ScrollView contentContainerStyle={style.itemContainer}>
        <TourInfoSection
          id={tourId}
          owner={owner}
        />
        <View style={{
          alignItems: 'center',
          padding: 10
        }}>
          {tourStatus === false ? (
            <TourButton
              buttonTitle={'View tournament'}
              buttonFunc={navigateToOngoing}
            />
          ) : (
            <TourButton
              buttonTitle={'View tournament'}
              buttonFunc={navigateToFinished}
            />
          )}
        </View>
      </ScrollView>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    users: state.users,
   };
};

export default connect(mapStateToProps, null)(Tour);
