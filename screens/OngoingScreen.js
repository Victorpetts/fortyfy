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

  mapInviteList() {

    let friendsList = this.props.users.filter(user => user.status === "friend");

    friendsList.sort((a, b) => b.lvl - a.lvl);

    return friendsList.map((user) => {
      return (
        <InviteList
          key={user.id}
          id={user.id}
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
              buttonTitle={'Manage tournament'}
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
          <View style={{ paddingBottom: 105 }}>
            {this.mapPartic(thisTour)}
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
                style={{ padding: 5 }}
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
    users: state.users,
    tours: state.tours
  };
};

export default connect(mapStateToProps, { selectPlayer, confirmPlayer, endTournament, deletePlayers })(OngoingScreen);
