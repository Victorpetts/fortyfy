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

      const nameToFilter = this.props.tourName;
      const filterItems = (e) => {
        return this.props.tours.filter((el) => el.nameToFilter === e);
      }

        return (
            <View style={style.container}>
                <Text style={style.headerText}>Seger villkor:</Text>
                <Text style={style.headerText}>{filterItems(nameToFilter)}</Text>
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
