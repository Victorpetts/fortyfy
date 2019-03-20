import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Animated,
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
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }
  // funkar inte helt

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

    const userName = this.props.navigation.getParam('userName');
    const userCard = this.props.navigation.getParam('userCard');
    const findUser = this.props.users.find(user => user.name === userName);
    // const card = findUser.card;

    return (
      <TouchableWithoutFeedback
        onPress={this.startAnimation}
      >
        <Animated.View style={animatedStyles}>
          <ImageBackground 
          
          source={
            this.state.flip === false ?
            userCard
          : require('../assets/images/playercards/playercard-blue-frame.png')
          } style={{ width: '100%', height: '100%' }}>
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
