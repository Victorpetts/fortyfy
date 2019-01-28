import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import Tour from './Tour.js';

class MyTours extends Component {

  mapTours() {
    return this.props.tours.map((tour) => {
      return (
        <Tour
          key={tour.name}
          name={tour.name}
          players={tour.players}
          wincon={tour.wincon}
          totalMatches={tour.totalMatches}
          navigation={this.props.navigation}
        />
      );
    });
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.headerText}> Mina Turneringar </Text>
        <ScrollView style={{ height: '100%' }}>
          {this.mapTours()}
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(MyTours);
