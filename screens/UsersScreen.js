import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { SearchBar, Overlay } from 'react-native-elements';
import { TourButtonSmall, DisabledButtonSmall, TourButtonFullWidth, RoundButton } from '../components/Buttons.js';
import FriendsList from '../components/FriendsList.js';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';

import { sendRequest } from '../actions/index.js';


class UsersScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Friends',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: Colors.appBlackColor,
      height: 60,
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      textAlign: 'center',
      width: '100%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    },
    headerRight: (
      <TouchableOpacity
        onPress={navigation.getParam('toggleSearch')}
      >
        <Image
          source={require('../assets/images/search.png')}
          style={{ height: 18, width: 17, marginRight: 15 }}
        />
      </TouchableOpacity>
    )
  });

  state = {
    toggle: false,
    search: '',
    isVisible: false,
    noPopUp: false
  };

  componentDidMount() {
    this.props.navigation.setParams({ toggleSearch: this.toggleSearch })
  };

  toggleSearch = () => {
    this.setState({
      isVisible: !this.state.isVisible
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
          <TourButtonSmall
            buttonTitle={'ADD FRIEND'}
            buttonFunc={() => this.sendRequest(player)}
          />
        );
      case "friend":
        return (
          <DisabledButtonSmall
            buttonTitle={'FRIEND'}
          />
        );
      case "pending":
        return (
          <DisabledButtonSmall
            buttonTitle={'REQUEST SENT'}
          />
        );
      default:
        return (
          <DisabledButtonSmall
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
      <View>
        <ScrollView style={style.mainContainer}>
          <View>
            <FriendsList
              navigation={this.props.navigation}
            />
          </View>
          {this.state.isVisible && (
            <Overlay
              height='auto'
              width='90%'
              isVisible={this.state.isVisible == true}
              onBackdropPress={() => this.setState({ isVisible: false })}
              overlayBackgroundColor={'black'}
              overlayStyle={{
                borderColor: Colors.appBlueColor,
                borderWidth: 2.5,
                borderRadius: 2.5,
                backgroundColor: Colors.appBackgroundColor
              }}
            >
              <View>
                <SearchBar
                  placeholder="Search..."
                  onChangeText={this.updateSearch}
                  value={this.state.search}
                  containerStyle={{
                    backgroundColor: Colors.appBackgroundColor,
                    borderBottomColor: Colors.appBackgroundColor,
                    borderTopColor: Colors.appBackgroundColor,
                    paddingHorizontal: 0,
                    paddingVertical: 10,
                  }}
                  inputContainerStyle={{
                    margin: 0,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    borderColor: Colors.appBlueColor,
                    borderWidth: 1
                  }}
                />
                {filteredPlayers.map((player) => {
                  return (
                    this.state.search !== '' && (
                      <ScrollView
                        key={player.name}
                        contentContainerStyle={{
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <View style={style.inviteListContainer}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                            }}
                          >
                            <Image
                              source={require('../assets/images/frame-blue.png')}
                              style={{ height: 60, width: 40, marginRight: 5 }}
                            />
                            <TouchableOpacity
                              onPress={() => this.goToUserProfile(player)}
                              style={{
                                flexDirection: 'column',
                                flex: 1
                              }}
                            >
                              <Text style={style.listItemText}>
                                {player.name}
                              </Text>
                              <Text style={style.listItemSmallText}>
                                Level {player.lvl}
                              </Text>
                            </TouchableOpacity>
                            <View style={{
                              flexDirection: 'column',
                              justifyContent: 'center'
                            }}>
                              {this.buttonSwitch(player)}
                            </View>
                          </View>
                        </View>

                      </ScrollView>
                    )
                  )
                })}
                <TourButtonFullWidth
                  buttonTitle={'Done'}
                  buttonFunc={this.toggleSearch}
                />
              </View>
            </Overlay>
          )}
        </ScrollView>
        <View style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          flexDirection: 'row'
        }}>
          {this.state.noPopUp === true &&
            <View style={{
              backgroundColor: Colors.appBlueColor,
              height: 56,
              width: 200,
              marginRight: 5
            }}>
              <Text style={style.popUpText}>
                Invite friends and recieve
                40000 YONYFY coins
                </Text>
            </View>
          }
          <RoundButton
            id={'plus'}
            buttonFunc={() => this.setState({ noPopUp: !this.state.noPopUp })}
          />
        </View>
      </View>
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
