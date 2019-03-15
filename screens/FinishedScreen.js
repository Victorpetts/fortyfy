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
      );

    });

  };

  render() {

    const tourId = this.props.navigation.getParam('tourId');
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const particArr = thisTour.participants;
    const allUsers = this.props.users;
    const thisToursPartic = allUsers.filter(user => particArr.includes(user.id));

    // const list = thesePartic.slice(3);
    // const winners = thesePartic.slice(0, 3);

    // const first = winners[0];
    // const firstStats = first.matchStatistics.filter(stats => stats.matchId === tourId);
    // const firstPoints = firstStats[0].points;

    // const arrr = [3, 5, 1];
    // arrr.sort((a, b) => b - a);
    // console.log(arrr);

    return (
      <ScrollView style={style.mainContainer}>
        <View style={style.itemContainerNoBorder}>
          <TourInfoSection
            tourId={tourId}
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
            <Image
              source={require('../assets/images/silver.png')}
              style={{ height: 20, width: 50 }}
            />
            <Text style={style.subTitleText}>Michirisu</Text>
            <View style={{ paddingVertical: 3 }}>
              <Image
                source={require('../assets/images/frame-green-w-badge.png')}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>79 points</Text>
          </View>

          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '20%',
            paddingHorizontal: '4%'
          }}>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Image
                source={require('../assets/images/gold.png')}
                style={{ height: 55, width: 90 }}
              />
              <Text style={style.subTitleText}>Vicky</Text>
            </View>
            <View style={{ paddingVertical: 3 }}>
              <Image
                source={require('../assets/images/frame-gold-w-badge.png')}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>92 points</Text>
          </View>

          <View style={{
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Image
              source={require('../assets/images/bronze.png')}
              style={{ height: 20, width: 50 }}
            />
            <Text style={style.subTitleText}>J-Dawg</Text>
            <View style={{ paddingVertical: 3 }}>
              <Image
                source={require('../assets/images/frame-silver.png')}
                style={{ height: 158, width: 106 }}
              />
            </View>
            <Text style={style.subTitleText}>70 points</Text>
          </View>
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
