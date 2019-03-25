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

  state = {
    clicked: false
  }

  render() {

    const tourId = this.props.id;
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const isFinished = thisTour.finished;
    const rewardToClaim = thisTour.reward;
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
      this.setState({ clicked: true })
    }

    return (

      <ScrollView contentContainerStyle={style.itemContainer}>
        <TourInfoSection
          tourId={tourId}
        />

        <View style={style.singleButtonContainer}>
          {!isFinished ?
            <TourButton
              buttonTitle={'View tournament'}
              buttonFunc={navigateToOngoing}
            />
          : rewardToClaim && !this.state.clicked ?
              <TourButton
                buttonTitle={'Claim Reward!'}
                buttonFunc={navigateToFinished}
              />
            :
              <TourButton
                buttonTitle={'View tournament'}
                buttonFunc={navigateToFinished}
              />
          }
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
