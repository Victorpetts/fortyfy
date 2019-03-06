import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';
import { FontAwesome } from '@expo/vector-icons';

class Tour extends Component {

  render() {

    const tourId = this.props.id;
    const numbPlayers = this.props.players;
    const numbPartics = this.props.participants.length;
    const tourStatus = this.props.finished;
    const { navigate } = this.props.navigation;

    return (
      tourStatus === false ? (
        <TouchableOpacity
          onPress={() => navigate('Ongoing', {
            tourId: tourId
          })}
        >
          <View style={style.itemContainer}>
            <Text style={style.itemText}>{this.props.name}</Text>
            <Text style={style.itemNumber}>
              {numbPartics} / {numbPlayers}
            </Text>
            <View style={style.iconClass}>
              <FontAwesome name="user-circle" size={22} color="black" style={{ paddingLeft: '2%' }} />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigate('Finished', {
            tourId: tourId
          })}
        >
          <View style={style.itemContainer}>
            <Text style={style.itemText}>{this.props.name}</Text>
            <Text style={style.itemNumber}>
              {numbPartics} / {numbPlayers}
            </Text>
            <View style={style.iconClass}>
              <FontAwesome name="user-circle" size={22} color="black" style={{ paddingLeft: '2%' }} />
            </View>
          </View>
        </TouchableOpacity>
      )
    )

  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(Tour);
