import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import { Participants } from './Participants.js';


class OngoingTour extends Component {

  mapPartic() {
    return this.props.partic.map((player) => {
      return (
        <Participants
          key={player.name}
          name={player.name}
          matches={player.matches}
          />
      );
    });
  }

    render() {

      const thisToursName = this.props.tourName;
      const filter = this.props.tours.find( thisTour => thisTour.name === thisToursName );
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
            <View style={style.container}>
                <Text style={style.headerText}>Seger villkor:</Text>
                <Text style={style.headerText}>{winconText}</Text>
                <Text style={style.paragraphText}>{this.props.tourName}</Text>
                <ScrollView style={{ height: '100%' }}>
                  {this.mapPartic()}
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
