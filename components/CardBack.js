import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

import style from '../assets/Style.js';
import Colors from '../constants/Colors.js';

class CardBack extends Component {

  state = {
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

    this.subs = [
      this.props.navigation.addListener('didFocus', () => StatusBar.setHidden(true)),
      this.props.navigation.addListener('didBlur', () => StatusBar.setHidden(false)),
    ];

    this.setState({ loading: true });

    const api_call = await fetch(`https://api.fortnitetracker.com/v1/profile/pc/Ninja`, {
      headers: {
        "TRN-Api-Key": '6d6c58f4-a58f-463c-a049-751ef918f9d1'
      }
    });

    const data = await api_call.json();
    console.log(data);

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
    const { name, top5Stat, killsStat, loading, playedMatchesStat, winsStat, winRatioStat, killRatioStat } = this.state;

    return (
        <View style={{
          width: '100%',
          height: '100%',
          backgroundColor: Colors.appBackgroundColor,
          borderWidth: 2,
          borderColor: Colors.appBlueColor
        }}>
          {loading ?
            <View style={{ marginTop: 140 }}>
              <ActivityIndicator size="large" color={Colors.appBlueColor} />
            </View>
            :
            <View style={{ padding: 10, justifyContent: 'center', height: '100%' }}>
              <View style={style.backCardRow}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={style.backCardTitle}>Top 5s:</Text>
                  <Text style={style.backCardText}>{top5Stat}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={style.backCardTitle}>Kills:</Text>
                  <Text style={style.backCardText}>{killsStat}</Text>
                </View>
              </View>
              <View style={style.backCardRow}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={style.backCardTitle}>Matches Played:</Text>
                  <Text style={style.backCardText}>{playedMatchesStat}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={style.backCardTitle}>Wins:</Text>
                  <Text style={style.backCardText}>{winsStat}</Text>
                </View>
              </View>
              <View style={style.backCardRow}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={style.backCardTitle}>Win Ratio:</Text>
                  <Text style={style.backCardText}>{winRatioStat}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={style.backCardTitle}>Kill/Death Ratio:</Text>
                  <Text style={style.backCardText}>{killRatioStat}</Text>
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
    users: state.users
  };
};

export default connect(mapStateToProps, null)(CardBack);
