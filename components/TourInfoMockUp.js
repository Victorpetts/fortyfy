import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import style from '../assets/Style.js';

class TourInfoMockUp extends Component {

  render() {

    return (

      <View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={style.itemText}>{this.props.tourName}</Text>
          <Text style={style.itemText}>
            {this.props.totalMatches} matches
                </Text>
        </View>
        <View style={style.tourContainer}>
          <View style={{
            alignItems: 'center',
            paddingVertical: 15,
            width: '33%'
          }}>
            <Text style={style.tourInfoTitle}>Owner</Text>
            <Image
              source={require('../assets/images/crown.png')}
              style={{ width: 25, height: 17 }}
            />
            <Text style={style.tourInfoText}>{this.props.owner}</Text>
          </View>
          <View style={{
            alignItems: 'center',
            width: '33%'
          }}>
            <Text style={style.tourInfoTitle}>Victory Conditions</Text>
            <Image
              source={require('../assets/images/trophy.png')}
              style={{ width: 17, height: 17 }}
            />
            <Text style={style.tourInfoText}>{this.props.winconText}</Text>
          </View>
          <View style={{
            alignItems: 'center',
            width: '33%'
          }}>
            <Text style={style.tourInfoTitle}>Participants</Text>
            <Image
              source={require('../assets/images/group.png')}
              style={{ width: 24, height: 17 }}
            />
            <Text style={style.tourInfoText}>{this.props.numberOfPlayers} / {this.props.maxPlayers}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default TourInfoMockUp;
