import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import CardCollection from '../components/CardCollection.js';
import PlayerCardProfile from '../components/PlayerCardProfile.js';

import style from '../assets/Style.js';
import { Ionicons } from '@expo/vector-icons';


class PlayerProfileScreen extends Component {

  state = {
    toggleProfile: true,
    toggleCards: false
  };

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
      fontSize: 34
    },
    headerRight: (
      <TouchableOpacity>
        <Ionicons
        name="md-person-add"
        size={26}
        color='yellow'
        style={{marginRight: 20}}
         />
      </TouchableOpacity>
    )
  });

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

  mapCardCollection() {

    cardCollection = this.props.users.filter(function(item){
      return item.friend === true;
    }).map(function({name, level, friend}){
      return {name, level, friend};
    });

    return cardCollection.map((user) => {
      return (
        <CardCollection
        key={user.name}
        name={user.name}
        lvl={user.level}
        friend={user.friend}
        navigation={this.props.navigation}
      />
      )
    });

  };

  render() {
    
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
                    Card
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

            <View style={style.mainContainer}>
              <PlayerCardProfile
              navigation={this.props.navigation}
              />
            </View>
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
                    Card
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
            <View style={style.cardsContainer}>
            {this.mapCardCollection()}
            </View>
            </ScrollView>
          </View>

        ) : null}
      </View>
    )
  };
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(PlayerProfileScreen);
