import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import style from '../assets/Style.js';

class User extends Component {

  render() {
    return (
      <View>
        {!this.props.request
          ? <TouchableOpacity
            onPress={() => this.props.navigation.navigate('UserCard')}
          >
            <View style={style.userContainer}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome style={{ fontSize: 50, color: 'yellow' }}> {Icons.meh} </FontAwesome>
                <Text style={style.userText}>{this.props.name}</Text>
              </View>
                <Text style={style.userText}>
                  {this.props.lvl}
                  <FontAwesome style={{ fontSize: 20, color: 'yellow' }}> {Icons.award} </FontAwesome>
                </Text>
            </View>
          </TouchableOpacity>
          : <View style={{ flexDirection: 'row' }}>
            <FontAwesome style={{ fontSize: 50, color: 'yellow' }}> {Icons.meh} </FontAwesome>
            <Text style={style.userText}>{this.props.name}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UserCard')}
            >
              <FontAwesome style={{ fontSize: 30, color: 'yellow' }}> {Icons.windowClose} </FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UserCard')}
            >
              <FontAwesome style={{ fontSize: 30, color: 'yellow' }}> {Icons.checkSquare} </FontAwesome>
            </TouchableOpacity>
          </View>
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
