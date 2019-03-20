import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoreAction } from '../actions';
import {
  View,
  Text,
  Image
} from 'react-native';

import style from '../assets/Style.js';

class TopThree extends Component {

  state = {
    userId: this.props.userId,
    points: this.props.userPoints
  }

  componentDidMount() {
    const points = this.state.points;
    const userId = this.state.userId;

    this.props.scoreAction(points, userId);
  }

  topSwitch = (placement, userName, newPoints) => {
    console.log(placement);
    switch (placement) {
      case 1:
        return (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            order: 2,
            flex: 1,
            width: 300
          }}>
            <Image
              source={require('../assets/images/gold.png')}
              style={{ height: 55, width: 90 }}
            />
            <Text style={style.subTitleText}>{userName}</Text>
            <View style={{ paddingVertical: 3 }}>
              <Image
                source={this.props.card}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>{newPoints} points</Text>
          </View>
        );
      case 2:
        return (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: 10
          }}>
            <Image
              source={require('../assets/images/silver.png')}
              style={{ height: 20, width: 50 }}
            />
            <Text style={style.subTitleText}>{userName}</Text>
            <View style={{ paddingVertical: 3 }}>
              <Image
                source={this.props.card}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>{newPoints} points</Text>
          </View>
        );
      case 3:
        return (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingRight: 10
          }}>
            <Image
              source={require('../assets/images/bronze.png')}
              style={{ height: 20, width: 50 }}
            />
            <Text style={style.subTitleText}>{userName}</Text>
            <View style={{ paddingVertical: 3 }}>
              <Image
                source={this.props.card}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>{newPoints} points</Text>
          </View>
        );
      default:
        return (
          <View></View>
        );
    }
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
      <View>
          {this.topSwitch(placement, userName, newPoints)}
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

export default connect(mapStateToProps, { scoreAction })(TopThree);
