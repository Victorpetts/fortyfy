import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { SearchBar, Overlay } from 'react-native-elements';

import { TourButton, DisabledButton, RoundButton } from '../components/TourButton.js';
import FriendsList from '../components/FriendsList.js';
import style from '../assets/Style.js';


class UsersScreen extends Component {

  state = {
    toggle: false,
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

  bla = isFocused => {
    console.log(isFocused);
  }

  showPlayerCard = (player) => {
    this.props.navigation.navigate('UserCard',{
      userName: player.name
    })
          this.setState({
            isVisible: false
          })
  }

  render() {

    let filteredPlayers = this.props.users.filter(
      (player) => {
        return player.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    let isFocused = this.props.navigation.isFocused();

    return (
      <ScrollView style={style.mainContainer}>
        <View>
          {this.bla(isFocused)}
          <FriendsList
            navigation={this.props.navigation}
          />
          <View style={style.buttonContainer}>
            <TourButton
              buttonTitle={'SEARCH PLAYER'}
              buttonFunc={this.toggleSearch}
            />
            <View style={{
              paddingTop: '5%'
            }}
            >
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
                      style={{
                        padding: 5
                      }}
                    >
                    <TouchableOpacity
                    onPress={() => this.showPlayerCard(player)}
                    >
                      <View style={{
                        flexDirection: 'column'
                      }}>
                        <Text style={style.playerText}>
                          {player.name}
                        </Text>
                        <Text style={style.playerText}>
                          level: {player.level}
                        </Text>
                      </View>
                      </TouchableOpacity>
                      {player.friend === false ? (
                        <TourButton
                          buttonTitle={'ADD FRIEND'}
                        />
                      ) : (
                        <DisabledButton
                          buttonTitle={'FRIEND'}
                        />
                      )}
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

export default connect(mapStateToProps, null)(UsersScreen);
