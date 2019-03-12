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
    const tourStatus = thisTour.finished;
    const { navigate } = this.props.navigation;

    navigateToOngoing = () => {
      navigate('Ongoing', {
        tourId: tourId
      })
    }

    navigateToFinished = () => {
      navigate('Finished', {
        tourId: tourId
      })
    }

    return (

      <ScrollView
        contentContainerStyle={
          tourStatus === false
            ? style.itemContainer
            : style.itemContainer
        }
        automaticallyAdjustContentInsets={false}
      >
        <TourInfoSection
          tourId={tourId}
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
    tours: state.tours
   };
};

export default connect(mapStateToProps, null)(Tour);
