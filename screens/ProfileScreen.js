import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';


class ProfileScreen extends Component {

  state = {
    toggleProfile: true,
    toggleCards: false
  }

  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: 'black',
      height: 90
    },
    headerTitleStyle: {
      color: 'yellow',
      fontSize: 34,
      fontFamily: 'sans-serif'
    },
    headerRight: (
      <TouchableOpacity>
        <FontAwesome style={{
          fontSize: 26,
          color: 'yellow',
          marginRight: 20
        }}>
          {Icons.cog}
        </FontAwesome>
      </TouchableOpacity>
    )
  };

  toggleProfile = () => {
    this.setState({
      toggleProfile: true,
      toggleCards: false
    });
  };

  toggleCards = () => {
    this.setState({
      toggleCards: true,
      toggleProfile: false
    });
  };

  render() {

    const cardsWon = this.props.users

    return (
      <View style={{
        height: '100%'
      }}>

        {this.state.toggleProfile ? (
          <View>
            <View
              style={style.tabBackground}
            >
              <View
                style={style.enabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleProfile()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa mina kort'}
                >
                  <Text
                    style={style.enabledTabText}
                  >
                    My Card
                    </Text>
                </TouchableOpacity>
              </View>
              <View
                style={style.disabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleCards()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min kortsamling'}
                >
                  <Text
                    style={style.disabledTabText}
                  >
                    Card Collection
                      </Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={style.mainContainer}>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '5%'
              }}>
                <FontAwesome style={{ fontSize: 300, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.yellowHeaderText}>Miranda's card</Text>
              </View>
            </ScrollView>
          </View>
        ) : this.state.toggleCards ? (
          <View>
            <View
              style={style.tabBackground}
            >
              <View
                style={style.disabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleProfile()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa mina kort'}
                >
                  <Text
                    style={style.disabledTabText}
                  >
                    My Card
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={style.enabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleCards()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min kortsamling'}
                >
                  <Text
                    style={style.enabledTabText}
                  >
                    Card Collection
                    </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={style.mainContainer}>
              <View style={{
                maxWidth: '90%',
                justifyContent: 'space-evenly',
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: '100%',
                display: 'flex',
                flex: 1
              }}>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[0].name}</Text>
              </View>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[1].name}</Text>
              </View>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[2].name}</Text>
              </View>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[3].name}</Text>
              </View>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[4].name}</Text>
              </View>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[5].name}</Text>
              </View>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[6].name}</Text>
              </View>
              <View style={style.cardContainer}>
                <FontAwesome style={{ fontSize: 85, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.smallText}>{cardsWon[7].name}</Text>
              </View>
              </View>
            </ScrollView>
          </View>

        ) : null}
        <View style={{
          height: '100%',
          paddingTop: '30%'
        }} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(ProfileScreen);
