import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';
import { FontAwesome } from '@expo/vector-icons';

class FinishedScreen extends Component {

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

  render() {
    const thisToursName = this.props.navigation.getParam('tourName');
    const filter = this.props.tours.find(thisTour => thisTour.name === thisToursName);
    const particArr = this.props.tours[filter.id].participants;
    const usersArr = this.props.users;
    let WinnersArr = [];

    for (let i in usersArr) {
      for (let j of particArr) {
        if (usersArr[i].id === j) {
        let user = usersArr.splice(usersArr[i], 1);
        WinnersArr.push(user);
        }
      }
    }

    WinnersArr.sort((a, b) => b.points - a.points);

    let winconText;

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
    }

    return (
      <View style={style.mainContainer}>
        <ScrollView>
          <Text style={style.headerText}>Finished on:</Text>
          <Text style={style.paragraphText}>{this.props.navigation.getParam('toDate')}</Text>
          <Text style={style.headerText}>Win condition:</Text>
          <Text style={style.paragraphText}>{winconText}</Text>
          <View style={{
            alignSelf: 'center'
          }}>
            <Text style={style.headerText}>{WinnersArr[0].name}</Text>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TopUserCard', {
            userName: WinnersArr[0].name})}
            >
              <FontAwesome name="file-photo-o" size={100} color="white" />
            </TouchableOpacity>
            <Text style={style.scoreText}> <FontAwesome name="trophy" size={20} color="gold" /> {WinnersArr[0].points}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '5%'
          }}>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text style={style.headerText}>{WinnersArr[1].name}</Text>
              <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TopUserCard', {
            userName: WinnersArr[1].name})}
            >
            <FontAwesome name="file-photo-o" size={75} color="white" />
              </TouchableOpacity>
              <Text style={style.scoreText}> <FontAwesome name="trophy" size={20} color="silver" /> {WinnersArr[1].points}</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text style={style.headerText}>{WinnersArr[2].name}</Text>
              <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TopUserCard', {
            userName: WinnersArr[2].name})}
            >
                <FontAwesome name="file-photo-o" size={75} color="white" />
              </TouchableOpacity>
              <Text style={style.scoreText}> <FontAwesome name="trophy" size={20} color="#cd7f32" /> {WinnersArr[2].points}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    tours: state.tours
  };
};

export default connect(mapStateToProps, null)(FinishedScreen);
