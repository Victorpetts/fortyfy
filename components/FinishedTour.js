
// Används inte

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import { FontAwesome } from '@expo/vector-icons';

class FinishedTour extends Component {

  render() {
    const winnersArr = this.props.users
    winnersArr.sort((a, b) => b.points - a.points);

    const thisToursName = this.props.tourName;
    const filter = this.props.tours.find( thisTour => thisTour.name === thisToursName );

    let winconText;

    switch(filter.wincon) {
      case '1':
        winconText = 'Survived longest';
        break
      case '2':
        winconText = 'Most kills';
        break
      case '3':
        winconText = 'Most top 5';
        break
      default:
        winconText = '';
        break
    }

    return (
      <View style={style.mainContainer}>
        <View style={style.titleContainer}>
          <Text style={style.yellowHeaderText}>{this.props.tourName}</Text>
          <Text style={style.headerText}>Win condition:</Text>
          <Text style={style.paragraphText}>{winconText}</Text>
        </View>
        <ScrollView>
          <View style={{
            alignSelf: 'center',
            padding: '5%'
          }}>
            <Text style={style.yellowHeaderText}>{winnersArr[0].points}</Text>
            <FontAwesome name="file-photo-o" size={75} color="white" />
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '5%'
          }}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center'
            }}>
              <Text style={style.yellowHeaderText}>{winnersArr[1].points}</Text>
              <FontAwesome name="file-photo-o" size={75} color="white" />
            </View>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text style={style.yellowHeaderText}>{winnersArr[2].points}</Text>
              <FontAwesome name="file-photo-o" size={75} color="white" />
            </View>
          </View>
        </ScrollView>
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    tours: state.tours
  };
};

export default connect(mapStateToProps, null)(FinishedTour);
