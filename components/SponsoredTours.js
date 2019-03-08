import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

import TourInfoSection from '../components/TourInfoSection.js';
import { TourButton, TourButtonRed } from '../components/Buttons.js';

import style from '../assets/Style.js';

class SponsoredTours extends Component {

  state = {
    pressed: false
  }

  render() {

    return (
      <View style={
        this.state.pressed === false
        ? style.itemContainerSponsor
        : style.itemContainerSponsorBlue
      }>
        <Image
          source={require('../assets/images/redbull.png')}
          style={{ height: 50, width: 87, position: 'absolute', top: 15, left: 20 }}
        />
        <TourInfoSection
          titleMatches={'10'}
          tourInfoWincon={'Most kills'}
          tourInfoPartic={this.state.pressed === false ? '6' : '7'}
          tourInfoMaxPartic={'100'}
          owner={'Red Bull'}
        />
        <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
          {this.state.pressed === false ?
            <TourButtonRed
              buttonTitle={'Join tournament'}
              buttonFunc={() => this.setState({ pressed: true })}
            />
            :
            <TourButton
              buttonTitle={'View tournament'}
            />
          }
        </View>
      </View>
    )
  }
}

export default SponsoredTours;
