import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { acceptFriend, denyFriend } from '../actions/index.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import style from '../assets/Style.js';

class User extends Component {

  render() {

    const userName = this.props.name;
    // const findUser = this.props.users.find( thisUser => thisUser.name === userName );

    return (
      <View>
        {this.props.friend
          ? <TouchableOpacity
            onPress={() => this.props.navigation.navigate('UserCard',{
              userName:userName
            })}
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
          : <View style={style.userContainer}>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome style={{ fontSize: 50, color: 'yellow' }}> {Icons.meh} </FontAwesome>
              <Text style={style.userText}>{this.props.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this.props.denyFriend(userName)}
              >
                <FontAwesome style={{ fontSize: 45, color: 'yellow' }}> {Icons.windowClose} </FontAwesome>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.acceptFriend(userName)}
              >
                <FontAwesome style={{ fontSize: 45, color: 'yellow' }}> {Icons.checkSquare} </FontAwesome>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
   };
};

export default connect(mapStateToProps, { acceptFriend, denyFriend })(User);
