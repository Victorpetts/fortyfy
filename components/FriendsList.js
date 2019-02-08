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
    return (
      <View>
        <User name={"Moa"} lvl={2}/>
        <User name={"Constantine"} lvl={12} />
        <User name={"Magnelia"} lvl={15} />
        <User name={"Jesper"} lvl={99} />
        <User name={"Axel"} lvl={71} />
      </View>
    )
  }

  mapFriendRequests() {
    return (
      <View>
        <User name={"Jonathan"} request={true} />
        <User name={"Anton"} request={true} />
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
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(FriendsList);
