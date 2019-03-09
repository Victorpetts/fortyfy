import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
  Image,
  TouchableHighlightBase
} from 'react-native';

import { TourButton, RoundButton, TourButtonMedium, TourButtonMediumRed } from '../components/Buttons.js';
import Tour from '../components/Tour.js';
import TourInfoMockUp from '../components/TourInfoMockUp.js';
import SponsoredTours from '../components/SponsoredTours.js';

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
    show: false,
    acceptInvite: false
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

    let allTours = this.props.tours;
    let ongoingTours = allTours.filter(tour => tour.finished === false);

    return ongoingTours.map((tour) => {
      return (
        <Tour
          key={tour.id}
          id={tour.id}
          navigation={this.props.navigation}
        />
      )
    })
  }

  mapFinishedTours() {

    let allTours = this.props.tours;
    let finishedTours = allTours.filter(tour => tour.finished === true);

    return finishedTours.map((tour) => {
      return (
        <Tour
          key={tour.id}
          id={tour.id}
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
      <View style={{ height: '100%' }}>

        {this.state.toggleOngoing === true ? (

          // Renders ongoing tab as active and displays its content

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


              {this.state.show === true ?

                // White overlay is active

                <View
                  style={style.whiteOverlay}
                >
                  <TouchableOpacity
                    onPress={this.pressButton}
                    activeOpacity={1}
                  >
                    <ScrollView style={style.mainContainer}>

                      <Text style={style.blueText}>Sponsored</Text>
                      <SponsoredTours />

                    {this.state.acceptInvite === false ?
                      <View>
                        <Text style={style.blueText}>Invites (1)</Text>
                        <View style={style.itemContainer}>
                          <TourInfoMockUp
                            tourName={`Jesper's Tournament`}
                            totalMatches={'8'}
                            winconText={'Most Top 5'}
                            numberOfPlayers={'1'}
                            maxPlayers={'10'}
                            owner={'J-Dawg'}
                          />
                          <View style={{
                            padding: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                          }}>
                            <TourButtonMedium
                              buttonTitle={'Accept invitation'}
                              buttonFunc={() => this.setState({ acceptInvite: true })}
                            />
                            <TourButtonMediumRed
                              buttonTitle={'Decline invitation'}
                            />
                          </View>
                        </View>
                      </View>
                      :
                      <Text style={style.blueText}>Invites (0)</Text>
                    }

                      <Text style={style.blueText}>Tournaments</Text>
                      {this.mapOngoingTours()}
                    </ScrollView>
                  </TouchableOpacity>
                </View>

                :

                // White overlay is not active

                <ScrollView style={style.mainContainer}>

                  <Text style={style.blueText}>Sponsored</Text>
                  <SponsoredTours />

                  {this.state.acceptInvite === false ?
                      <View>
                        <Text style={style.blueText}>Invites (1)</Text>
                        <View style={style.itemContainer}>
                        <TourInfoMockUp
                            tourName={`Jesper's Tournament`}
                            totalMatches={'8'}
                            winconText={'Most Top 5'}
                            numberOfPlayers={'1'}
                            maxPlayers={'10'}
                            owner={'J-Dawg'}
                        />
                          <View style={{
                            padding: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                          }}>
                            <TourButtonMedium
                              buttonTitle={'Accept invitation'}
                              buttonFunc={() => this.setState({ acceptInvite: true })}
                            />
                            <TourButtonMediumRed
                              buttonTitle={'Decline invitation'}
                            />
                          </View>
                        </View>
                      </View>
                      :
                      <Text style={style.blueText}>Invites (0)</Text>
                    }

                  <Text style={style.blueText}>Tournaments</Text>
                  {this.mapOngoingTours()}

                  {this.state.acceptInvite === true &&
                  <View style={style.itemContainer}>
                  <TourInfoMockUp
                      tourName={`Jesper's Tournament`}
                      totalMatches={'8'}
                      winconText={'Most Top 5'}
                      numberOfPlayers={'2'}
                      maxPlayers={'10'}
                      owner={'J-Dawg'}
                  />
                  <View style={{
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                  }}>
                    <TourButton
                      buttonTitle={'View tournament'}
                    />
                  </View>
                </View>
                  }
                </ScrollView>
              }
              <View style={{
                position: 'absolute',
                bottom: 80,
                right: 10
              }}>
                <RoundButton
                  id={'plus'}
                  buttonFunc={this.pressButton}
                  showing={this.state.show}
                />
              </View>


              {this.state.show === true &&

                // + button menu is displayed

                <View>
                  <View style={{
                    position: 'absolute',
                    bottom: 125,
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
                    bottom: 75,
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

          // Renders finished tab as active and displays its content

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
        ) : null
        }

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(TournamentsScreen);
