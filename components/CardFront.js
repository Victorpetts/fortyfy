import React, { Component } from 'react';
import {
  ImageBackground
} from 'react-native';

class CardFront extends Component {

  static navigationOptions = {
    header: null
  };

  render() {

    const userCard = this.props.userCard;

    return (
      <ImageBackground
        source={userCard}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'cover'}
      />
    )
  }

}

export default CardFront;
