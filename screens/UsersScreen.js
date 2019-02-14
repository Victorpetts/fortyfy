import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  View
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
      backgroundColor: 'black',
      height: 90,
      borderBottomWidth: 4,
      borderColor: 'yellow'
    },
    headerTitleStyle: {
      color: 'yellow',
      fontSize: 34,
      fontFamily: 'sans-serif'
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
            <RoundButton />
          </View>
        </View>
        {this.state.isVisible && (
          <Overlay
          height="auto"
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
                          this.state.search !== '' ? (
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
                          ) : (null)
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
