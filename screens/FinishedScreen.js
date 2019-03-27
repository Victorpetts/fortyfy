import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { Overlay } from 'react-native-elements';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';
import TourInfoSection from '../components/TourInfoSection.js';
import LeaderBoardPartic from '../components/ParticipantLB';
import TopThree from '../components/TopThree';
import { TourButtonMedium } from '../components/Buttons.js';


class FinishedScreen extends Component {

  state = {
    isVisible: true
  }

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
          card={user.card}
          navigation={this.props.navigation}
        />
      )

    });

  };

  render() {

    const tourId = this.props.navigation.getParam('tourId');
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const particArr = thisTour.participants;
    const showReward = thisTour.reward;
    const allUsers = this.props.users;
    const thisToursPartic = allUsers.filter(user => particArr.includes(user.id));

    return (
      <ScrollView style={style.mainContainer}>

        {showReward && this.state.isVisible &&
          <Overlay
            height= 'auto'
            width= '70%'
            isVisible={this.state.isVisible}
            overlayBackgroundColor={'black'}
            overlayStyle={{
              borderColor: Colors.appBlueColor,
              borderWidth: 2,
              borderRadius: 8,
              backgroundColor: Colors.appBackgroundColor
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
              <Text style={style.winnerText}>You Won!</Text>
              <TouchableOpacity onPress={() => this.setState({ isVisible: false })}>
                <Image
                  source={require('../assets/images/chest_closed.png')}
                  style={{ height: 100, width: 110, marginBottom: 15 }}
                />
              </TouchableOpacity>
              <TourButtonMedium
                buttonTitle={'Open the chest!'}
                buttonFunc={() => this.setState({ isVisible: false })}
              />
            </View>
          </Overlay>
        }

        <View style={style.itemContainer}>
          <TourInfoSection
            tourId={tourId}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          display: 'flex',
          flexWrap: 'wrap',
          paddingBottom: 30
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
