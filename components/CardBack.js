import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Animated,
  Image,
  ImageBackground
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
    console.log(data);

    if (data.epicUserHandle) {
      this.setState({
        name: data.epicUserHandle,
        top5Stat: data.lifeTimeStats[3].value,
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

    const thisUser = this.props.users.find(user => user.id === this.state.userId);
    const userName = thisUser.name;
    const userLvl = thisUser.lvl;

    const { name, top5Stat, killsStat, loading, playedMatchesStat, winsStat, winRatioStat, killRatioStat } = this.state;

    return (
      <View style={style.cardBackContainer}>
        {loading ?
          <View style={{ marginTop: 140 }}>
            <ActivityIndicator size="large" color={Colors.appBlueColor} />
          </View>
        :
          <View>
            <ImageBackground
              source={require('../assets/images/cardBackAssets/cardBack.png')}
              style={{ width: '100%', height: 130 }}
            >
              <View style={{position: 'absolute', top: 20, left: 150, right: 0, bottom: 0}}>
                <Text style={style.cardBackName}>{userName}</Text>
                <Text style={style.cardBackLvl}>Lvl {userLvl}</Text>
              </View>
            </ImageBackground>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
              <View style={style.cardBackColumn}>
                <ImageBackground
                  source={require('../assets/images/cardBackAssets/kills_skull.png')}
                  style={{ width: 90, height: 90, marginBottom: 30, opacity: 0.7 }}
                >
                  <Text style={style.cardBackText}>KILLS</Text>
                  <Text style={style.cardBackNumb}>{killsStat}</Text>
                </ImageBackground>
                <ImageBackground
                  source={require('../assets/images/cardBackAssets/wins_1.png')}
                  style={{ width: 90, height: 90, marginBottom: 30, opacity: 0.7 }}
                >
                  <Text style={style.cardBackText}>WINS</Text>
                  <Text style={style.cardBackNumb}>{winsStat}</Text>
                </ImageBackground>
              </View>
              <View style={style.cardBackColumn}>
                <Text style={style.cardBackTextR}>K/D RATIO</Text>
                <View style={style.cardBackCircle}>
                  <Text style={style.cardBackNumbW}>{killRatioStat}</Text>
                </View>
                <Text style={style.cardBackTextR}>WIN RATIO</Text>
                <View style={style.cardBackCircle}>
                  <Text style={style.cardBackNumbW}>{winRatioStat}</Text>
                </View>
              </View>
              <View style={style.cardBackColumn}>
                <ImageBackground
                  source={require('../assets/images/cardBackAssets/rifles.png')}
                  style={{ width: 90, height: 90, marginBottom: 30, opacity: 0.7 }}
                >
                  <Text style={style.cardBackText}>MATCHES</Text>
                  <Text style={style.cardBackNumb}>{playedMatchesStat}</Text>
                </ImageBackground>
                <ImageBackground
                  source={require('../assets/images/cardBackAssets/top5_podium.png')}
                  style={{ width: 90, height: 90, marginBottom: 30, opacity: 0.7 }}
                >
                  <Text style={style.cardBackText}>TOP 10s</Text>
                  <Text style={style.cardBackNumb}>{top5Stat}</Text>
                </ImageBackground>
              </View>
            </View>
            <Image
              source={require('../assets/images/gold.png')}
              style={{ width: 280, height: 150, alignSelf: 'center' }}
            />
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

// 3754e51115404841a4d31b03e77c7a01
