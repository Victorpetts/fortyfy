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
import { LeaderBoardPartic } from '../components/Participant';


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

  render() {
    const tourArray = this.props.partic
    tourArray.sort((a, b) => a.points - b.points);

    const numberOfPartic = this.props.partic.length;
    const thisToursName = this.props.navigation.getParam('tourName');
    const thisToursMatches = this.props.navigation.getParam('totalMatches');
    const thisMaxPartic = this.props.navigation.getParam('numbPlayers');
    const reverseArray = tourArray.reverse()
    const filter = this.props.tours.find(thisTour => thisTour.name === thisToursName);
    let owner = this.props.navigation.getParam('owner')

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
        winconText = 'Survived longest';
        break
    }


    return (
      <ScrollView style={style.mainContainer}>
        <View style={style.itemContainerNoBorder}>
          <TourInfoSection
            titleName={thisToursName}
            titleMatches={thisToursMatches}
            tourInfoWincon={winconText}
            tourInfoPartic={numberOfPartic}
            tourInfoMaxPartic={thisMaxPartic}
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

        <LeaderBoardPartic
        name={'Karolina Nordström'}
        points={'79'}
        placement={'4'}
        />
        <LeaderBoardPartic
        name={'Victor Pettersson'}
        points={'68'}
        placement={'5'}
        />

      </ScrollView>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    partic: state.partic,
    tours: state.tours
  };
};

export default connect(mapStateToProps, null)(FinishedScreen);
