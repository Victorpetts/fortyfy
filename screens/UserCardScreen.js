import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    TouchableOpacity
} from 'react-native';

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

  render() {

    const userId = this.props.navigation.getParam('userId');
    const userCard = this.props.navigation.getParam('userCard');
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('CardBack', { userId: userId })}
      >
        <ImageBackground source={userCard} style={{width: '100%', height: '100%'}}>
          <Text style={style.cardText}>{userName}</Text>
        </ImageBackground>
      </TouchableOpacity>
  )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
   };
};

export default connect(mapStateToProps, null)(userCardScreen);
