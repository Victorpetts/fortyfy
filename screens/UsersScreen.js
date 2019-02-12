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
import style from '../assets/Style.js';


class UsersScreen extends Component {

  static navigationOptions = {
    title: 'Vänner',
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

  render() {

    return (
      <ScrollView style={style.mainContainer}>
        <View>
          <FriendsList
            navigation={this.props.navigation}
          />
          <View style={style.buttonContainer}>
            <TourButton
              buttonTitle={'SEARCH PLAYER'}
            />
          </View>
        </View>
      </ScrollView>
    )

  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(UsersScreen);
