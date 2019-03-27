import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import CardSettings from './CardSettings.js';

import { TourButton } from './Buttons.js';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';

class MyCardProfile extends Component {

  state = {
    isShowing: false
  };

  toggleCardSettings = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    return (

      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('IndvUserCard', {
            userId: "11"
          })}
        >
          <Image
            source={this.props.card}
            resizeMode={'contain'}
            style={{ height: 400, width: 350, alignSelf: 'center' }}
          />
        </TouchableOpacity>
        <View style={{ alignSelf: 'center', marginTop: 15, marginBottom: 15 }}>
          <TourButton
            buttonTitle={"Customize your card!"}
            buttonFunc={this.toggleCardSettings}
          />
        </View>
        {this.state.isShowing &&
          <CardSettings />
        }
      </View>

    )
  };
};

export default MyCardProfile;
