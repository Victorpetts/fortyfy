import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import style from '../assets/Style.js';

class userCardScreen extends Component {

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }
  // funkar inte

  render() {


    return (
      <View>
        <ImageBackground source={require('../assets/images/sings.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={style.cardFrame} />
          <Text style={style.cardText}>Ditt kort</Text>
        </ImageBackground>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
   };
};

export default connect(mapStateToProps, null)(userCardScreen);
