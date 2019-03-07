import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlayer, confirmPlayer, endTournament } from '../actions/index.js';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import { Overlay } from 'react-native-elements';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';
import { TourButtonFullWidth, TourButtonSmallRed } from '../components/Buttons.js';
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

  mapPartic(totalMatches, thisTour) {
    let particArr = thisTour.participants;
    let allUsers = this.props.users;
    let thisToursPartic = allUsers.filter(user => particArr.includes(user.id));

    return thisToursPartic.map((player) => {
      return (
        <Participant
          key={player.id}
          id={partic.id}
          outsideFunc={this.outsideFunc}
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
  outsideFunc = (participant, checkedState) => {
    let oldArr = this.state.checkedPartic;

    {checkedState === false ?
      this.setState({
        checkedPartic: [...oldArr, participant]
      })
    :
      this.setState({
        checkedPartic: oldArr.filter(item => item !== participant)
      })
    }
  };

  toggleManage = () => {
    this.setState({
      isVisible: true,
      isManage: true
    })
  };

  toggleInvite = () => {
    this.setState({
      isVisible: true,
      isInvite: true
    })
  };

  selectToKick = () => {
    this.props.selectPlayer();

    this.setState({
      isVisible: false,
      buttonToggle: true,
      toKick: true
    })
  };

  selectPermissions = () => {
    this.props.selectPlayer();

    this.setState({
      isVisible: false,
      buttonToggle: true
    })
  };

  confirmFunc = () => {
    this.props.confirmPlayer();
    this.props.deletePlayers(this.state.checkedPartic);

    this.setState({
      buttonToggle: false,
      toKick: false
    })
  };

  cancelFunc = () => {
    this.props.confirmPlayer();

    this.setState({
      buttonToggle: false,
      toKick: false
    })
  };

  endTournament = (tour) => {
    this.props.endTournament(tour);
    this.props.navigation.navigate('Tournaments');
  };

  mapInviteList() {

    friendsList = this.props.users.filter(function(user){
      return user.friend === true;
    }).map(function({id,name, lvl, friend}){
      return {id, name, lvl, friend};
    });

    friendsList.sort((a, b) => b.lvl - a.lvl);

    return friendsList.map((user) => {
      return (
        <InviteList
          key={user.id}
          name={user.name}
          lvl={user.lvl}
          friend={user.friend}
          navigation={this.props.navigation}
          invite={this.state.invite}
        />
      )
    })
  };

  render() {

    const thisToursId = this.props.navigation.getParam('tourId');
    const thisTour = this.props.tours.find(thisTour => thisTour.id === thisToursId);
    const numberOfPartic = thisTour.participants.length;
    const thisToursName = thisTour.name);
    const thisMaxPartic = thisTour.players;
    const totalMatches = thisTour.totalMatches;
    let partic = this.props.navigation.getParam('partic');
    let tours;
    let winconText;
    let owner = this.props.navigation.getParam('owner');

    switch (thisTour.wincon) {
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
              titleMatches={totalMatches}
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

            {this.state.buttonToggle === true && this.state.toKick === false &&
              <View>
                <TourButtonFullWidth
                  buttonTitle={'Cancel'}
                  buttonFunc={() => this.cancelFunc()}
                />
                <TourButtonFullWidth
                  buttonTitle={'Confirm'}
                  buttonFunc={() => this.cancelFunc()}
                />
              </View>
            }
            {this.state.buttonToggle === true && this.state.toKick === true &&
              <View>
                <TourButtonFullWidth
                  buttonTitle={'Cancel'}
                  buttonFunc={() => this.cancelFunc()}
                />
                <TourButtonFullWidth
                  buttonTitle={'Confirm'}
                  buttonFunc={() => this.confirmFunc()}
                />
              </View>
            }
            {this.state.buttonToggle === false && this.state.toKick === false &&
              <View>
                <TourButtonFullWidth
                  buttonTitle={'Invite friends'}
                  buttonFunc={this.toggleInviteList}
                />
                <TourButtonFullWidth
                  buttonTitle={'Manage tournament'}
                  buttonFunc={this.toggleManage}
                />
              </View>
            }
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
    users: state.users
  };
};

export default connect(mapStateToProps, { selectPlayer, confirmPlayer, endTournament, deletePlayers })(OngoingScreen);
