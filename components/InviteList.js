import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import style from '../assets/Style.js';
import { TourButtonSmall, DisabledButtonSmall } from '../components/Buttons.js';

class InviteList extends Component {

  state = {
    buttonClicked: false,
    image: this.props.card
  }

  sendInvitation = () => {
    this.setState({
      buttonClicked: true
    })
  }

  render() {

    const userId = this.props.id;
    const thisUser = this.props.users.find(user => user.id === userId);
    const userName = thisUser.name;
    const userLvl = thisUser.lvl;

    return (

      <View style={style.inviteListContainer}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Image
            source={this.state.image}
            style={{
              height: 60,
              width: 40,
              marginRight: 5
            }}
          />
          <View style={{
            flexDirection: 'column',
            flex: 1
          }}>
            <Text style={style.listItemText}>{userName}</Text>
            <Text style={style.listItemSmallText}>Level {userLvl}</Text>
          </View>

          <TouchableOpacity
            onPress={this.sendInvitation}
          >
              <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
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
              </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(InviteList);
