import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlayer, confirmPlayer, endTournament, deletePlayers } from '../actions/index.js';
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
import Participant from '../components/Participant.js';
import ParticipantCard from '../components/ParticipantCards.js';
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
          source={require('../assets/images/menuicons/information.png')}
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
    isInviteList: false,
    activeColor1: Colors.appBlueColor,
    activeColor2: Colors.appWhiteColor
  }

  componentDidMount() {
    this.props.navigation.setParams({ toggleInfoWindow: this.toggleInfoWindow })
  };

  mapPartic(thisTour) {

    const allUsers = this.props.users;
    const particArr = thisTour.participants;
    let thisToursPartic = allUsers.filter(user => particArr.includes(user.id));

    thisToursPartic.sort((a, b) => b.lvl - a.lvl);

    return thisToursPartic.map((user) => {
      return (
        <Participant
          key={user.id}
          userId={user.id}
          tourId={thisTour.id}
        />
      );
    });
  };

  mapParticCard(thisTour) {

    const allUsers = this.props.users;
    const particArr = thisTour.participants;
    let thisToursPartic = allUsers.filter(user => particArr.includes(user.id));

    thisToursPartic.sort((a, b) => b.lvl - a.lvl);

    return thisToursPartic.map((user) => {
      return (
        <ParticipantCard
          key={user.id}
          userId={user.id}
          tourId={thisTour.id}
          card={user.card}
          navigation={this.props.navigation}
        />
      );
    });
  };

  mapInviteList() {

    let friendsList = this.props.users.filter(user => user.status === "friend");

    friendsList.sort((a, b) => b.lvl - a.lvl);

    return friendsList.map((user) => {
      return (
        <InviteList
          key={user.id}
          id={user.id}
          card={user.card}
        />
      )
    })
  };

  // endTournament = (tour) => {
  //   this.props.endTournament(tour);
  //   this.props.navigation.navigate('Tournaments');
  // };

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
      isInviteList: true,
      isInfoWindow: false
    })
  };

  toggleInfoWindow = () => {
    this.setState({
      isVisible: true,
      isInfoWindow: true,
      isInviteList: false
    })
  };

  // selectPlayer = (partic) => {
  //   this.props.selectPlayer(partic);
  //   this.setState({
  //     isVisible: false,
  //     buttonToggle: true
  //   })
  // };

  // outsideFunc = (participant, checkedState) => {
  //   let oldArr = this.state.checkedPartic;
  //
  //   {checkedState === false ?
  //     this.setState({
  //       checkedPartic: [...oldArr, participant]
  //     })
  //   :
  //     this.setState({
  //       checkedPartic: oldArr.filter(item => item !== participant)
  //     })
  //   }
  // };

  // toggleManage = () => {
  //   this.setState({
  //     isVisible: true,
  //     isManage: true
  //   })
  // };

  // kickFunc = () => {
  //   this.props.confirmPlayer();
  //   this.props.deletePlayers(this.state.checkedPartic);
  //
  //   this.setState({
  //     buttonToggle: false,
  //     toKick: false
  //   })
  // };

  // cancelFunc = () => {
  //   this.props.confirmPlayer();
  //
  //   this.setState({
  //     buttonToggle: false,
  //     toKick: false
  //   })
  // };

  render() {

    const tourId = this.props.navigation.getParam('tourId');
    const thisTour = this.props.tours.find(tour => tour.id === tourId);

    return (
      <View>
        <ScrollView style={style.mainContainer}>
          <View style={style.itemContainer}>
            <TourInfoSection
              tourId={tourId}
            />
          </View>

          {thisTour.owner === "11" &&
            <View style={{ padding: 10 }}>
              <View style={style.buttonContainerFullCol}>
                <TourButtonFullWidth
                  buttonTitle={'Invite friends'}
                  buttonFunc={this.toggleInviteList}
                />
                <TourButtonFullWidth
                  buttonTitle={'Manage tournament'}
                />
              </View>
            </View>
          }
          <View style={{ justifyContent: 'flex-end', flexDirection: 'row', paddingRight: 10 }}>
            <TouchableOpacity
              style={{
                height: 25,
                width: 37,
                backgroundColor: this.state.activeColor1,
                borderRadius: 2.5
              }}
              onPress={() => this.setState({ activeColor1: Colors.appBlueColor, activeColor2: Colors.appWhiteColor })}
            >
              <Image
                source={require('../assets/images/menuicons/dashes.png')}
                style={{ height: 12.5, width: 15, alignSelf: 'center', marginTop: 6 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 25,
                width: 37,
                backgroundColor: this.state.activeColor2,
                borderRadius: 2.5
              }}
              onPress={() => this.setState({ activeColor2: Colors.appBlueColor, activeColor1: Colors.appWhiteColor })}
            >
              <Image
                source={require('../assets/images/menuicons/squares.png')}
                style={{ height: 14.5, width: 15, alignSelf: 'center', marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>
          {this.state.activeColor1 === Colors.appBlueColor &&
            <View>
              <View style={style.subTitleContainer}>
                <Text style={style.subTitleText}>Players</Text>
                <Text style={style.subTitleText}>Matches played</Text>
              </View>
              {this.mapPartic(thisTour)}
            </View>
          }
          {this.state.activeColor2 === Colors.appBlueColor &&
            <View>
              <View style={style.subTitleContainer}>
                <Text style={style.subTitleText}>Players</Text>
              </View>
              <View style={style.friendsListContainer}>
                {this.mapParticCard(thisTour)}
              </View>
            </View>
          }

          {this.state.isVisible && this.state.isInviteList === true &&
            <Overlay
              height='90%'
              width='90%'
              isVisible={this.state.isVisible == true}
              onBackdropPress={() => this.setState({
                isVisible: false,
                isInviteList: false,
              })}
              overlayBackgroundColor={'black'}
              overlayStyle={{
                borderColor: Colors.appBlueColor,
                borderWidth: 2,
                borderRadius: 2.5,
                backgroundColor: Colors.appBackgroundColor
              }}
            >
              <View style={{ height: '100%' }}>
                <ScrollView
                  contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {this.mapInviteList()}
                </ScrollView>

                <View style={{ padding: 5 }} />
                <TourButtonFullWidth
                  buttonTitle={'Done'}
                  buttonFunc={this.toggleOverlay}
                />
              </View>
            </Overlay>
          }

          {this.state.isVisible && this.state.isInfoWindow === true &&
            <Overlay
              height='auto'
              width='90%'
              isVisible={this.state.isVisible == true}
              onBackdropPress={() => this.setState({
                isVisible: false,
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
            </Overlay>
          }

        </ScrollView>
      </View>
    )

  };
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    tours: state.tours
  };
};

export default connect(mapStateToProps, { selectPlayer, confirmPlayer, endTournament, deletePlayers })(OngoingScreen);
