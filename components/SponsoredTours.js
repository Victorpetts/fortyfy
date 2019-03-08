import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground
} from 'react-native';

import TourInfoMockUp from '../components/TourInfoMockUp';
import { TourButton, TourButtonRed } from '../components/Buttons.js';

import style from '../assets/Style.js';

class SponsoredTours extends Component {

  state = {
    pressed: false
  }

  render() {

    return (

      <View style={style.itemContainerNoBorder}>
        <ImageBackground
          source={require('../assets/images/redbullsponsorbg.png')}
          style={{ width: '100%', padding: 0 }}
          resizeMode={'cover'}
        >
          <Image
            source={require('../assets/images/redbull.png')}
            style={{ height: 50, width: 87, position: 'absolute', top: 15, left: 20 }}
          />
          <TourInfoMockUp
            totalMatches={'10'}
            winconText={'Most kills'}
            numberOfPlayers={this.state.pressed === false ? '6' : '7'}
            maxPlayers={'100'}
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
        </ImageBackground>
      </View>
    )
  }
}

export default SponsoredTours;
