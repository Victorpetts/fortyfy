import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';

import style from '../assets/Style.js';

class CardCollection extends Component {

  state = {
    animateItem: new Animated.Value(0)
  }

  componentDidMount() {
    const { index } = this.props

    Animated.timing(this.state.animateItem, {
      toValue: 1,
      duration: 1000,
      delay: index * 100,
      useNativeDriver: true
    }).start()
  }

  render() {

    const userId = this.props.id;
    const userCard = this.props.card;

    return (

      <Animated.View style={[style.indvCardContainer,
        {transform: [
          {
            translateY: this.state.animateItem.interpolate({
              inputRange: [0, 1],
              outputRange: [700, 1]
            })
          }
        ]}]}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('IndvUserCard', {
            userId: userId
          })}
        >
          <Image
            source={userCard}
            style={{ height: 150, width: 100 }}
          />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

export default CardCollection;
