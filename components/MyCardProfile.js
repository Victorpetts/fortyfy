import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Image,
  Text
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
          <Image
            source={this.state.image}
            resizeMode={'contain'}
            style={{ height: 400, width: 350, alignSelf: 'center' }}
          />


          <View style={{ alignSelf: 'center', paddingTop: '5%', paddingBottom: '10%' }}>
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

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, null)(MyCardProfile);
