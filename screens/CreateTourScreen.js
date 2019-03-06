import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTour } from '../actions';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Picker,
  ScrollView
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import { Overlay } from 'react-native-elements';

import { TourButtonFullWidth } from '../components/TourButton.js';
import InviteList from '../components/InviteList.js';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';


class CreateTourScreen extends Component {


  static navigationOptions = {
    title: 'Create Tournament',
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
    }
  };

  state = {
    name: '',
    players: '',
    wincon: '',
    totalMatches: '',
    fromDate: '',
    toDate: '',
    isVisible: false
  };

  createTour = () => {
    if (this.state.name !== '') {
      let newTour = {
        'name': this.state.name,
        'players': this.state.players,
        'wincon': this.state.wincon,
        'totalMatches': this.state.totalMatches,
        'finished': false,
        'fromDate': this.state.fromDate,
        'toDate': this.state.toDate
      }
      this.props.createTour(newTour);
      this.props.navigation.navigate('Tournaments');
    }
  };

  toggleOverlay = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
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

  render() {

    const { name, players, wincon, totalMatches } = this.state

    return (
      <ScrollView style={style.mainContainer}>
        <ScrollView style={style.inputFieldContainer}>
          <Text style={style.inputFieldText}>Tournament name</Text>
          <TextInput
            id='name'
            value={name}
            style={style.inputField}
            placeholder={'Enter a tournament name'}
            maxLength={20}
            onChangeText={(event) =>
              this.setState({ name: event })}
            onSubmitEditing={Keyboard.dismiss}
          />
          <Text style={style.inputFieldText}>Max number of players</Text>
          <TextInput
            id='players'
            value={players}
            style={style.inputField}
            placeholder={'Enter a number between 5-100'}
            maxLength={3}
            onChangeText={(event) =>
              this.setState({ players: event })}
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
          <Text style={style.inputFieldText}>Time duration</Text>
          <View style={{
            flexDirection: 'row',
            marginVertical: 10
          }}>
            <DatePicker
              style={{ width: 150 }}
              date={this.state.fromDate}
              is24Hour={true}
              mode="datetime"
              placeholder="select date"
              format="MMMM Do YYYY, HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36,
                },
                dateText: {
                  marginLeft: '5%',
                  marginRight: '5%',
                  width: '90%',
                  color: 'white'
                }
              }}
              onDateChange={(date) => { this.setState({ fromDate: date }), console.log('From date:', date) }}
            />
            <DatePicker
              showIcon={false}
              style={{ width: 150 }}
              date={this.state.toDate}
              is24Hour={true}
              mode="datetime"
              placeholder="select date"
              format="MMMM Do YYYY, HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              textStyle={{ color: 'white' }}
              customStyles={{
                dateInput: {
                  marginLeft: 36,
                },
                dateText: {
                  marginLeft: '5%',
                  marginRight: '5%',
                  width: '90%',
                  color: 'white'
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ toDate: date }), console.log('To date:', date) }}
            />
          </View>
          <Text style={style.inputFieldText}>Victory conditions</Text>
          <View style={style.pickerField}>
            <Picker
              selectedValue={this.state.wincon}
              onValueChange={(itemValue) => this.setState({ wincon: itemValue })}
            >
              <Picker.Item label="Survived most minutes" value="1" />
              <Picker.Item label="Most accumulated kills" value="2" />
              <Picker.Item label="Most placements in top 5" value="3" />
            </Picker>
          </View>

          <Text style={style.inputFieldText}>Number of matches</Text>
          <TextInput
            id='totalMatches'
            value={totalMatches}
            style={style.inputField}
            placeholder={'Enter a number between 5-100'}
            maxLength={3}
            onChangeText={(event) =>
              this.setState({ totalMatches: event })
            }
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
          <View style={{
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '25%'
          }}>
            <TourButtonFullWidth
              buttonTitle={'Invite friends'}
              buttonFunc={this.toggleOverlay}
            />
            <TourButtonFullWidth
              buttonTitle={'Handle tournament'}
              buttonFunc={this.createTour}
            />
          </View>
        </ScrollView>
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
              <View>
                {this.mapInviteList()}
              </View>
              <TourButtonFullWidth
                buttonTitle={'Done'}
                buttonFunc={this.toggleOverlay}
              />
            </ScrollView>
          </Overlay>
        }
      </ScrollView>
    )
  };
};


const mapStateToProps = (state) => {
  return { 
    tours: state.tours,
    users: state.users
  };
};

export default connect(mapStateToProps, { createTour })(CreateTourScreen);
