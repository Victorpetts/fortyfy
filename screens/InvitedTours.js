import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

import TourInfoSection from '../components/TourInfoSection.js';

import style from '../assets/Style.js';

class InvitedTours extends Component {

  state = {
    acceptInvite: this.props.acceptInvite

  }

  render() {

    return (
        <View>
        <Text style={style.blueText}>Invites (1)</Text>
        <View style={style.itemContainer}>
          <TourInfoSection
            titleName={`Jesper's Tournament`}
            titleMatches={'10'}
            tourInfoWincon={'Most Top 5'}
            tourInfoPartic={'1'}
            tourInfoMaxPartic={'10'}
            owner={'Jesper'}
          />
        </View>
      </View>
    )
  }
}

export default InvitedTours;
