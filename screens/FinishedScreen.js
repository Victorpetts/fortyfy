import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';
import TourInfoSection from '../components/TourInfoSection.js';
import LeaderBoardPartic from '../components/ParticipantLB';


class FinishedScreen extends Component {

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
    }
  });

  mapLeaderboard(tourId) {
    return (
      <View>
        <LeaderBoardPartic
          id={"5"}
        />
        <LeaderBoardPartic
          id={"10"}
        />
      </View>
    )
  };

  render() {

    const tourId = this.props.navigation.getParam('tourId');
    const owner = this.props.navigation.getParam('owner')
    const thisTour = this.props.tours.find(tour => tour.id === tourId);

    return (
      <ScrollView style={style.mainContainer}>
        <View style={style.itemContainerNoBorder}>
          <TourInfoSection
            id={tourId}
            owner={owner}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Text style={style.subTitleText}>2:nd</Text>
            <View style={{ paddingVertical: 5 }}>
              <Image
                source={require('../assets/images/frame-green-w-badge.png')}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>91 points</Text>
          </View>

          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '30%',
            padding: '5%'
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <Image
                source={require('../assets/images/trophy.png')}
                style={{ height: 17, width: 17.5, marginRight: 5 }}
              />
              <Text style={style.subTitleText}>Winner</Text>
            </View>
            <View style={{ paddingVertical: 5 }}>
              <Image
                source={require('../assets/images/frame-gold-w-badge.png')}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>99 points</Text>
          </View>

          <View style={{
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Text style={style.subTitleText}>3:rd</Text>
            <View style={{ paddingVertical: 5 }}>
              <Image
                source={require('../assets/images/frame-silver.png')}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>84 points</Text>
          </View>
        </View>

        {this.mapLeaderboard(tourId)}

      </ScrollView>
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

// let particArr = thisTour.participants;
// let allUsers = this.props.users;
// let thisToursPartic = allUsers.filter(user => particArr.includes(user.id));
