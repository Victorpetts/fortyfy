
// Används inte

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import Participant from './Participant.js';
import style from '../assets/Style.js';
import { FontAwesome } from '@expo/vector-icons';

class OngoingTour extends Component {

  state = {
    headerText: ''
  }

  // componentDidMount() {
  //   firebase.database().ref('tours/name').on('value', snapshot => {
  //       this.setState({ headerText: snapshot.val() })
  //   });
  // }

  mapPartic(totalMatches) {
    return this.props.partic.map((player) => {
      return (
        <Participant
          key={player.name}
          name={player.name}
          playedMatches={player.playedMatches}
          totalMatches={totalMatches}
          checkBox={player.checkBox}
        />
      );
    });
  }

  render() {

    const thisToursName = this.props.tourName;
    const filter = this.props.tours.find( thisTour => thisTour.name === thisToursName );
    const totalMatches = filter.totalMatches;
    let winconText;

    switch(filter.wincon) {
      case '1':
        winconText = 'Survived most minutes';
        break
      case '2':
        winconText = 'Most accumulated kills';
        break
      case '3':
        winconText = 'Most placements in top 5';
        break
      default:
        winconText = 'Most accumulated kills';
        break
    }

    return (
      <View style={style.ongoingContainer}>
        <View style={style.titleRowContainer}>
        <FontAwesome name="angle-right" size={28} color="yellow" />
          <View style={{ }}>
            <Text style={style.yellowHeaderText}>{this.props.tourName}</Text>
          </View>
          <FontAwesome name="angle-left" size={28} color="yellow" />
        </View>
        <Text style={style.headerText}>Win condition:</Text>
        <Text style={style.paragraphText}>{winconText}</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={{
            flexDirection: 'row',
            paddingLeft: '2%',
          }}>
            <FontAwesome name="user-circle" size={16} color="yellow" style={{ paddingTop: 5, marginRight: '5%' }} />
            <Text style={style.smallText}>Players</Text>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <Text style={style.smallText}>Matches</Text>
            <FontAwesome name="gamepad" size={16} color="yellow" style={{ paddingTop: 5, marginLeft: '5%' }} />
          </View>
        </View>
        <ScrollView style={{ height: '100%' }}>
          {this.mapPartic(totalMatches)}
        </ScrollView>
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    partic: state.partic,
    tours: state.tours
   };
};

export default connect(mapStateToProps, null)(OngoingTour);
