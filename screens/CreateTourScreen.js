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
import { TourButtonFullWidth } from '../components/Buttons.js';
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
    wincon: "1",
    totalMatches: '',
    fromDate: '',
    toDate: '',
    isVisible: false
  };

  createTourFunc = () => {
    if (this.state.name !== '') {
      let newTour = {
        'id': 4,
        'name': this.state.name,
        'participants': ["11"],
        'players': this.state.players,
        'wincon': this.state.wincon,
        'totalMatches': this.state.totalMatches,
        'finished': false,
        'fromDate': this.state.fromDate,
        'toDate': this.state.toDate,
        'owner': "11"
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

  render() {

    const bla = this.props.tours.length;
    const blah = bla + 1;

    const { name, players, wincon, totalMatches } = this.state

    return (
      <ScrollView style={style.mainContainer}>
        <ScrollView style={style.inputFieldContainer}>
          <Text style={style.inputFieldText}>Tournament name</Text>
          <TextInput
            id='name'
            value={name}
            style={style.inputField}
            placeholder={'Choose a tournament name'}
            maxLength={20}
            onChangeText={(event) => this.setState({ name: event })}
            onSubmitEditing={Keyboard.dismiss}
          />
          <Text style={style.inputFieldText}>Max number of players</Text>
          <TextInput
            id='players'
            value={players}
            style={style.inputField}
            placeholder={'2-100 players'}
            maxLength={3}
            onChangeText={(event) => this.setState({ players: event })}
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
          <Text style={style.inputFieldText}>Time duration</Text>
          <View style={{
            flexDirection: 'row',
            marginVertical: 10
          }}>
            <DatePicker
              style={{ width: 170 }}
              date={this.state.fromDate}
              is24Hour={true}
              mode="datetime"
              placeholder="select date"
              format="Do MM, HH:mm"
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
                  marginLeft: 35,
                  borderRadius: 5,
                  borderColor: Colors.appBlueColor,
                  backgroundColor: 'white',
                  height: 'auto',
                  padding: 5
                },
                dateText: {
                  color: Colors.appBlackColor,
                  fontFamily: 'alergia-normal-light',
                  fontSize: 15
                }
              }}
              onDateChange={(date) => { this.setState({ fromDate: date }) }}
            />
            <DatePicker
              showIcon={false}
              style={{ width: 150 }}
              date={this.state.toDate}
              is24Hour={true}
              mode="datetime"
              placeholder="select date"
              format="Do MM, HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              textStyle={{ color: Colors.appBlackColor }}
              customStyles={{
                dateInput: {
                  marginLeft: 10,
                  borderRadius: 5,
                  borderColor: Colors.appBlueColor,
                  backgroundColor: 'white',
                  height: 'auto',
                  padding: 5
                },
                dateText: {
                  color: Colors.appBlackColor,
                  fontFamily: 'alergia-normal-light',
                  fontSize: 15
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ toDate: date }) }}
            />
          </View>

          <Text style={style.inputFieldText}>Victory condition</Text>
          <View style={style.pickerField}>
            <Picker
              selectedValue={this.state.wincon}
              onValueChange={(itemValue) => this.setState({ wincon: itemValue })}
            >
              <Picker.Item label="Survived longest" value="1" />
              <Picker.Item label="Most kills" value="2" />
              <Picker.Item label="Most top 5" value="3" />
            </Picker>
          </View>

          <Text style={style.inputFieldText}>Number of matches</Text>
          <TextInput
            id='totalMatches'
            value={totalMatches}
            style={style.inputField}
            placeholder={'2-100 matches'}
            maxLength={3}
            onChangeText={(event) => this.setState({ totalMatches: event })}
            onSubmitEditing={Keyboard.dismiss}
            keyboardType='numeric'
          />
          <View style={style.buttonContainerFullCol}>
            <TourButtonFullWidth
              buttonTitle={'Invite friends'}
              buttonFunc={this.toggleOverlay}
            />
            <TourButtonFullWidth
              buttonTitle={'Create tournament!'}
              buttonFunc={this.createTourFunc}
            />
          </View>
        </ScrollView>
        {this.state.isVisible &&
          <Overlay
            height='90%'
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
            >
              <View>
                {this.mapInviteList()}
              </View>
            </ScrollView>
            <View style={{ padding: 5 }} />
              <TourButtonFullWidth
                buttonTitle={'Done'}
                buttonFunc={this.toggleOverlay}
              />
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
