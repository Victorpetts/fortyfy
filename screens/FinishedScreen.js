import React, { Component } from 'react';
import { connect } from 'react-redux';
import { obtainCoins } from '../actions';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing
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
    isVisible: true,
    animatedExplosion: new Animated.Value(0),
    animatedCoin: new Animated.Value(0),
    showCoin: false
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

    Animated.loop(
      Animated.timing(
        this.state.animatedExplosion,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      )
    ).start()

    const spin = this.state.animatedExplosion.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const rewardToClaim = this.props.navigation.getParam('reward');

    const tourId = this.props.navigation.getParam('tourId');
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const particArr = thisTour.participants;
    const showReward = thisTour.reward;
    const allUsers = this.props.users;
    const thisToursPartic = allUsers.filter(user => particArr.includes(user.id));
    const myAcc = this.props.users[10]
    const coins = myAcc.coins

    animateCoins = () => {
      this.setState({ showCoin: true })
      Animated.timing(this.state.animatedCoin, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start()
    }

    const scale = this.state.animatedCoin.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    getCoins = () => {
      this.props.obtainCoins(1000)
      this.setState({ isVisible: false })

    }


    return (
      <ScrollView style={style.mainContainer}>
        <View style={style.coinContainer}>
        <Text style={style.tourInfoTitle}>{coins} Coins</Text>
          <Image
            source={require('../assets/images/coin.png')}
            style={{ height: 20, alignSelf: 'center' }}
            resizeMode={'contain'}
          />
        </View>

        {showReward && rewardToClaim &&
          <Overlay
            height='auto'
            width='70%'
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
              {this.state.showCoin ?
                <Animated.View
                  style={{
                    alignItems: 'center',
                    marginBottom: 10,
                    transform: [{
                      scale: scale
                    }]
                  }}>
                  <Image
                    source={require('../assets/images/coins.png')}
                  />
                  <Text style={style.blueText}>1000 coins</Text>
                </Animated.View>
                :
                <TouchableOpacity onPress={animateCoins}>
                  <Animated.Image
                    source={require('../assets/images/explosion_effect.png')}
                    style={{
                      height: 200,
                      width: 210,
                      transform: [{ rotate: spin }]
                    }}
                  />
                  <Image
                    source={require('../assets/images/chest_closed.png')}
                    style={{ height: 100, width: 110, position: 'absolute', marginTop: 50, alignSelf: 'center' }}
                  />
                </TouchableOpacity>
              }
              <TourButtonMedium
                buttonTitle = {
                  this.state.showCoin
                    ? 'Take em!'
                    : 'Open the chest!'
                }
                buttonFunc = {
                  this.state.showCoin
                    ? getCoins
                    : animateCoins
                }
              />
            </View>
          </Overlay>
        }

        <View style={style.itemContainerBlueBorder}>
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

export default connect(mapStateToProps, { obtainCoins })(FinishedScreen);
