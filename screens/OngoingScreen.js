import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';


import { Overlay } from 'react-native-elements';

import { selectPlayer, confirmPlayer, endTournament } from '../actions/index.js';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';

import { TourButtonFullWidth, TourButtonSmallRed } from '../components/TourButton.js';
import { Participant } from '../components/Participant.js';
import InviteList from '../components/InviteList';
import TourInfoSection from '../components/TourInfoSection.js';

class OngoingScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tournaments',
    headerTintColor: 'white',
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
      width: '75%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    },
    headerRight: (
      <TouchableOpacity
        onPress={navigation.getParam('toggleInfoWindow')}
      >
        <Image
          source={require('../assets/images/information.png')}
          style={{ height: 25, width: 25, marginRight: 15 }}
        />
      </TouchableOpacity>
    )
  });


  state = {
    isVisible: false,
    buttonToggle: false,
    invite: true,
    isInfoWindow: false,
    isInviteList: false

  }
  componentDidMount() {
    this.props.navigation.setParams({ toggleInfoWindow: this.toggleInfoWindow })
  };

  mapPartic(totalMatches) {
    return this.props.partic.map((player) => {
      return (
        <Participant
          key={player.name}
          name={player.name}
          playedMatches={player.playedMatches}
          totalMatches={totalMatches}
          checkBox={player.checkBox}

        />
      );
    });
  };

  selectPlayer = (partic) => {
    this.props.selectPlayer(partic);
    this.setState({
      isVisible: false,
      buttonToggle: true
    })
  };

  deletePlayer = (partic) => {
    console.log('clicked!');
    selectPlayer(partic);
    this.props.deletePlayer(partic);
  };

  confirmPlayer = (partic) => {
    this.props.confirmPlayer(partic);
    this.setState({
      buttonToggle: false
    })
  };

  endTournament = (tour) => {
    this.props.endTournament(tour);
    this.props.navigation.navigate('Tournaments');
  };

  mapInviteList() {

    friendsList = this.props.users.filter(function (item) {
      return item.friend === true;
    }).map(function ({ name, level, friend }) {
      return { name, level, friend };
    });

    friendsList.sort((a, b) => b.level - a.level);

    return friendsList.map((user) => {
      return (
        <InviteList
          key={user.name}
          name={user.name}
          level={user.level}
          friend={user.friend}
          navigation={this.props.navigation}
          invite={this.state.invite}
        />
      )
    })
  };

  toggleOverlay = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      isInviteList: !this.state.isInviteList,
      isInfoWindow: !this.state.isInfoWindow
    })
  };

  toggleInviteList = () => {
    this.setState({
      isVisible: true,
      isInviteList: true
    })
  };

  toggleInfoWindow = () => {
    this.setState({
      isVisible: true,
      isInfoWindow: true
    })
  };

  render() {

    const numberOfPartic = this.props.partic.length;
    const thisToursName = this.props.navigation.getParam('tourName');
    const thisToursMatches = this.props.navigation.getParam('totalMatches');
    const thisMaxPartic = this.props.navigation.getParam('numbPlayers');
    const filter = this.props.tours.find(thisTour => thisTour.name === thisToursName);
    const totalMatches = filter.totalMatches;
    let partic = this.props.navigation.getParam('partic');
    let tours;
    let winconText;
    let owner = this.props.navigation.getParam('owner');

    switch (filter.wincon) {
      case '1':
        winconText = 'Survived longest';
        break
      case '2':
        winconText = 'Most kills';
        break
      case '3':
        winconText = 'Most top 5';
        break
      default:
        winconText = '';
        break
    };

    return (
      <View>
        <ScrollView style={style.mainContainer}>
          <View style={style.itemContainer}>
            <TourInfoSection
              titleName={thisToursName}
              titleMatches={thisToursMatches}
              tourInfoWincon={winconText}
              tourInfoPartic={numberOfPartic}
              tourInfoMaxPartic={thisMaxPartic}
              owner={owner}
            />
          </View>
          <View style={{
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            paddingHorizontal: 10,
            height: '20%'
          }}>
            <TourButtonFullWidth
              buttonTitle={'Invite friends'}
              buttonFunc={this.toggleInviteList}
            />
            <TourButtonFullWidth
              buttonTitle={'Handle tournament'}
            />
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
          }}>
            <Text style={style.subTitleText}>Player</Text>
            <Text style={style.subTitleText}>Matches played</Text>
          </View>
          <View style={{ paddingBottom: '15%' }}>
            {this.mapPartic(totalMatches)}
          </View>

          {this.state.isVisible &&
            <Overlay
              height='auto'
              width='90%'
              isVisible={this.state.isVisible == true}
              onBackdropPress={() => this.setState({
                isVisible: false,
                isFriendList: false,
                isInfoWindow: false
              })}
              overlayBackgroundColor={'black'}
              overlayStyle={{
                borderColor: Colors.appBlueColor,
                borderWidth: 2,
                borderRadius: 2.5,
                backgroundColor: Colors.appBackgroundColor
              }}
            >
              <ScrollView
                contentContainerStyle={{
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                style={{
                  padding: 5
                }}
              >

                {this.state.isInviteList === true &&
                  <View>
                    <View>
                      {this.mapInviteList()}
                    </View>
                    <TourButtonFullWidth
                      buttonTitle={'Done'}
                      buttonFunc={this.toggleOverlay}
                    />
                  </View>
                }

                {this.state.isInfoWindow === true &&
                  <View>
                    <Text style={style.subTitleText}>Tournament rules</Text>
                    <Text style={style.paragraphText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Text>
                    <View style={{ paddingBottom: '50%' }} />
                    <View style={{ alignSelf: 'center' }}>
                      <TourButtonSmallRed
                        buttonTitle={'Close'}
                        buttonFunc={this.toggleOverlay}
                      />
                    </View>
                  </View>
                }

              </ScrollView>
            </Overlay>
          }

        </ScrollView>
      </View>
    )

  };
};

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    partic: state.partic,
    users: state.users
  };
};

export default connect(mapStateToProps, { selectPlayer, confirmPlayer, endTournament })(OngoingScreen);
