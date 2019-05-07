import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';
import Colors from '../constants/Colors.js';

class ParticipantCard extends Component {

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
    const allStats = thisUser.matchStatistics;
    const userName = thisUser.name;
    const userLvl = thisUser.lvl;
    const thisToursStats = allStats.filter(stats => stats.matchId === tourId);
    const playedMatches = thisToursStats[0].playedMatches;

    return (
      <View>
        {playedMatches === totalMatches ?
          <View style={style.userBigContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TopUserCard', {
                userId: userId
              })}
            >
              <View style={style.userSquareGoldContainer}>
                {owner === userId &&
                  <View style={style.crownContainer}>
                    <Image
                      source={require('../assets/images/tourinfoicons/crown.png')}
                      style={{ width: 30, height: 20 }}
                    />
                  </View>
                }
                <View style={style.bigImageContainer}>
                  <Image
                    source={this.props.card}
                    style={{ height: 140, width: 90 }}
                  />
                </View>
                <View style={style.bigListItemContainer}>
                  <Text style={style.listItemText}>{userName}</Text>
                  <Text style={style.listItemSmallText}>Level {userLvl}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          :
          <View style={style.userBigContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TopUserCard', {
                userId: userId
              })}
            >
              <View style={style.userSquareContainer}>
                {owner === userId &&
                  <View style={style.crownContainer}>
                    <Image
                      source={require('../assets/images/tourinfoicons/crown.png')}
                      style={{ width: 30, height: 20 }}
                    />
                  </View>
                }
                <View style={style.bigImageContainer}>
                  <Image
                    source={this.props.card}
                    style={{ height: 140, width: 90 }}
                  />
                </View>
                <View style={style.bigListItemContainer}>
                  <Text style={style.listItemText}>{userName}</Text>
                  <Text style={style.listItemSmallText}>Level {userLvl}</Text>
                </View>
              </View>
            </TouchableOpacity>
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

export default connect(mapStateToProps, null)(ParticipantCard);
