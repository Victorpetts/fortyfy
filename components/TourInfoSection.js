import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image
} from 'react-native';

import style from '../assets/Style.js';

class TourInfoSection extends Component {

  render() {

    const tourId = this.props.tourId;
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const tourImg = thisTour.name;
    const fromDate = thisTour.fromDate;
    const toDate = thisTour.toDate;
    const totalMatches = thisTour.totalMatches;
    const numberOfPlayers = thisTour.participants.length;
    const maxPlayers = thisTour.players;
    const sponsoredTour = thisTour.sponsor

    const owner = thisTour.owner;

    let winconText;

    switch (thisTour.wincon) {
      case '1':
        winconText = 'Most top 5';
        break
      case '2':
        winconText = 'Most kills';
        break
      default:
        winconText = '';
        break
    }

    return (
      <View>
        <View style={style.logoContainer}>
          <Image
            source={tourImg}
            style={style.companyLogo}
          />
          <Text style={style.itemText}>{totalMatches} matches</Text>
        </View>
        <View style={style.logoContainer}>
          <View style={{ alignItems: 'center'}}>
            <Text style={style.tourInfoTitle}>From</Text>
            <Text style={style.dateText}>{fromDate}</Text>
          </View>
          <View style={{ alignItems: 'center'}}>
            <Text style={style.tourInfoTitle}>To</Text>
            <Text style={style.dateText}>{toDate}</Text>
          </View>
        </View>
        <View style={style.tourContainer}>
          <View style={{ alignItems: 'center'}}>
            <Text style={style.tourInfoTitle}>Owner</Text>
            <Image
              source={require('../assets/images/tourinfoicons/crown.png')}
              style={{ width: 25, height: 17 }}
            />
            <Text style={style.tourInfoText}>{owner}</Text>
          </View>
          <View style={{ alignItems: 'center'}}>
            <Text style={style.tourInfoTitle}>Victory Conditions</Text>
            <Image
              source={require('../assets/images/tourinfoicons/trophy.png')}
              style={{ width: 17, height: 17 }}
            />
            <Text style={style.tourInfoText}>{winconText}</Text>
          </View>
          <View style={{ alignItems: 'center'}}>
            <Text style={style.tourInfoTitle}>Participants</Text>
            <Image
              source={require('../assets/images/tourinfoicons/group.png')}
              style={{ width: 24, height: 17 }}
            />
            <Text style={style.tourInfoText}>{numberOfPlayers} / {maxPlayers}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours
  };
};

export default connect(mapStateToProps, null)(TourInfoSection);
