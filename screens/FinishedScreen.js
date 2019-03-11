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
import TopThree from '../components/TopThree';


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

  mapLeaderboard(thisToursPartic, tourId) {

    thisToursPartic.sort((a, b) => b.currentPoints - a.currentPoints);

    const theRest = thisToursPartic.slice(3);
    const topThree = thisToursPartic.slice(0, 3);

    return theRest.map((user, index) => {
      userStats = user.matchStatistics.filter(stats => stats.matchId === tourId);
      userPoints = userStats[0].points;

      return (
        <LeaderBoardPartic
          key={user.id}
          userId={user.id}
          tourId={tourId}
          userPoints={userPoints}
          placement={index + 4}
        />
      )

    });

  };

  mapTop(thisToursPartic, tourId) {

    thisToursPartic.sort((a, b) => b.currentPoints - a.currentPoints);

    const theRest = thisToursPartic.slice(3);
    const topThree = thisToursPartic.slice(0, 3);

    return topThree.map((user, index) => {
      userStats = user.matchStatistics.filter(stats => stats.matchId === tourId);
      userPoints = userStats[0].points;

      return (
        <TopThree
          key={user.id}
          userId={user.id}
          tourId={tourId}
          userPoints={userPoints}
          placement={index + 1}
        />
      )

    });

  };

  render() {

    const tourId = this.props.navigation.getParam('tourId');
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const particArr = thisTour.participants;
    const allUsers = this.props.users;
    const thisToursPartic = allUsers.filter(user => particArr.includes(user.id));

    // const topThree = thisToursPartic.slice(0, 3);

    // const first = topThree[0];
    // const firstStats = first.matchStatistics.filter(stats => stats.matchId === tourId);
    // const firstPoints = firstStats[0].points;

    return (
      <ScrollView style={style.mainContainer}>
        <View style={style.itemContainer}>
          <TourInfoSection
            tourId={tourId}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center'
        }}>
          {this.mapTop(thisToursPartic, tourId)}
        </View>

        {this.mapLeaderboard(thisToursPartic, tourId)}

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
