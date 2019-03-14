import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

import CardCollection from '../components/CardCollection.js';
import PlayerCardProfile from '../components/PlayerCardProfile.js';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';

import { Feather } from '@expo/vector-icons';

class UserProfileScreen extends Component {

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
      backgroundColor: Colors.appBlackColor,
      height: 60,
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      textAlign: 'center',
      width: '80%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    },
    headerRight: (
      <View>
        {navigation.getParam('isFriend') === false ?
          <TouchableOpacity>
            <Feather
              name="user-plus"
              size={30}
              color='white'
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
          :
            <Feather
              name="user"
              size={30}
              color='white'
              style={{ marginRight: 20 }}
            />
          }
      </View>
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

    let cardList = this.props.users.filter(user => user.friend === true);

    return cardList.map((user) => {
      return (
        <CardCollection
          key={user.id}
          name={user.name}
          card={user.card}
          navigation={this.props.navigation}
        />
      )
    });

  };

  render() {

    const userCard = this.props.navigation.getParam('userCard');

    return (

      <View style={{ height: '100%' }}>
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
                card={userCard}
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

        ) : null
        }
      </View>
    )
  };
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(UserProfileScreen);
