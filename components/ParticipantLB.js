import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';

import style from '../assets/Style.js';

class LeaderBoardPartic extends Component {

  render() {

    const userId = this.props.id;
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;

    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <View style={style.particContainer}>
          <View style={style.placementSquare}>
            <Text style={style.placementText}>4</Text>
          </View>
          <View style={{ paddingLeft: '12%'}}>
            <Text style={style.particText}>{userName}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end'}}>
            <Text style={style.particText}>
              {userId} points
            </Text>
          </View>
        </View>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(LeaderBoardPartic);
