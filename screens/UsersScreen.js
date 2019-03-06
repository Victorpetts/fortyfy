import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { SearchBar, Overlay } from 'react-native-elements';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TourButton, DisabledButton, RoundButton } from '../components/Buttons.js';
import FriendsList from '../components/FriendsList.js';
import style from '../assets/Style.js';
import { sendRequest } from '../actions/index.js';


class UsersScreen extends Component {

  state = {
    search: '',
    isVisible: false
  }

  static navigationOptions = {
    title: 'Friends',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: 'black',
      height: 90
    },
    headerTitleStyle: {
      color: 'yellow',
      fontSize: 34
    }
  };

  toggleSearch = () => {
    this.setState({
      isVisible: true
    })
  };

  updateSearch = search => {
    this.setState({ search });
  };

  goToUserProfile = (player) => {
    this.props.navigation.navigate('UserProfile', {
      tourName: player.name,
      isFriend: player.friend
    })
    this.setState({
      isVisible: false
    })
  }

  sendRequest = (player) => {
    this.props.sendRequest(player.name)
  }

  buttonSwitch = (player) => {
    switch (player.status) {
      case "notFriend":
      return (
        <TourButton
          buttonTitle={'ADD FRIEND'}
          buttonFunc={() => this.sendRequest(player)}
        />
        );
      case "friend":
      return (
        <DisabledButton
          buttonTitle={'FRIEND'}
      />
      );
      case "pending":
      return (
        <DisabledButton
          buttonTitle={'REQUEST SENT'}
        />
      );
      default:
      return (
        <DisabledButton
          buttonTitle={'FRIEND'}
      />
      );
    }
  }

  render() {

    let filteredPlayers = this.props.users.filter(
      (player) => {
        return player.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <ScrollView style={style.mainContainer}>
        <View>
          <FriendsList
            navigation={this.props.navigation}
          />
          <View style={style.buttonContainer}>
            <TourButton
              buttonTitle={'SEARCH PLAYER'}
              buttonFunc={this.toggleSearch}
            />
            <View style={{ paddingTop: '5%' }}>
              <RoundButton />
            </View>
          </View>
        </View>
        {this.state.isVisible && (
          <Overlay
            height='auto'
            isVisible={this.state.isVisible == true}
            onBackdropPress={() => this.setState({ isVisible: false })}
            overlayBackgroundColor={'black'}
            overlayStyle={{
              width: '90%',
              borderColor: 'yellow',
              borderWidth: 2
            }}
          >
            <View>
              <SearchBar
                placeholder="Search..."
                onChangeText={this.updateSearch}
                value={this.state.search}
                containerStyle={{
                  backgroundColor: 'transparent'
                }}
              />
              {filteredPlayers.map((player) => {
                return (
                  this.state.search !== '' && (
                    <ScrollView
                      key={player.name}
                      contentContainerStyle={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                      style={{ padding: 5 }}
                    >
                      <TouchableOpacity
                        onPress={() => this.goToUserProfile(player)}
                      >
                        <View style={{
                          flexDirection: 'column'
                        }}>
                          <View style={{
                            flexDirection: 'row',
                            paddingLeft: '2%',
                          }}>
                            <Ionicons name="md-person" size={18} color="yellow" style={{ paddingTop: 3, marginRight: '5%' }} />
                            <Text style={style.playerText}>
                              {player.name}
                            </Text>
                          </View>
                          <View style={{
                            flexDirection: 'row',
                            paddingLeft: '2%',
                          }}>
                          <FontAwesome name="gamepad" size={18} color="yellow" style={{ paddingTop: 3, marginRight: '5%' }} />
                            <Text style={style.playerText}>
                              {player.level}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      {this.buttonSwitch(player)}
                    </ScrollView>
                  )
                )
              })}
            </View>
          </Overlay>
        )}
      </ScrollView>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    users: state.users
  };
};

export default connect(mapStateToProps, { sendRequest })(UsersScreen);
