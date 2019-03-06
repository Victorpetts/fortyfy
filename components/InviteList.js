import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { acceptFriend, denyFriend, inviteFriend } from '../actions/index.js';
import { FontAwesome, Feather } from '@expo/vector-icons';
import style from '../assets/Style.js';
import { TourButtonSmall, DisabledButtonSmall } from '../components/TourButton.js';

class User extends Component {

  state = {
    buttonClicked: false
  }

  sendInvitation = () => {
    this.setState({
      buttonClicked: true
    })
  }

  render() {

    return (

      <View style={style.inviteListContainer}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Image
            source={require('../assets/images/frame-blue.png')}
            style={{ height: 60, width: 40, marginRight: 5 }}
          />
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={style.inviteListText}>{this.props.name}</Text>
            <Text style={style.inviteListSmallText}>Level {this.props.level}</Text>
          </View>
          <TouchableOpacity
            onPress={this.sendInvitation}
          >
            {this.state.buttonClicked === false ?
              <TourButtonSmall
                buttonTitle={'Invite'}
                buttonFunc={this.sendInvitation}
              />
              :
              <DisabledButtonSmall
                buttonTitle={'Invited'}
              />
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { acceptFriend, denyFriend, inviteFriend })(User);