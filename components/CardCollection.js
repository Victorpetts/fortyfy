import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';

class CardCollection extends Component {

  state = {
    image: this.props.card
  }

  render() {

    const userName = this.props.name;
    const userCard = this.state.image;

    return (

      <View style={style.indvCardContainer}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('IndvUserCard', {
            userName: userName,
            userCard: userCard
          })}
        >
          <Image
            source={this.state.image}
            style={{ height: 150, width: 100 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(CardCollection);
