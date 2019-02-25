import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { acceptFriend, denyFriend } from '../actions/index.js';
import { FontAwesome, Feather } from '@expo/vector-icons';
import style from '../assets/Style.js';
import { TourButton } from './TourButton.js';

class User extends Component {

  state = {
    buttonTitle: 'SEND INVITE'
  }

  render() {

    const userName = this.props.name;
    // const findUser = this.props.users.find( thisUser => thisUser.name === userName );

    return (
      <View>
        {this.props.friend
          ? <TouchableOpacity
            onPress={() => this.props.navigation.navigate('UserCard',{
              userName: userName
            })}
          >
            <View style={style.userContainer}>
              <View style={{ flexDirection: 'row' }}>
              <FontAwesome name="meh-o" size={50} color="yellow" style={{ paddingRight: '5%' }} />
                <Text style={style.userText}>{this.props.name}</Text>
              </View>
              <Text style={style.userText}>
                {this.props.lvl}
                <Feather name="award" size={20} color="yellow" />
              </Text>
            </View>
          </TouchableOpacity>
          : <View style={style.userContainer}>
            <View style={{ flexDirection: 'row' }}>
            <FontAwesome name="meh-o" size={50} color="yellow" style={{ paddingRight: '5%' }} />
              <Text style={style.userText}>{this.props.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this.props.denyFriend(userName)}
              >
                <FontAwesome name="minus-square" size={45} color="yellow" style={{ paddingRight: '5%' }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.acceptFriend(userName)}
              >
                <FontAwesome name="check-square" size={45} color="yellow" />
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
