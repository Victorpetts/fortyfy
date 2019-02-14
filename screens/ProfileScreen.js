import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import CardCollection from '../components/CardCollection.js';
import MyCard from '../components/MyCard.js';

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
    })

  }

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
              <MyCard />
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
            <View  style={style.cardsContainer}>
            {this.mapCardCollection()}
            </View>
            </ScrollView>
          </View>

        ) : null}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(ProfileScreen);
