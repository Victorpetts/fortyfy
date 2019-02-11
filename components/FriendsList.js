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

    const friendsList = this.props.users

    return friendsList.map((user) => {
      return (
        <User
        key={user.name}
        name={user.name}
        lvl={user.level}
        navigation={this.props.navigation}
      />
      )
    })

  }

  mapFriendRequests() {
    return (
      <View>
        <User
          name={"Jonathan"}
          request={true}
          navigation={this.props.navigation}
        />
        <User
          name={"Anton"}
          request={true}
          navigation={this.props.navigation}
        />
      </View>
    )
  }

  render() {
    return (

      <View style={style.container}>

        <View style={{
          flexDirection: 'row',
          paddingLeft: '4%',
        }}>
          <FontAwesome style={{ fontSize: 18, paddingTop: 2, color: 'yellow', marginRight: '2%' }}>{Icons.chessPawn}</FontAwesome>
          <Text style={style.smallText}>Vänförågan</Text>
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
          <Text style={style.smallText}>Dina Vänner</Text>
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
