import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  ImageBackground,
  StatusBar,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback
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

  startAnimation = async (userId) => {
    await Animated.spring(this.state.animation, {
      toValue: 90,
      friction: 8,
      tension: 20
    }).start();
    this.props.navigation.navigate('CardBack', { userId: userId })
  }

  render() {

    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 90],
      outputRange: ['0deg', '90deg']
    })
    const animatedStyles = {
      transform: [
        {
          rotateY: rotateInterpolate
        }
      ]
    }

    const userName = this.props.navigation.getParam('userName');
    const userId = this.props.navigation.getParam('userId');
    const userCard = this.props.navigation.getParam('userCard');
    const thisUser = this.props.users.find(user => user.id === userId);

    // this.props.navigation.navigate('CardBack', { userId: userId })
    // const card = findUser.card;

    return (
      <TouchableWithoutFeedback
        onPress={this.startAnimation}
      >
      <Animated.View style={animatedStyles}>
        <ImageBackground source={userCard} style={{width: '100%', height: '100%'}}>
          <Text style={style.cardText}>{userName}</Text>
        </ImageBackground>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, null)(userCardScreen);
