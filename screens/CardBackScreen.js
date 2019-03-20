import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import style from '../assets/Style.js';
import Colors from '../constants/Colors.js';

class cardBackScreen extends Component {

  state = {
    loading: false,
    name: '',
    top5Stat: '',
    killsStat: '',
    playedMatchesStat: '',
    winsStat: '',
    winRatioStat: '',
    killRatioStat: ''
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount = async() => {

    StatusBar.setHidden(true);
    this.setState({ loading: true });

    const api_call = await fetch(`https://api.fortnitetracker.com/v1/profile/pc/Ninja`, {
      headers:{
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

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  render() {

    const userId = this.props.navigation.getParam('userId');
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;
    const {name, top5Stat, killsStat, loading, playedMatchesStat, winsStat, winRatioStat, killRatioStat} = this.state;

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('UserCard', { userId: userId })}
      >
        <ImageBackground source={require("../assets/images/playercards/BlankCard.png")} style={{width: '100%', height: '100%'}}>
          {loading ?
            <View style={{ marginTop: 140 }}>
              <ActivityIndicator size="large" color={Colors.appBlueColor} />
            </View>
            :
            <View style={{ marginTop: 40 }}>
              <Text style={style.listItemText}>{name}</Text>
              <Text style={style.listItemText}>Top 5s:</Text>
              <Text style={style.listItemText}>{top5Stat}</Text>
              <Text style={style.listItemText}>Kills:</Text>
              <Text style={style.listItemText}>{killsStat}</Text>
              <Text style={style.listItemText}>Matches Played:</Text>
              <Text style={style.listItemText}>{playedMatchesStat}</Text>
              <Text style={style.listItemText}>Wins:</Text>
              <Text style={style.listItemText}>{winsStat}</Text>
              <Text style={style.listItemText}>Win Ratio:</Text>
              <Text style={style.listItemText}>{winRatioStat}</Text>
              <Text style={style.listItemText}>Kill/Death Ratio:</Text>
              <Text style={style.listItemText}>{killRatioStat}</Text>
            </View>
          }
        </ImageBackground>
      </TouchableOpacity>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
   };
};

export default connect(mapStateToProps, null)(cardBackScreen);
