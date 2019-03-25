import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StatusBar,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

import style from '../assets/Style.js';
import CardFront from '../components/CardFront.js';
import CardBack from '../components/CardBack.js';

class userCardScreen extends Component {

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }

  }

  render() {

    const frontAnimatedStyles = {
      backfaceVisibility: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      transform: [
        {
          rotateY: this.frontInterpolate
        }
      ]
    }

    const backAnimatedStyles = {
      backfaceVisibility: 'hidden',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      height: '100%',
      width: '100%',
      transform: [
        {
          rotateY: this.backInterpolate
        }
      ]
    }

    const userId = this.props.navigation.getParam('userId');
    const userCard = this.props.navigation.getParam('userCard');

    // this.props.navigation.navigate('CardBack', { userId: userId })
    // const card = findUser.card;

    return (
      <View style={style.userCardContainer}>
        <TouchableWithoutFeedback
          style={{ height: '100%', width: '100%' }}
          onPress={() => this.flipCard()}
        >
          <View style={{ height: '100%', width: '100%' }}>
            <Animated.View style={[frontAnimatedStyles, { opacity: this.frontOpacity }]}>
              <CardFront
                userCard={userCard}
                userId={this.props.userId}
              />
            </Animated.View>
            <Animated.View style={[backAnimatedStyles, { opacity: this.backOpacity }]}>
              <CardBack
                navigation={this.props.navigation}
                userId={userId}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
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
