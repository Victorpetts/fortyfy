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

    let friendsList = this.props.users.filter(user => user.friend === true);

    friendsList.sort(function(a,b){
      return a.name.localeCompare(b.name);
    })

    return friendsList.map((user) => {
      return (
        <User
          key={user.id}
          id={user.id}
          navigation={this.props.navigation}
        />
      )}
    )
  }

  mapFriendRequests = () => {

    let friendsList = this.props.users.filter(user => user.friend === false);

    return friendsList.map((user) => {
      return (
        <User
          key={user.id}
          id={user.id}
          card={user.card}
          navigation={this.props.navigation}
        />
      )}
    )
  }

  render() {
    return (

      <View style={style.friendsContainer}>

        <View style={{
          flexDirection: 'row'
          }}>
          <Text style={style.blueText}>Friend Requests</Text>
        </View>

        <ScrollView style={{ height: '45%', marginHorizontal: 5 }}>
          {this.mapFriendRequests()}
        </ScrollView>

        <View style={{
          flexDirection: 'row'
        }}>
          <Text style={style.blueText}>Friends</Text>
        </View>

        <View style={{
          height: '100%',
          flex: 1
        }}>
          <View style={style.friendsListContainer}>
            {this.mapFriendsList()}
          </View>
        </View>

      </View>

    )
  }

}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(FriendsList);
