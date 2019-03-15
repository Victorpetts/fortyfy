import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoreAction } from '../actions';
import {
  View,
  Text
} from 'react-native';

import style from '../assets/Style.js';

class LeaderBoardPartic extends Component {

  state = {
    runOnce: true,
    userId: this.props.userId,
    points: this.props.userPoints
  }

  componentDidMount() {
    this.scoreFunc();
  }

  scoreFunc = () => {

    const points = this.state.points;
    const userId = this.state.userId;

    this.props.scoreAction(points, userId);

    console.log(userId, points);
  }

  render() {

    const { tourId, userId, placement } = this.props;

    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const totalMatches = thisTour.totalMatches;
    const owner = thisTour.owner

    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;

    const newPoints = thisUser.currentPoints;

    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <View style={style.particContainer}>
          <View style={style.placementSquare}>
            <Text style={style.placementText}>{placement}</Text>
          </View>
          <View style={{ paddingLeft: '12%'}}>
            <Text style={style.particText}>{userName}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end'}}>
            <Text style={style.particText}>
              {newPoints} points
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

export default connect(mapStateToProps, {scoreAction})(LeaderBoardPartic);
