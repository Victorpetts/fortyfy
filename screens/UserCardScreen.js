import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';

import style from '../assets/Style.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

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
  // funkar inte helt

  render() {
    const userName = this.props.navigation.getParam('userName');
    const userCard = this.props.navigation.getParam('userCard');
    const findUser = this.props.users.find( user => user.name === userName );
    // const card = findUser.card;

    return (
      <View>
        <ImageBackground source={userCard} style={{width: '100%', height: '100%'}}>
          <Text style={style.cardText}>{userName}</Text>
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
