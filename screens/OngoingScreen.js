import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import { Overlay } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { selectPlayer, confirmPlayer, endTournament, deletePlayers } from '../actions/index.js';
import style from '../assets/Style.js';
import { TourButton } from '../components/TourButton.js';
import Participant from '../components/Participant.js';
import InviteList from '../components/InviteList';


class OngoingScreen extends Component {

  state = {
    isVisible: false,
    buttonToggle: false,
    isManage: false,
    isInvite: false,
    invite: true,
    checkedPartic: []
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('tourName'),
    headerTintColor: 'white',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: 'black',
      height: 90
    },
    headerTitleStyle: {
      color: 'yellow',
      fontSize: 24
    }
  });

  mapPartic(totalMatches) {
    return this.props.partic.map((participant) => {
      return (
        <Participant
          key={participant.name}
          name={participant.name}
          playedMatches={participant.playedMatches}
          totalMatches={totalMatches}
          checkBox={participant.checkBox}
          outsideFunc={this.outsideFunc}
        />
      );
    });
  };

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

  selectPlayer = () => {
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
      buttonToggle: false
    })
  };

  cancelFunc = () => {
    this.props.confirmPlayer();

    this.setState({
      buttonToggle: false
    })
  };

  endTournament = (tour) => {
    this.props.endTournament(tour);
    this.props.navigation.navigate('Tournaments');
  };

  mapInviteList() {

    friendsList = this.props.users.filter(function(item){
      return item.friend === true;
    }).map(function({name, level, friend}){
      return {name, level, friend};
    });

    friendsList.sort((a, b) => b.level - a.level);

    return friendsList.map((user) => {
      return (
        <InviteList
          key={user.name}
          name={user.name}
          friend={user.friend}
          navigation={this.props.navigation}
          invite={this.state.invite}
        />
      )
    })
  };

  render() {

    const thisToursName = this.props.navigation.getParam('tourName');
    const filter = this.props.tours.find(thisTour => thisTour.name === thisToursName);
    const totalMatches = filter.totalMatches;
    let partic = this.props.navigation.getParam('partic');
    let tours;
    let winconText;

    switch (filter.wincon) {
      case '1':
        winconText = 'Survived most minutes';
        break
      case '2':
        winconText = 'Most accumulated kills';
        break
      case '3':
        winconText = 'Most placements in top 5';
        break
      default:
        winconText = '';
        break
    };

      return (
          <View style={style.mainContainer}>
              <Text style={style.headerText}>Ending on:</Text>
              <Text style={style.paragraphText}>{this.props.navigation.getParam('toDate')}</Text>
              <Text style={style.headerText}>Win condition:</Text>
              <Text style={style.paragraphText}>{winconText}</Text>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
              }}>
                  <View style={{
                      flexDirection: 'row',
                      paddingLeft: '2%',
                  }}>
                      <FontAwesome name="user-circle" size={16} color="yellow" style={{ paddingTop: 5, marginRight: '5%' }} />
                      <Text style={style.smallText}>Players</Text>
                  </View>
                  <View style={{
                      flexDirection: 'row'
                  }}>
                      <Text style={style.smallText}>Matches</Text>
                      <FontAwesome name="gamepad" size={16} color="yellow" style={{ paddingTop: 5, marginLeft: '5%' }} />
                  </View>
              </View>
              <ScrollView style={{ height: '100%', marginBottom: '5%' }}>
                  {this.mapPartic(totalMatches)}
              </ScrollView>
              {this.state.buttonToggle === true ?
                  <View style={style.buttonContainer}>
                      <TourButton
                          buttonTitle={'CANCEL'}
                          buttonFunc={() => this.cancelFunc(partic)}
                      />
                      <TourButton buttonTitle={'CONFIRM'}
                          buttonFunc={() => this.confirmFunc(partic)}
                      />
                  </View>
                  :
                  <View style={style.buttonContainer}>
                      <TourButton
                          buttonTitle={'MANAGE TOURNAMENT'}
                          buttonFunc={this.toggleManage} />
                      <TourButton buttonTitle={'INVITE FRIENDS'}
                          buttonFunc={this.toggleInvite} />
                  </View>
              }
              {this.state.isVisible && (
                  <Overlay
                      height='auto'
                      isVisible={this.state.isVisible == true}
                      onBackdropPress={() => this.setState({
                          isVisible: false,
                          isManage: false,
                          isInvite: false
                      })}
                      overlayBackgroundColor={'black'}
                      overlayStyle={{
                          borderColor: 'yellow',
                          borderWidth: 2
                      }}
                  >
                      <View>
                          <ScrollView
                              contentContainerStyle={{
                                  flexDirection: 'column',
                                  justifyContent: 'space-between'
                              }}
                              style={{
                                  padding: 5
                              }}
                          >
                              {this.state.isManage === true && (
                                  <View style={style.buttonContainerCol}>
                                      <TourButton
                                          buttonTitle={'END TOURNAMENT'}
                                          buttonFunc={() => this.endTournament(thisToursName)}
                                      />
                                      <TourButton
                                          buttonTitle={'KICK PLAYERS'}
                                          buttonFunc={() => this.selectPlayer(partic)}
                                      />
                                      <TourButton
                                          buttonTitle={'PERMISSIONS'}
                                          buttonFunc={() => this.selectPlayer(partic)}
                                      />
                                  </View>
                              )}
                              {this.state.isInvite === true && (
                                  <View>
                                      {this.mapInviteList()}
                                  </View>
                              )}
                          </ScrollView>
                      </View>
                  </Overlay>
              )}
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

export default connect(mapStateToProps, { selectPlayer, confirmPlayer, endTournament, deletePlayers })(OngoingScreen);
