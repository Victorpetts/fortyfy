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

      <View style={style.container}>

        <View style={{
          flexDirection: 'row',
          paddingLeft: '2%',
        }}>
          <Ionicons name="md-person-add" size={18} color="yellow" style={{ paddingTop: 3, marginRight: '2%' }} />
          <Text style={style.smallText}>Friend Requests</Text>
        </View>

        <ScrollView>
          {this.mapFriendRequests()}
        </ScrollView>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '5%'
        }}>
          <View style={{
            flexDirection: 'row',
            paddingLeft: '2%',
          }}>
            <Ionicons name="md-person" size={18} color="yellow" style={{ paddingTop: 3, marginRight: '5%' }} />
            <Text style={style.smallText}>Friends</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            paddingLeft: '45%'
          }}>
            <Text style={style.smallText}>Level</Text>
            <FontAwesome name="gamepad" size={18} color="yellow" style={{ paddingTop: 3, marginLeft: '5%' }} />
          </View>
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
