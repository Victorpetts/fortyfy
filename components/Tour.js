import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'expo';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Tour extends Component {


  render() {

    const numberOfPartic = this.props.partic.length;
    const tourName = this.props.name;
    const numbPlayers = this.props.players;
    const tourStatus = this.props.finished;

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('TourIndv',{
              tourName: tourName,
              numbPlayers: numbPlayers,
              tourStatus: tourStatus
            })}
        >
      <View style={style.itemContainer}>
        <Text style={style.itemText}>{this.props.name}</Text>
        <Text style={style.itemNumber}>
        {numberOfPartic} / {this.props.players}
        </Text>
        <View style={style.iconClass}>
        <FontAwesome style={{ fontSize: 22, color: 'black', paddingLeft: '2%' }}>{Icons.userCircle}</FontAwesome>
        </View>
      </View>
    </TouchableOpacity>
  )}
}

const mapStateToProps = (state) => {
  return { partic: state.partic };
};

export default connect(mapStateToProps, null)(Tour);
