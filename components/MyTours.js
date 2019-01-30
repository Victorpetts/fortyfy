import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Tour from './Tour.js';

class MyTours extends Component {

  mapOngoingTours() {

    ongoingTour = this.props.tours.filter(function(item){
      return item.finished === false;
    }).map(function({name, players, wincon, totalMatches, finished}){
      return {name, players, wincon, totalMatches, finished};
    });
    console.log(ongoingTour);

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
    console.log(finishedTour);

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
          <FontAwesome style={{ fontSize: 18, paddingTop: 2, color: 'yellow', marginRight: '2%' }}>{Icons.chessRook}</FontAwesome>
          <Text style={style.smallText}>Pågående</Text>
        </View>
        <ScrollView style={{ height: '100%' }}>
          {this.mapOngoingTours()}
        </ScrollView>
        <View style={{
          flexDirection: 'row',
          paddingLeft: '4%',
        }}>
          <FontAwesome style={{ fontSize: 18, paddingTop: 2, color: 'yellow', marginRight: '2%' }}>{Icons.chessKing}</FontAwesome>
          <Text style={style.smallText}>Avslutade</Text>
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
