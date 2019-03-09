import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image
} from 'react-native';

import style from '../assets/Style.js';

class Participant extends Component {

  state = {
    checked: false
  }

  insideFunc = () => {
    this.setState(prevState =>({
      checked: !prevState.checked
    }));
  }

  render() {

    const thisTour = this.props.thisTour;
    const totalMatches = thisTour.totalMatches;
    const tourId = thisTour.id;

    const userId = this.props.id;
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;

    const allStats = thisUser.matchStatistics;
    const thisToursStats = allStats.filter(stats => stats.matchId === tourId);
    const playedMatches = thisToursStats[0].playedMatches;

    return (
      <View style={{
        paddingHorizontal: 10,
        paddingVertical: 5
      }}>
        {playedMatches === totalMatches ?
          <View style={style.particContainerBorder}>
            <Text style={style.particText}>{userName}</Text>
            <Text style={style.particText}>{playedMatches} / {totalMatches}</Text>
          </View>
        :
          <View style={style.particContainer}>
            <Text style={style.particText}>{userName}</Text>
            <Text style={style.particText}>{playedMatches} / {totalMatches}</Text>
          </View>
        }
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(Participant);
