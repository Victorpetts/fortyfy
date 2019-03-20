import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import CardCollection from '../components/CardCollection.js';
import MyCardProfile from '../components/MyCardProfile.js';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons'


class ProfileScreen extends Component {

  state = {
    toggleProfile: true,
    toggleCards: false,
    name: '',
    someStats: '',
    someMoreStats: '',
    loading: false
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

  // componentDidMount = async() => {
  //
  //   StatusBar.setHidden(false);
  //   this.setState({ loading: true });
  //
  //   const api_call = await fetch(`https://api.fortnitetracker.com/v1/profile/pc/Ninja`, {
  //     headers:{
  //       "TRN-Api-Key": '6d6c58f4-a58f-463c-a049-751ef918f9d1'
  //     }
  //   });
  //
  //   const data = await api_call.json();
  //   console.log(data);
  //
  //   if (data.epicUserHandle) {
  //     this.setState({
  //       name: data.epicUserHandle,
  //       someStats: data.lifeTimeStats[1].value,
  //       someMoreStats: data.lifeTimeStats[10].value,
  //       loading: false
  //     });
  //   }
  //
  // }

  render() {

    const myId = this.props.users.find(user => user.id === "11");
    const myCard = myId.card;

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
                  <Text style={style.enabledTabText}>My Card</Text>
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
                  <Text style={style.disabledTabText}>Card Collection</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.mainContainer}>

              <View style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <MyCardProfile
                  card={myCard}
                  navigation={this.props.navigation}
                />
              </View>
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
                  <Text style={style.disabledTabText}>My Card</Text>
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
        )
        : null}
      </View>

    )
  };
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(ProfileScreen);
