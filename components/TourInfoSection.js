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
    const tourName = thisTour.name;
    const totalMatches = thisTour.totalMatches;
    const numberOfPlayers = thisTour.participants.length;
    const maxPlayers = thisTour.players;

    const ownerId = thisTour.owner;
    const thisOwner = this.props.users.find(user => user.id === ownerId);
    const owner = thisOwner.name;

    let winconText;

    switch (thisTour.wincon) {
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
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={style.itemText}>{tourName}</Text>
                <Text style={style.itemText}>
                    {totalMatches} matches
                </Text>
            </View>
            <View style={style.tourContainer}>
                <View style={{
                    alignItems: 'center',
                    paddingVertical: 15
                }}>
                    <Text style={style.tourInfoTitle}>Owner</Text>
                    <Image
                        source={require('../assets/images/crown.png')}
                        style={{ width: 25, height: 17 }}
                    />
                    <Text style={style.tourInfoText}>{owner}</Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={style.tourInfoTitle}>Victory Conditions</Text>
                    <Image
                        source={require('../assets/images/trophy.png')}
                        style={{ width: 17, height: 17 }}
                    />
                    <Text style={style.tourInfoText}>{winconText}</Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={style.tourInfoTitle}>Participants</Text>
                    <Image
                        source={require('../assets/images/group.png')}
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
    tours: state.tours,
    users: state.users
  };
};

export default connect(mapStateToProps, null)(TourInfoSection);
