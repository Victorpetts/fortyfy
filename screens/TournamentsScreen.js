import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform
} from 'react-native';

import { TourButton, RoundButton } from '../components/TourButton.js';
import Tour from '../components/Tour.js';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';

class TournamentsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tournaments',
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
      width: '90%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    }
  });

  state = {
    toggleOngoing: true,
    toggleFinished: false,
    show: false
  }

  toggleOngoing = () => {
    this.setState({
      toggleOngoing: true,
      toggleFinished: false
    });
  };

  toggleFinished = () => {
    this.setState({
      toggleFinished: true,
      toggleOngoing: false
    });
  };

  mapOngoingTours() {

    ongoingTour = this.props.tours.filter(function (item) {
      return item.finished === false;
    }).map(function ({ name, players, wincon, totalMatches, fromDate, toDate, finished }) {
      return { name, players, wincon, totalMatches, fromDate, toDate, finished };
    });

    return ongoingTour.map((tour) => {
      return (
        <Tour
          key={tour.name}
          name={tour.name}
          players={tour.players}
          wincon={tour.wincon}
          totalMatches={tour.totalMatches}
          fromDate={tour.fromDate}
          toDate={tour.toDate}
          finished={tour.finished}
          navigation={this.props.navigation}
        />
      )
    })
  }

  mapFinishedTours() {

    finishedTour = this.props.tours.filter(function (item) {
      return item.finished === true;
    }).map(function ({ name, players, wincon, totalMatches, fromDate, toDate, finished }) {
      return { name, players, wincon, totalMatches, fromDate, toDate, finished };
    });

    return finishedTour.map((tour) => {
      return (
        <Tour
          key={tour.name}
          name={tour.name}
          players={tour.players}
          wincon={tour.wincon}
          totalMatches={tour.totalMatches}
          fromDate={tour.fromDate}
          toDate={tour.toDate}
          finished={tour.finished}
          navigation={this.props.navigation}
        />
      )
    })
  }

  pressButton = () => {
    this.setState({ show: !this.state.show })
  }


  render() {

    const { navigate } = this.props.navigation;

    return (

      <View
        style={{ height: '100%' }}
      >

        {this.state.toggleOngoing === true ? (
          <View>
            <View
              style={style.tabBackground}
            >
              <View
                style={style.enabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleOngoing()}
                  accessible={true}
                  accessibilityLabel={'Button - Show ongoing tournaments'}
                >
                  <Text
                    style={style.enabledTabText}
                  >
                    Ongoing
                    </Text>
                </TouchableOpacity>
              </View>
              <View
                style={style.disabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleFinished()}
                  accessible={true}
                  accessibilityLabel={'Button - Show finished tournaments'}
                >
                  <Text
                    style={style.disabledTabText}
                  >
                    Finished
                      </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{
              paddingBottom: '12%'
            }}>

            {/* When + button is pressed */}

              {this.state.show === true ?
                <View
                  style={style.whiteOverlay}
                >
                  <TouchableOpacity
                    onPress={this.pressButton}
                    activeOpacity={1}
                  >
                    <ScrollView style={style.mainContainer}>

                      <Text style={style.blueText}>Invites (number)</Text>

                      <Text style={style.blueText}>Tournaments</Text>
                      {this.mapOngoingTours()}
                    </ScrollView>
                  </TouchableOpacity>
                </View>
                :
                <ScrollView style={style.mainContainer}>

                  <Text style={style.blueText}>Invites (number)</Text>

                  <Text style={style.blueText}>Tournaments</Text>
                  {this.mapOngoingTours()}
                </ScrollView>
              }
              <View style={{
                position: 'absolute',
                bottom: 75,
                right: 10
              }}>
                <RoundButton
                  id={'plus'}
                  buttonFunc={this.pressButton}
                  showing={this.state.show}
                />
              </View>

              {/* When the + button has been pressed and menu is showing */}

              {this.state.show === true &&

                <View>
                  <View style={{
                    position: 'absolute',
                    bottom: 120,
                    right: 15,
                    flexDirection: 'row'
                  }}>
                    <Text style={style.buttonMediumText}>Create tournament</Text>
                    <RoundButton
                      id={'search'}
                      showingSmall={this.state.show}
                      thirdButtonFunc={() => navigate('TourCreate')}
                    />
                  </View>
                  <View style={{
                    position: 'absolute',
                    bottom: 70,
                    right: 15,
                    flexDirection: 'row'
                  }}>
                    <Text style={style.buttonMediumText}>Find tournament</Text>
                    <RoundButton
                      id={'small plus'}
                      showingSmall={this.state.show}
                    />
                  </View>
                </View>
              }
            </View>
          </View>
        ) : this.state.toggleFinished === true ? (
          <View>
            <View
              style={style.tabBackground}
            >
              <View
                style={style.disabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleOngoing()}
                  accessible={true}
                  accessibilityLabel={'Button - Show ongoing tournaments'}
                >
                  <Text
                    style={style.disabledTabText}
                  >
                    Ongoing
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={style.enabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleFinished()}
                  accessible={true}
                  accessibilityLabel={'Button - Show finished tournaments'}
                >
                  <Text
                    style={style.enabledTabText}
                  >
                    Finished
                    </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={style.mainContainer}
              automaticallyAdjustContentInsets={false}
            >
              {this.mapFinishedTours()}
            </ScrollView>
          </View>

        ) : null}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(TournamentsScreen);
