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
import { Ionicons } from '@expo/vector-icons';

class User extends Component {

    state = {
        buttonClicked: false,
        buttonTitle: 'INVITE SENT'
    }


    render() {

        let invitedPlayer = this.props.name

        sendInvitation = () => {
            this.setState({
                buttonClicked: true
            })
        }

        return (

            <View style={style.userContainer}>
                {this.state.buttonClicked === false ?
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <FontAwesome name="meh-o" size={50} color="yellow" style={{ paddingRight: '5%' }} />
                            <Text style={style.userText}>{this.props.name}</Text>
                            <TouchableOpacity
                                onPress={() => this.sendInvitation}
                            >
                                <Ionicons
                                    name="md-person-add"
                                    size={30}
                                    color='yellow'
                                    style={{ margin: 20 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View>
                        <Text style={style.smallText}>
                            {this.state.buttonTitle}
                        </Text>
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

export default connect(mapStateToProps, { acceptFriend, denyFriend, inviteFriend })(User);