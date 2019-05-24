import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar, Overlay } from 'react-native-elements';
import { getData } from '../actions';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import {
  RoundButton,
  RoundButtonSmall,
  TourButtonMedium,
  TourButtonMediumRed
} from '../components/Buttons.js';
import Tour from '../components/Tour.js';
import SponsoredTour from '../components/SponsoredTour.js';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';


class TournamentsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tournaments',
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
      width: '90%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    }
  });

  state = {
    toggleOngoing: true,
    toggleFinished: false
  }

  componentDidMount = () => {
    fetch('http://192.168.10.180:5000/users')
    .then(response => response.json())
    .then(json => this.props.getData(json))
    .then(json => console.log("got users data", json))
  }

  toggleOngoing = () => {
    this.setState({
      toggleOngoing: true,
      toggleFinished: false
    });
  };

  toggleFinished = () => {
    this.setState({
      toggleOngoing: false,
      toggleFinished: true
    });
  };

  mapSponsoredTours() {

    let allTours = this.props.tours;
    let sponsoredTours = allTours.filter(tour => !tour.finished && tour.sponsor && !tour.joined);

    return sponsoredTours.map((tour) => {
      return (
        <SponsoredTour
          key={tour.id}
          id={tour.id}
          navigation={this.props.navigation}
        />
      )
    })
  }

  mapJoinedTours() {

    let allTours = this.props.tours;
    let sponsoredTours = allTours.filter(tour => !tour.finished && tour.sponsor && tour.joined);

    return sponsoredTours.map((tour) => {
      return (
        <SponsoredTour
          key={tour.id}
          id={tour.id}
          navigation={this.props.navigation}
        />
      )
    })
  }

  mapFinishedTours = () => {

    let allTours = this.props.tours;
    let finishedTours = allTours.filter(tour => tour.finished);

    return finishedTours.map((tour) => {
      return (
        <Tour
          key={tour.id}
          id={tour.id}
          navigation={this.props.navigation}
        />
      )
    })
  }

  render() {

    const {toggleOngoing} = this.state
    const { navigate } = this.props.navigation;
    const myAcc = this.props.users[10]
    const coins = myAcc.coins

    return (
      <View>

        {toggleOngoing ? (
        // Renders ongoing tab as active and displays its content

          <View style={{ height: '100%' }}>

            <View style={style.tabBackground}>
              <View style={style.enabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleOngoing()}
                  accessible={true}
                  accessibilityLabel={'Button - Show ongoing tournaments'}
                >
                  <Text style={style.enabledTabText}>Ongoing</Text>
                </TouchableOpacity>
              </View>
              <View style={style.disabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleFinished()}
                  accessible={true}
                  accessibilityLabel={'Button - Show finished tournaments'}
                >
                  <Text style={style.disabledTabText}>Finished</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.roundButtonAbsolute}>
              <RoundButton
                buttonImg={require('../assets/images/menuicons/plus.png')}
                buttonFunc={() => this.props.navigation.navigate('TourCreate')}
                />
            </View>

            <ScrollView
              style={{ backgroundColor: Colors.appBackgroundColor }}
              automaticallyAdjustContentInsets={false}
            >
              <View style={style.coinContainer}>
                <Text style={style.tourInfoTitle}>{coins} Coins</Text>
                <Image
                  source={require('../assets/images/coin.png')}
                  style={{ height: 20, alignSelf: 'center' }}
                  resizeMode={'contain'}
                />
              </View>

              {this.mapSponsoredTours()}
              <View style={style.goldDivider} />
              {this.mapJoinedTours()}

            </ScrollView>

          </View>

        ) : (
        // Renders finished tab as active and displays its content

          <View style={{ height: '100%' }}>

            <View style={style.tabBackground}>
              <View style={style.disabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleOngoing()}
                  accessible={true}
                  accessibilityLabel={'Button - Show ongoing tournaments'}
                >
                  <Text style={style.disabledTabText}>Ongoing</Text>
                </TouchableOpacity>
              </View>
              <View style={style.enabledTab}>
                <TouchableOpacity
                  onPress={() => this.toggleFinished()}
                  accessible={true}
                  accessibilityLabel={'Button - Show finished tournaments'}
                >
                  <Text style={style.enabledTabText}>Finished</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView
              style={style.mainContainer}
              automaticallyAdjustContentInsets={false}
            >
              <View style={style.coinContainer}>
              <Text style={style.tourInfoTitle}>{coins} Coins</Text>
                <Image
                  source={require('../assets/images/coin.png')}
                  style={{ height: 20, alignSelf: 'center' }}
                  resizeMode={'contain'}
                />
              </View>

              {this.mapFinishedTours()}
            </ScrollView>

          </View>
        )}

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    users: state.users
  };
};

export default connect(mapStateToProps, { getData })(TournamentsScreen);
