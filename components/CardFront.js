import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  ImageBackground,
  View,
  Image
} from 'react-native';

import style from '../assets/Style.js';

class CardFront extends Component {

  static navigationOptions = {
    header: null
  };

  render() {

    const userName = this.props.userName;
    const userId = this.props.userId;
    const userCard = this.props.userCard;
    const thisUser = this.props.users.find(user => user.id === userId);

    // this.props.navigation.navigate('CardBack', { userId: userId })
    // const card = findUser.card;

    return (
      <Image
        source={userCard}
        style={{ width: '100%', height: '100%' }}
      />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, null)(CardFront);
