import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { acceptFriend, denyFriend, inviteFriend } from '../actions/index.js';
import { FontAwesome, Feather } from '@expo/vector-icons';
import style from '../assets/Style.js';

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
                    <FontAwesome name="meh-o" size={50} color="yellow" style={{ paddingRight: '5%' }} />
                    <Text style={style.inviteListText}>{this.props.lvl} {this.props.name}</Text>
                    <TouchableOpacity onPress={this.sendInvitation} >
                        {this.state.buttonClicked === false ?
                          <Feather
                              name="user-plus"
                              size={30}
                              color='white'
                              style={{ margin: 20 }}
                          />
                        :
                          <Feather
                              name="user-check"
                              size={30}
                              color='yellow'
                              style={{ margin: 20 }}
                          />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default User;
