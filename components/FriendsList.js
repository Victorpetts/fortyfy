import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import User from './User.js';
import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';


class FriendsList extends Component {

  mapFriendsList() {

    friendsList = this.props.users.filter(function(item){
      return item.friend === true;
    }).map(function({name, level, friend}){
      return {name, level, friend};
    });

    return friendsList.map((user) => {
      return (
        <User
          key={user.name}
          name={user.name}
          lvl={user.level}
          friend={user.friend}
          navigation={this.props.navigation}
        />
      )
    })

  }

  mapFriendRequests() {

    friendsList = this.props.users.filter(function(item){
      return item.friend === false;
    }).map(function({name, level, friend}){
      return {name, level, friend};
    });

    return friendsList.map((user) => {
      return (
        <User
          key={user.name}
          name={user.name}
          lvl={user.level}
          friend={user.friend}
          navigation={this.props.navigation}
        />
      )
    })
  }

  render() {
    return (

      <View style={style.container}>

        <View style={{
          flexDirection: 'row',
          paddingLeft: '4%',
        }}>
          <FontAwesome style={{ fontSize: 18, paddingTop: 2, color: 'yellow', marginRight: '2%' }}>{Icons.chessPawn}</FontAwesome>
          <Text style={style.smallText}>Friend Requests</Text>
        </View>

        <ScrollView style={{ height: '40%' }}>
          {this.mapFriendRequests()}
        </ScrollView>

        <View style={{
          flexDirection: 'row',
          paddingLeft: '4%',
          marginTop: '5%'
        }}>
          <FontAwesome style={{ fontSize: 18, paddingTop: 2, color: 'yellow', marginRight: '2%' }}>{Icons.chessKnight}</FontAwesome>
          <Text style={style.smallText}>Friends</Text>
        </View>

        <ScrollView style={{ height: '100%' }}>
          {this.mapFriendsList()}
        </ScrollView>

      </View>

    )
  }

}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(FriendsList);
