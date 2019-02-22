import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
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
    const tourArray = this.props.partic
    tourArray.sort((a, b) => a.points - b.points);

    const reverseArray = tourArray.reverse()
    const thisToursName = this.props.navigation.getParam('tourName');
    const filter = this.props.tours.find( thisTour => thisTour.name === thisToursName );

    let winconText;

    switch(filter.wincon) {
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
        winconText = 'Survived most minutes';
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
            <Text style={style.yellowHeaderText}>{reverseArray[0].points}</Text>
            <FontAwesome name="file-photo-o" size={75} color="white" />
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
              <Text style={style.yellowHeaderText}>{reverseArray[1].points}</Text>
              <FontAwesome name="file-photo-o" size={75} color="white" />
            </View>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text style={style.yellowHeaderText}>{reverseArray[2].points}</Text>
              <FontAwesome name="file-photo-o" size={75} color="white" />
            </View>
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
              <Text style={style.yellowHeaderText}>{reverseArray[3].points}</Text>
              <FontAwesome name="file-photo-o" size={75} color="white" />
            </View>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text style={style.yellowHeaderText}>{reverseArray[4].points}</Text>
              <FontAwesome name="file-photo-o" size={75} color="white" />
            </View>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text style={style.yellowHeaderText}>{reverseArray[5].points}</Text>
              <FontAwesome name="file-photo-o" size={75} color="white" />
            </View>
          </View>
        </ScrollView>
      </View>
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
