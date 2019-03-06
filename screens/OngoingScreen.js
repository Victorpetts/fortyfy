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
import { TourButton } from '../components/Buttons.js';
import Participant from '../components/Participant.js';
import InviteList from '../components/InviteList';


class OngoingScreen extends Component {

  state = {
    isVisible: false,
    buttonToggle: false,
    isManage: false,
    isInvite: false,
    invite: true,
    checkedPartic: [],
    toKick: false
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

  mapPartic(totalMatches, thisTour) {

    let particArr = thisTour.participants;
    let allUsers = this.props.users;
    let thisToursPartic = allUsers.filter(user => particArr.includes(user.id));

    return thisToursPartic.map((partic) => {
      return (
        <Participant
          key={partic.id}
          name={partic.name}
          playedMatches={partic.matchStatistics[0].matchesPlayed}
          lvl={partic.lvl}
          totalMatches={totalMatches}
          checkBox={partic.checkBox}
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
    const totalMatches = thisTour.totalMatches;
    let winconText;

    switch (thisTour.wincon) {
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
            <Text style={style.paragraphText}>{thisTour.toDate}</Text>
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
                {this.mapPartic(totalMatches, thisTour)}
            </ScrollView>

            {this.state.buttonToggle === true && this.state.toKick === false &&
              <View style={style.buttonContainer}>
                <TourButton
                  buttonTitle={'CANCEL'}
                  buttonFunc={() => this.cancelFunc()}
                />
                <TourButton buttonTitle={'CONFIRM'}
                  buttonFunc={() => this.cancelFunc()}
                />
              </View>
            }
            {this.state.buttonToggle === true && this.state.toKick === true &&
              <View style={style.buttonContainer}>
                <TourButton
                  buttonTitle={'CANCEL'}
                  buttonFunc={() => this.cancelFunc()}
                />
                <TourButton buttonTitle={'CONFIRM'}
                    buttonFunc={() => this.confirmFunc()}
                  />
              </View>
            }
            {this.state.buttonToggle === false && this.state.toKick === false &&
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
                            style={{ padding: 5 }}
                        >
                            {this.state.isManage === true && (
                                <View style={style.buttonContainerCol}>
                                    <TourButton
                                        buttonTitle={'END TOURNAMENT'}
                                        buttonFunc={() => this.endTournament(thisToursName)}
                                    />
                                    <TourButton
                                        buttonTitle={'KICK PLAYERS'}
                                        buttonFunc={() => this.selectToKick()}
                                    />
                                    <TourButton
                                        buttonTitle={'PERMISSIONS'}
                                        buttonFunc={() => this.selectPermissions()}
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
    users: state.users
  };
};

export default connect(mapStateToProps, { selectPlayer, confirmPlayer, endTournament, deletePlayers })(OngoingScreen);
