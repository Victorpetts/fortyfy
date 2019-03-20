import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  ImageBackground,
  StatusBar,
  Animated,
  TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';

class userCardScreen extends Component {

  static navigationOptions = {
    header: null
  };

  state = {
    animation: new Animated.Value(0),
    flip: false
  }

  componentDidMount() {
    this.subs = [
      this.props.navigation.addListener('didFocus', () => StatusBar.setHidden(true)),
      this.props.navigation.addListener('didBlur', () => StatusBar.setHidden(false)),
    ];
  }

  componentWillUnmount() {
    this.subs.forEach((sub) => {
      sub.remove();
    });
  } 

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 180,
      duration: 1500
    }).start();
  }

  render() {

    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    const animatedStyles = {
      transform: [
        {
          rotateY: rotateInterpolate
        }
      ]
    }

    const userId = this.props.navigation.getParam('userId');
    const userCard = this.props.navigation.getParam('userCard');
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;
    // const card = findUser.card;

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
