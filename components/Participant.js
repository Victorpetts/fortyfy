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
    this.setState(prevState =>({
      checked: !prevState.checked
    }));
  }

  render() {

    const userId = this.props.id;
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;
    const playedMatches = 2;
    const playerLvl = thisUser.lvl;

    const thisTour = this.props.thisTour;
    const totalMatches = thisTour.totalMatches;

    return (
      <View style={{
        paddingHorizontal: 10,
        paddingVertical: 5
      }}>
        <View style={style.particContainer}>
        <View style={{ justifyContent: 'flex-start', flexDirection: 'row'}}>
        <Image
        source={require('../assets/images/bluegold-badge.png')}
        style={{ height: 25, width: 30 }}
        />
        <View style={{ position: 'absolute', top: 2, alignItems: 'center', width: '100%' }}>
        <Text style={style.listItemSmallText}>{playerLvl}</Text>
        </View>
        </View>
        <View style={{ flex: 1, paddingLeft: '3%' }}>
          <Text style={style.particText}>{userName}</Text>
          </View>
          <Text style={style.particText}>{playedMatches} / {totalMatches}</Text>
        </View>
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(Participant);
