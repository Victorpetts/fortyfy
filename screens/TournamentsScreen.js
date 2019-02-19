import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View
} from 'react-native';

import { TourButton } from '../components/TourButton.js';
import MyTours from '../components/MyTours';
import CreateTour from '../components/CreateTour.js';
import style from '../assets/Style.js';

export default class TournamentsScreen extends React.Component {

  state = {
    toggle: false
  }

  static navigationOptions = {
    title: 'Tournaments',
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

  toggleTour = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }

  render() {

    return (
      <ScrollView style={style.mainContainer}>
        {!this.state.toggle ?
          <View>
            <MyTours
              navigation={this.props.navigation}
            />
            <View style={style.buttonContainer}>
              <TourButton
                buttonTitle={`CREATE TOURNAMENT`}
                buttonFunc={this.toggleTour}
              />
              <TourButton
                buttonTitle={'SEARCH TOURNAMENT'}
              />
            </View>
          </View>
        :
          <CreateTour
            buttonFunc={this.toggleTour}
            navigation={this.props.navigation}
          />
        }
      </ScrollView>
    )
  }
}
