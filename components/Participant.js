import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import style from '../assets/Style.js';

export class Participant extends React.Component {

  render() {

    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <View style={style.particContainer}>
          <Text style={style.particText}>{this.props.name}</Text>
          <Text style={style.particText}>
            {this.props.playedMatches} / {this.props.totalMatches}
          </Text>
        </View>
      </View>
    )
  }

}

export class LeaderBoardPartic extends React.Component {

  render() {

    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <View style={style.particContainer}>
      <View style={style.placementSquare}>
      <Text style={style.placementText}>{this.props.placement}</Text>
      </View>
      <View style={{ paddingLeft: '12%'}}>
          <Text style={style.particText}>{this.props.name}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end'}}>
          <Text style={style.particText}>
            {this.props.points} points
          </Text>
          </View>
        </View>
      </View>
    )
  }

}
