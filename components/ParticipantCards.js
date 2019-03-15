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
    const userName = thisUser.name;

    const allStats = thisUser.matchStatistics;
    const thisToursStats = allStats.filter(stats => stats.matchId === tourId);
    const playedMatches = thisToursStats[0].playedMatches;

    return (
      <View>
        {playedMatches === totalMatches ?
          <View style={style.userBigContainer}>
            <View style={style.userSquareGoldContainer}>
              {owner === userId &&
                <View style={style.crownContainer}>
                  <Image
                    source={require('../assets/images/tourinfoicons/crown.png')}
                    style={{ width: 25, height: 17 }}
                  />
                </View>
              }
              <View style={style.bigImageContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TopUserCard', {
                  userName: userName,
                  userCard: this.props.card
                })}
              >
                <Image
                  source={this.props.card}
                  style={{ height: 140, width: 90 }}
                />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                <Text style={style.particCardTextBold}>{playedMatches} / {totalMatches}</Text>
                <Text style={style.particCardText}> played</Text>
              </View>
            </View>
          </View>
          :
          <View style={style.userBigContainer}>
            <View style={style.userSquareContainer}>
              <View style={style.bigImageContainer}> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TopUserCard', {
                  userName: userName,
                  userCard: this.props.card
                })}
              >
                <Image
                  source={this.props.card}
                  style={{ height: 140, width: 90 }}
                />
                </TouchableOpacity>
              </View>
              {owner === userId &&
                <View style={style.crownContainer}>
                  <Image
                    source={require('../assets/images/tourinfoicons/crown.png')}
                    style={{ width: 25, height: 17 }}
                  />
                </View>
              }
              <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
                <Text style={style.particCardTextBold}>{playedMatches} / {totalMatches}</Text>
                <Text style={style.particCardText}> played</Text>
              </View>
            </View>
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
