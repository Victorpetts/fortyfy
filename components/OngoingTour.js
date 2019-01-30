import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Participants from './Participants.js';


class OngoingTour extends Component {

  mapPartic(totalMatches) {
    return this.props.partic.map((player) => {
      return (
        <Participants
          key={player.name}
          name={player.name}
          playedMatches={player.playedMatches}
          totalMatches={totalMatches}
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
          winconText = 'Överlevt flest minuter';
          break
        case '2':
          winconText = 'Flest sammanlagda kills';
          break
        case '3':
          winconText = 'Flest placeringar i top 5';
          break
        default:
          winconText = '';
          break
      }

        return (
            <View style={style.ongoingContainer}>
            <View style={style.titleRowContainer}>
              <FontAwesome style={{ fontSize: 28, color: 'yellow' }}>{Icons.angleRight}</FontAwesome>
              <View style={{ }}>
                <Text style={style.yellowHeaderText}>{this.props.tourName}</Text>
              </View>
                <FontAwesome style={{ fontSize: 28, color: 'yellow' }}>{Icons.angleLeft}</FontAwesome>
                </View>
              <Text style={style.headerText}>Seger villkor:</Text>
              <Text style={style.paragraphText}>{winconText}</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <View style={{ 
                flexDirection: 'row', 
                paddingLeft: '2%',
              }}>
                <FontAwesome style={{ fontSize: 16, paddingTop: 5, color: 'yellow', marginRight: '5%' }}>{Icons.userCircle}</FontAwesome>
                <Text style={style.smallText}>Spelare</Text>
                </View>
                <View style={{ 
                flexDirection: 'row'
              }}>
                <Text style={style.smallText}>Matcher</Text>
                <FontAwesome style={{ fontSize: 16, paddingTop: 5, color: 'yellow', marginLeft: '5%' }}>{Icons.gamepad}</FontAwesome>
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
