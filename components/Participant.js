import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image
} from 'react-native';

import style from '../assets/Style.js';
import Colors from '../constants/Colors.js';

class Participant extends Component {

  // state = {
  //   checked: false
  // }
  //
  // insideFunc = () => {
  //   this.setState(prevState => ({
  //     checked: !prevState.checked
  //   }));
  // }

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
          <View style={style.particContainerGoldBorder}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/images/badges/badge-bluegold.png')}
                style={{ height: 20, width: 20, opacity: .6 }}
              />
              <Text style={style.badgeText}>{thisUser.lvl}</Text>
            </View>
            {owner === userId ?
              <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 5 }}>
                <Text style={style.particText}>
                  {userName}
                </Text>
                <View style={{ marginLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/images/tourinfoicons/crown.png')}
                    style={{ width: 25, height: 17 }}
                  />
                </View>
              </View>
              :
              <View style={{ flex: 1, paddingLeft: 5 }}>
                <Text style={style.particText}>
                  {userName}
                </Text>
              </View>
            }
            <Text style={style.particText}>{playedMatches} / {totalMatches}</Text>
          </View>
          :
          <View style={style.particContainerBlueBorder}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/images/badges/badge-bluegold.png')}
                style={{ height: 20, width: 20, opacity: .6 }}
              />
              <Text style={style.badgeText}>{thisUser.lvl}</Text>
            </View>
            {owner === userId ?
              <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 5 }}>
                <Text style={style.particText}>
                  {userName}
                </Text>
                <View style={{ marginLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/images/tourinfoicons/crown.png')}
                    style={{ width: 25, height: 17 }}
                  />
                </View>
              </View>
              :
              <View style={{ flex: 1, paddingLeft: 5 }}>
                <Text style={style.particText}>
                  {userName}
                </Text>
              </View>
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
