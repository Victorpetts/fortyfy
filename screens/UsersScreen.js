import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../actions/index.js';
import { SearchBar, Overlay } from 'react-native-elements';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { TourButtonSmall, DisabledButtonSmall, TourButtonFullWidth, RoundButton } from '../components/Buttons.js';
import FriendsList from '../components/FriendsList.js';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';


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
          source={require('../assets/images/menuicons/search.png')}
          style={{ height: 18, width: 17, marginRight: 15 }}
        />
      </TouchableOpacity>
    )
  });

  state = {
    toggle: false,
    search: '',
    isVisible: false,
    noPopUp: true
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

  goToUserCard = (userId) => {
    this.props.navigation.navigate('UserCard', {
      userId: userId
    })

    this.setState({
      isVisible: false
    })
  }

  sendRequest = (userId) => {
    this.props.sendRequest(userId)
  }

  buttonSwitch = (player) => {
    switch (player.status) {
      case "notFriend":
        return (
          <TourButtonSmall
            buttonTitle={'ADD FRIEND'}
            buttonFunc={() => this.sendRequest(player.id)}
          />
        );
      case "pending":
        return (
          <DisabledButtonSmall
            buttonTitle={'PENDING'}
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

    let filteredPlayers = this.props.users.filter((player) => {
        return player.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <View>
        <ScrollView style={style.mainContainer}>
          <FriendsList
            navigation={this.props.navigation}
          />
          {this.state.isVisible &&
            <Overlay
              height='auto'
              width='90%'
              isVisible={this.state.isVisible == true}
              onBackdropPress={() => this.setState({ isVisible: false })}
              overlayBackgroundColor={'black'}
              overlayStyle={{
                borderColor: Colors.appBlueColor,
                borderWidth: 2,
                borderRadius: 5,
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
                    paddingBottom: 20,
                  }}
                  inputContainerStyle={{
                    backgroundColor: 'white'
                  }}
                />
                {filteredPlayers.map((player) => {
                  return (
                    <View key={player.id} >
                      {this.state.search !== '' &&
                        <ScrollView
                          contentContainerStyle={{
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                          }}
                        >
                          <View style={style.inviteListContainer}>
                            <TouchableOpacity
                              onPress={() => this.goToUserCard(player.id)}
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                              }}
                            >
                              <Image
                                source={player.card}
                                style={{ height: 60, width: 40, marginRight: 5 }}
                              />
                              <View
                                style={{
                                  flexDirection: 'column',
                                  flex: 1
                                }}
                              >
                                <Text style={style.listItemText}>{player.name}</Text>
                                <Text style={style.listItemSmallText}>Level {player.lvl}</Text>
                              </View>
                              <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center'
                              }}>
                                {this.buttonSwitch(player)}
                              </View>
                            </TouchableOpacity>
                          </View>
                        </ScrollView>
                      }
                    </View>
                  )
                })}
                <TourButtonFullWidth
                  buttonTitle={'Done'}
                  buttonFunc={this.toggleSearch}
                />
              </View>
            </Overlay>
          }
        </ScrollView>

        <View style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          flexDirection: 'row'
        }}>
          {this.state.noPopUp &&
            <View style={{
              backgroundColor: Colors.appBlueColor,
              width: 200,
              marginRight: 5
            }}>
              <Text style={style.popUpText}>
                Invite a friend and recieve 500 coins
              </Text>
            </View>
          }
          <RoundButton
            buttonImg={require('../assets/images/menuicons/plus.png')}
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
