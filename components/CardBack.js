import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Animated
} from 'react-native';

import style from '../assets/Style.js';
import Colors from '../constants/Colors.js';

class CardBack extends Component {

  state = {
    userId: this.props.userId,
    loading: false,
    name: '',
    top5Stat: '',
    killsStat: '',
    playedMatchesStat: '',
    winsStat: '',
    winRatioStat: '',
    killRatioStat: '',
    animation: new Animated.Value(90)
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount = async () => {

    const userId = this.state.userId;
    const thisUser = this.props.users.find(user => user.id === userId);
    const ingameName = thisUser.ingameName;

    this.subs = [
      this.props.navigation.addListener('didFocus', () => StatusBar.setHidden(true)),
      this.props.navigation.addListener('didBlur', () => StatusBar.setHidden(false)),
    ];

    this.setState({ loading: true });

    const api_call = await fetch(`https://api.fortnitetracker.com/v1/profile/pc/${ingameName}`, {
      headers: {
        "TRN-Api-Key": '6d6c58f4-a58f-463c-a049-751ef918f9d1'
      }
    });

    const data = await api_call.json();

    if (data.epicUserHandle) {
      this.setState({
        name: data.epicUserHandle,
        top5Stat: data.lifeTimeStats[0].value,
        playedMatchesStat: data.lifeTimeStats[7].value,
        winsStat: data.lifeTimeStats[8].value,
        winRatioStat: data.lifeTimeStats[9].value,
        killsStat: data.lifeTimeStats[10].value,
        killRatioStat: data.lifeTimeStats[11].value,
        loading: false
      });
    }
  }

  componentDidDismount() {
    this.subs.forEach((sub) => {
      sub.remove();
    });
  }

  render() {

    const userId = this.props.userId;
    const thisUser = this.props.users.find(user => user.id === userId);
    const userLvl = thisUser.lvl;
    const userName = thisUser.name;

    const { name, top5Stat, killsStat, loading, playedMatchesStat, winsStat, winRatioStat, killRatioStat } = this.state;

    return (
      <View style={style.backCardContainer}>
        {loading ?
          <View style={{ marginTop: 140 }}>
            <ActivityIndicator size="large" color={Colors.appBlueColor} />
          </View>
          :
          <View style={style.backCardContent}>
            <View style={style.backCardColumn}>
              <Text style={style.backCardTitle}>Top 5s:</Text>
              <Text style={style.backCardText}>{top5Stat}</Text>
              <Text style={style.backCardTitle}>Kills:</Text>
              <Text style={style.backCardText}>{killsStat}</Text>
              <Text style={style.backCardTitle}>Matches Played:</Text>
              <Text style={style.backCardText}>{playedMatchesStat}</Text>
            </View>
            <View style={style.backCardColumn}>
              <Text style={style.backCardTitle}>Wins:</Text>
              <Text style={style.backCardText}>{winsStat}</Text>
              <Text style={style.backCardTitle}>Win Ratio:</Text>
              <Text style={style.backCardText}>{winRatioStat}</Text>
              <Text style={style.backCardTitle}>Kill/Death Ratio:</Text>
              <Text style={style.backCardText}>{killRatioStat}</Text>
            </View>
          </View>
        }
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(CardBack);
