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
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }

  render() {

    const { tourId, userId } = this.props;

    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const totalMatches = thisTour.totalMatches;
    const owner = thisTour.owner

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
            {owner === userId ?
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.particText}>
                  {userName}
                </Text>
                <View style={{ marginLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/images/crown.png')}
                    style={{ width: 25, height: 17 }}
                  />
                </View>
              </View>
              :
              <Text style={style.particText}>
                {userName}
              </Text>
            }
            <Text style={style.particText}>{playedMatches} / {totalMatches}</Text>
          </View>
          :
          <View style={style.particContainer}>
            {owner === userId ?
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.particText}>
                  {userName}
                </Text>
                <View style={{ marginLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/images/crown.png')}
                    style={{ width: 25, height: 17 }}
                  />
                </View>
              </View>
              :
              <Text style={style.particText}>
                {userName}
              </Text>
            }
            <Text style={style.particText}>{playedMatches} / {totalMatches}</Text>
          </View>
        }
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

export default connect(mapStateToProps, null)(Participant);
