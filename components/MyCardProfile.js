import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import CardSettings from './CardSettings.js';

import { TourButton } from './Buttons.js';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';

class MyCardProfile extends Component {

  state = {
    image: this.props.card,
    isShowing: false
  };

  toggleCardSettings = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {

    return (

      <View style={{
        height: '100%',
        width: '100%'
      }}>
        <ScrollView style={{
          paddingVertical: 10
        }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('IndvUserCard', {
              userId: "11"
            })}
          >
            <Image
              source={this.state.image}
              resizeMode={'contain'}
              style={{ height: 400, width: 350, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center', marginTop: 15, marginBottom: 45 }}>
            <TourButton
              buttonTitle={"Customize your card!"}
              buttonFunc={this.toggleCardSettings}
            />
          </View>
          {this.state.isShowing === true &&
            <CardSettings />
          }

        </ScrollView>
        <View style={{ paddingBottom: 100 }} />
      </View>

    )
  };
};

export default MyCardProfile;
