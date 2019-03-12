import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';

import style from '../assets/Style.js';

class LeaderBoardPartic extends Component {

  render() {

    const { tourId, userId } = this.props;

    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const totalMatches = thisTour.totalMatches;
    const owner = thisTour.owner

    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;

    const allStats = thisUser.matchStatistics;
    const thisToursStats = allStats.filter(stats => stats.matchId === tourId);
    const points = thisToursStats[0].points;

    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <View style={style.particContainer}>
          <View style={style.placementSquare}>
            <Text style={style.placementText}>4</Text>
          </View>
          <View style={{ paddingLeft: '12%'}}>
            <Text style={style.particText}>{userName}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end'}}>
            <Text style={style.particText}>
              {points} points
            </Text>
          </View>
        </View>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    tours: state.tours
  };
};

export default connect(mapStateToProps, null)(LeaderBoardPartic);
