import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TourButton } from '../components/TourButton.js';
import FriendsList from '../components/FriendsList.js';
import SearchPlayer from '../components/SearchPlayer';
import style from '../assets/Style.js';


class UsersScreen extends Component {

  state = {
    toggle: false
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
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  };

  render() {

    return (
      <ScrollView style={style.mainContainer}>
      {!this.state.toggle
            ?
        <View>
          <FriendsList
            navigation={this.props.navigation}
          />
          <View style={style.buttonContainer}>
            <TourButton
              buttonTitle={'SEARCH PLAYER'}
              buttonFunc={this.toggleSearch}
            />
          </View>
        </View>
        : <SearchPlayer
            buttonFunc={this.toggleSearch} 
          />
         }
      </ScrollView>
    )

  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(UsersScreen);
