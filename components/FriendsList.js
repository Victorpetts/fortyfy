import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import User from './User.js';
import style from '../assets/Style.js';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


class FriendsList extends Component {

  mapFriendsList() {

    friendsList = this.props.users.filter(function(item){
      return item.friend === true;
    }).map(function({name, level, friend}){
      return {name, level, friend};
    });

    friendsList.sort((a, b) => b.level - a.level);

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

      <View style={style.friendsContainer}>

        <View style={{
          flexDirection: 'row',
          paddingLeft: '2%'
          }}>
          <Text style={style.blueText}>Friend Requests</Text>
        </View>

        <ScrollView style={{ height: '45%', marginHorizontal: 5 }}>
          {this.mapFriendRequests()}
        </ScrollView>

        <View style={{
          flexDirection: 'row',
          paddingLeft: '2%'
        }}>
          <Text style={style.blueText}>Friends</Text>
        </View>

        <ScrollView style={{ height: '100%' }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingBottom: '5%' }}>
          {this.mapFriendsList()}
          </View>
        </ScrollView>

      </View>

    )
  }

}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(FriendsList);
