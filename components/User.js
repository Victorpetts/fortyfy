import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import style from '../assets/Style.js';

class User extends Component {

  render() {
    return (
      <View style={style.userContainer}>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome style={{ fontSize: 50, color: 'yellow' }}> {Icons.meh} </FontAwesome>
          <Text style={style.userText}>{this.props.name}</Text>
        </View>
        {!this.props.request
          ? <Text style={style.userText}>
            {this.props.lvl}
            <FontAwesome style={{ fontSize: 20, color: 'yellow' }}> {Icons.award} </FontAwesome>
          </Text>
          : <Text style={style.userText}>
            <FontAwesome style={{ fontSize: 30, color: 'yellow' }}> {Icons.windowClose} </FontAwesome>
            <FontAwesome style={{ fontSize: 30, color: 'yellow' }}> {Icons.checkSquare} </FontAwesome>
          </Text>
        }
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    partic: state.partic
   };
};

export default connect(mapStateToProps, null)(User);
