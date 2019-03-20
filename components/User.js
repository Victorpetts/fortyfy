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

  state = {
    image: this.props.card
  };

  render() {

    const userId = this.props.id;
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;
    const userCard = this.state.image;
    const userLvl = thisUser.lvl;
    const isFriend = thisUser.friend;

    return (
      <View>
        {isFriend
          ?
          <View style={style.userBigContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UserCard', {
                userId: userId,
                userCard: userCard
              })}
            >
              <View style={style.userSquareContainer}>
                <View style={style.bigImageContainer}>
                  <Image
                    source={this.state.image}
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
          <View style={style.userSmallContainer}>
            <View style={style.smallImageContainer}>
              <Image
                source={this.state.image}
                style={{ height: 76, width: 50 }}
              />
            </View>
            <View style={style.smallListItemContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UserProfile', {
                tourName: userName,
                userCard: userCard,
                isFriend: thisUser.friend
              })}
            >
              <Text style={style.listItemText}>{userName}</Text>
            </TouchableOpacity>
              <Text style={style.listItemSmallText}>Level {userLvl}</Text>
              </View>
            <View style={style.smallButtonContainer}>
              <TourButtonSmall
                buttonTitle={'Accept'}
                buttonFunc={() => this.props.acceptFriend(userName)}
              />
              <TourButtonSmallRed
                buttonTitle={'Decline'}
                buttonFunc={() => this.props.denyFriend(userName)}
              />
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
