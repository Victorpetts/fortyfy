import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import Tour from './Tour.js';

import style from '../assets/Style.js';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';


class MyTours extends Component {

  mapOngoingTours() {

    ongoingTour = this.props.tours.filter(function(item){
      return item.finished === false;
    }).map(function({name, players, wincon, totalMatches, finished}){
      return {name, players, wincon, totalMatches, finished};
    });

    return ongoingTour.map((tour) => {
      return (
        <Tour
        key={tour.name}
        name={tour.name}
        players={tour.players}
        wincon={tour.wincon}
        totalMatches={tour.totalMatches}
        navigation={this.props.navigation}
        finished={tour.finished}
        />
      )
    })
  }

  mapFinishedTours() {

    finishedTour = this.props.tours.filter(function(item){
      return item.finished === true;
    }).map(function({name, players, wincon, totalMatches, finished}){
      return {name, players, wincon, totalMatches, finished};
    });

    return finishedTour.map((tour) => {
      return (
        <Tour
        key={tour.name}
        name={tour.name}
        players={tour.players}
        wincon={tour.wincon}
        totalMatches={tour.totalMatches}
        navigation={this.props.navigation}
        finished={tour.finished}
        />
      )
    })
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{
          flexDirection: 'row',
          paddingLeft: '4%',
        }}>
          <MaterialCommunityIcons name="chess-rook" size={18} color="yellow" style={{ paddingTop: 2, marginRight: '2%' }} />
          <Text style={style.smallText}>Ongoing</Text>
        </View>
        <ScrollView style={{ height: '100%' }}>
          {this.mapOngoingTours()}
        </ScrollView>
        <View style={{
          flexDirection: 'row',
          paddingLeft: '4%',
        }}>
          <MaterialCommunityIcons name="chess-king" size={18} color="yellow" style={{ paddingTop: 2, marginRight: '2%' }} />
          <Text style={style.smallText}>Finished</Text>
        </View>
        <ScrollView style={{ height: '100%' }}>
          {this.mapFinishedTours()}
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(MyTours);
