import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import CardCollection from '../components/CardCollection.js';
import MyCardProfile from '../components/MyCardProfile.js';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons'


class ProfileScreen extends Component {

  state = {
    toggleProfile: true,
    toggleCollection: false
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
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
      width: '100%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    },
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileSettings')}
      >
        <FontAwesome
          name="cog"
          size={26}
          color='white'
          style={{ marginRight: 20 }}
        />
      </TouchableOpacity>
    )
  });

  toggleProfile = () => {
    this.setState({
      toggleProfile: true,
      toggleCollection: false
    });
  };

  toggleCollection = () => {
    this.setState({
      toggleCollection: true,
      toggleProfile: false
    });
  };

  mapCardCollection() {

    let cardList = this.props.users.filter(user => user.friend === true);

    return cardList.map((user, index) => {
      return (
        <CardCollection
          key={user.id}
          id={user.id}
          card={user.card}
          navigation={this.props.navigation}
          index={index}
        />
      )
    });

  };

  render() {

    const myId = this.props.users.find(user => user.id === "11");
    const myCard = myId.card;
    const myAcc = this.props.users[10]
    const coins = myAcc.coins

    return (

      <View>
        {this.state.toggleProfile ? (
          <View>
            <View style={style.tabBackground}>
              <View style={style.enabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleProfile()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa mina kort'}
                >
                  <Text style={style.enabledTabText}>My Card</Text>
                </TouchableOpacity>
              </View>
              <View style={style.disabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleCollection()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min kortsamling'}
                >
                  <Text style={style.disabledTabText}>Card Collection</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={style.mainContainer}>
              <View style={style.coinContainer}>
              <Text style={style.tourInfoTitle}>{coins} Coins</Text>
                <Image
                  source={require('../assets/images/coin.png')}
                  style={{ height: 20, alignSelf: 'center' }}
                  resizeMode={'contain'}
                />
              </View>

              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 80
              }}>
                <MyCardProfile
                  card={require("../assets/images/playercards/fullsize/cardSirYonyfy.png")}
                  navigation={this.props.navigation}
                />
              </View>
            </ScrollView>
          </View>
        ) :  (
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
                  <Text style={style.disabledTabText}>My Card</Text>
                </TouchableOpacity>
              </View>
              <View
                style={style.enabledTab}
              >
                <TouchableOpacity
                  onPress={() => this.toggleCollection()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min kortsamling'}
                >
                  <Text style={style.enabledTabText}>Card Collection</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={style.mainContainer}>
              <View style={style.cardsContainer}>
                {this.mapCardCollection()}
              </View>
            </ScrollView>
          </View>
        )}
      </View>

    )
  };
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(ProfileScreen);
