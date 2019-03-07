import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import style from '../assets/Style.js';

export class Participant extends Component {

  state = {
    checked: false
  }

  insideFunc = () => {
    this.setState(prevState =>({
      checked: !prevState.checked
    }));

    let participant = this.props.name;
    let checkedState = this.state.checked;
    this.props.outsideFunc(participant, checkedState);
  }

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

export class LeaderBoardPartic extends Component {

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
