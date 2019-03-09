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

    const userName = this.props.name;

    return (
      <View>
        {this.props.friend
          ?
          <View style={{ flexDirection: 'row', width: '100%', flex: 1, padding: 5 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('UserCard', {
              userName: userName
            })}
          >
            <View style={style.friendContainer}>
            <View style={{ paddingTop: 5, paddingHorizontal: 5, alignSelf: 'center' }}>
            <Image
              source={require('../assets/images/frame-silver.png')}
              style={{ height: 150, width: 100 }}
            />
          </View>
            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', paddingBottom: 5 }}>
              <Text style={style.listItemText}>{this.props.name}</Text>
              <Text style={style.listItemSmallText}>Level {this.props.lvl}</Text>
            </View>
            </View>
          </TouchableOpacity>
            </View>
          : <View style={style.userContainer}>
          <View style={{ padding: 5, alignSelf: 'center' }}>
            <Image
              source={require('../assets/images/frame-silver.png')}
              style={{ height: 76, width: 50 }}
            />
          </View>
            <View style={{ flexDirection: 'column', flex: 1, paddingTop: 5 }}>
              <Text style={style.listItemText}>{this.props.name}</Text>
              <Text style={style.listItemSmallText}>Level {this.props.lvl}</Text>
            </View>
            <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'space-around' }}>
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
