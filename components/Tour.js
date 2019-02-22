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

    const numberOfPartic = this.props.partic.length;
    const tourName = this.props.name;
    const numbPlayers = this.props.players;
    const tourStatus = this.props.finished;
    const { navigate } = this.props.navigation;
    const totalMatches = this.props.totalMatches;
    const wincon = this.props.wincon;
    const fromDate = this.props.fromDate;
    const toDate = this.props.toDate;
    
    return (
      tourStatus === false ? (
        <TouchableOpacity
          onPress={() => navigate('Ongoing', {
            tourName: tourName,
            numbPlayers: numbPlayers,
            tourStatus: tourStatus,
            totalMatches: totalMatches,
            wincon: wincon,
            fromDate: fromDate,
            toDate: toDate
          })}
        >

          <View style={style.itemContainer}>
            <Text style={style.itemText}>{this.props.name}</Text>
            <Text style={style.itemNumber}>
              {numberOfPartic} / {this.props.players}
            </Text>
            <View style={style.iconClass}>
              <FontAwesome name="user-circle" size={22} color="black" style={{ paddingLeft: '2%' }} />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
          <TouchableOpacity
            onPress={() => navigate('Finished', {
              tourName: tourName,
              numbPlayers: numbPlayers,
              tourStatus: tourStatus,
              totalMatches: totalMatches,
              wincon: wincon,
              fromDate: fromDate,
              toDate: toDate
            })}
          >

            <View style={style.itemContainer}>
              <Text style={style.itemText}>{this.props.name}</Text>
              <Text style={style.itemNumber}>
                {numberOfPartic} / {this.props.players}
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
  return { partic: state.partic };
};

export default connect(mapStateToProps, null)(Tour);
