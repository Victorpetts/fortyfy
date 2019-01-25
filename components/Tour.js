import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'expo';

import style from '../assets/Style.js';

class Tour extends Component {


  render() {

    const numberOfPartic = this.props.partic.length;
    const tourName = this.props.name;
    const numbPlayers = this.props.players;

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('TourIndv',{
              tourName: tourName,
              numbPlayers: numbPlayers
            })}
        >
      <View style={style.itemContainer}>
        <Text style={style.itemText}>{this.props.name}</Text>
        <Text style={style.itemNumber}>
        {numberOfPartic} / {this.props.players}
        </Text>
        <View style={style.iconClass}>
          <Icon.Ionicons
            name="md-people"
            size={22}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  )}
}

const mapStateToProps = (state) => {
  return { partic: state.partic };
};

export default connect(mapStateToProps, null)(Tour);
