import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTour } from '../actions';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';

import { RoundButton, RoundButtonSmall, TourButtonMedium, TourButtonMediumRed } from '../components/Buttons.js';
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
    inviteClicked: false
  }

  inviteTour = () => {
    let newTour = {
      'id': 6,
      'name': "Jesper's Tournament",
      'participants': ["4", "11"],
      'players': "10",
      'wincon': "3",
      'totalMatches': "8",
      'finished': false,
      'fromDate': "12th of March 13:37",
      'toDate': "15th of March 18:00",
      'owner': "4"
    }
    this.props.createTour(newTour);
    this.setState({ inviteClicked: true })
  };

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

  mapSponsoredTours() {

    let allTours = this.props.tours;
    let sponsoredTours = allTours.filter(tour => tour.finished === false && tour.sponsor === true);

    return sponsoredTours.map((tour) => {
      return (
        <SponsoredTours
          key={tour.id}
          id={tour.id}
          navigation={this.props.navigation}
        />
      )
    })
  }

  mapOngoingTours() {

    let allTours = this.props.tours;
    let ongoingTours = allTours.filter(tour => tour.finished === false && !tour.sponsor);

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
            <View style={style.tabBackground}>
              <View style={style.enabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleOngoing()}
                  accessible={true}
                  accessibilityLabel={'Button - Show ongoing tournaments'}
                >
                  <Text style={style.enabledTabText}>Ongoing</Text>
                </TouchableOpacity>
              </View>
              <View style={style.disabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleFinished()}
                  accessible={true}
                  accessibilityLabel={'Button - Show finished tournaments'}
                >
                  <Text style={style.disabledTabText}>Finished</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingBottom: 100 }}>

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

                      <Text style={style.goldenText}>Sponsored</Text>
                      {this.mapSponsoredTours()}

                      <View style={style.divider} />

                      {this.state.inviteClicked === false ?
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
                                buttonFunc={this.inviteTour}
                              />
                              <TourButtonMediumRed
                                buttonTitle={'Decline invitation'}
                                buttonFunc={() => this.setState({ inviteClicked: true })}
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

                  <Text style={style.goldenText}>Sponsored</Text>
                  {this.mapSponsoredTours()}

                  <View style={style.divider} />

                  {this.state.inviteClicked === false ?
                    <View>
                      <Text style={style.blueText}>Invites (1)</Text>
                      <View style={style.itemContainer}>
                        <TourInfoMockUp
                          tourName={`Jesper's Tournament`}
                          totalMatches={'8'}
                          winconText={'Most Top 5'}
                          numberOfPlayers={'0'}
                          maxPlayers={'10'}
                          owner={'J-Dawg'}
                        />
                        <View style={style.doubleButtonContainer}>
                          <TourButtonMedium
                            buttonTitle={'Accept invitation'}
                            buttonFunc={this.inviteTour}
                          />
                          <TourButtonMediumRed
                            buttonTitle={'Decline invitation'}
                            buttonFunc={() => this.setState({ inviteClicked: true })}
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
              }
              <View style={style.roundButtonPos}>
                <RoundButton
                  id={'plus'}
                  buttonFunc={this.pressButton}
                  showing={this.state.show}
                />
              </View>


              {this.state.show === true &&

                // + button menu is displayed

                <View>
                  <View style={style.buttonMenuItem2}>
                    <Text style={style.buttonMediumText}>Create tournament</Text>
                    <RoundButtonSmall
                      buttonImg={require('../assets/images/menuicons/plus.png')}
                      buttonFunc={() => navigate('TourCreate')}
                    />
                  </View>
                  <View style={style.buttonMenuItem1}>
                    <Text style={style.buttonMediumText}>Find tournament</Text>
                    <RoundButtonSmall
                      buttonImg={require('../assets/images/menuicons/search.png')}
                    />
                  </View>
                </View>
              }
            </View>
          </View>
        ) : this.state.toggleFinished === true ? (

          // Renders finished tab as active and displays its content

          <View>
            <View style={style.tabBackground}>
              <View style={style.disabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleOngoing()}
                  accessible={true}
                  accessibilityLabel={'Button - Show ongoing tournaments'}
                >
                  <Text style={style.disabledTabText}>Ongoing</Text>
                </TouchableOpacity>
              </View>
              <View style={style.enabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleFinished()}
                  accessible={true}
                  accessibilityLabel={'Button - Show finished tournaments'}
                >
                  <Text style={style.enabledTabText}>Finished</Text>
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

export default connect(mapStateToProps, { createTour })(TournamentsScreen);
