import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { acceptFriend, denyFriend } from '../actions/index.js';
import { FontAwesome, Feather } from '@expo/vector-icons';
import style from '../assets/Style.js';

import { TourButtonSmall, TourButtonSmallRed } from './Buttons.js';


class User extends Component {

  render() {

    const userId = this.props.id;
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;
    const userCard = thisUser.card;
    const userLvl = thisUser.lvl;
    const isFriend = thisUser.friend;

    return (
      <View>
        {isFriend ?
          <View style={style.userBigContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UserCard', {
                userId: userId
              })}
            >
              <View style={style.userSquareContainer}>
                <View style={style.bigImageContainer}>
                  <Image
                    source={userCard}
                    style={{ height: 140, width: 90 }}
                  />
                </View>
                <View style={style.bigListItemContainer}>
                  <Text style={style.listItemText}>{userName}</Text>
                  <Text style={style.listItemSmallText}>Level {userLvl}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        :
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('UserCard', {
            userId: userId
          })}
        >
          <View style={style.userSmallContainer}>
            <View style={style.smallImageContainer}>
              <Image
                source={userCard}
                style={{ height: 76, width: 50 }}
              />
            </View>
            <View style={style.smallListItemContainer}>
              <Text style={style.listItemText}>{userName}</Text>
              <Text style={style.listItemSmallText}>Level {userLvl}</Text>
            </View>
            <View style={style.smallButtonContainer}>
              <TourButtonSmall
                buttonTitle={'Accept'}
                buttonFunc={() => this.props.acceptFriend(userId)}
              />
              <TourButtonSmallRed
                buttonTitle={'Decline'}
                buttonFunc={() => this.props.denyFriend(userId)}
              />
            </View>
          </View>
        </TouchableOpacity>
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
