import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { selectPlayer, confirmPlayer } from '../actions/index.js';

import style from '../assets/Style.js';
import { Overlay } from 'react-native-elements';
import { TourButton } from '../components/TourButton.js';
import FinishedTour from '../components/FinishedTour.js';
import OngoingTour from '../components/OngoingTour.js';


class TourIndvScreen extends Component {
  state = {
    ongoing: false,
    isVisible: false,
    buttonToggle: false
  }

  static navigationOptions = ({ tourName }) => ({
    title: this.props.tourName,
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
      width: '90%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    }
  });

  toggleManage = () => {
    this.setState({
      isVisible: true
    })
  };

  selectPlayer = (partic) => {
    this.props.selectPlayer(partic);
    this.setState({
      isVisible: false,
      buttonToggle: true
    })
  };

  confirmPlayer = (partic) => {
    this.props.confirmPlayer(partic);
    this.setState({
      buttonToggle: false
    })
  }

  render() {
    const tourName = this.props.navigation.getParam('tourName');
    const numbPlayers = this.props.navigation.getParam('numbPlayers');
    const tourStatus = this.props.navigation.getParam('tourStatus');
    let partic = this.props.partic;
 
    return (
      <ScrollView style={style.mainContainer}>

        {!tourStatus
          ? <View>
            <OngoingTour tourName={tourName} />
            {this.state.buttonToggle === true ?
              <View style={style.buttonContainer}>
                <TourButton
                  buttonTitle={'GO BACK'} />
                <TourButton buttonTitle={'CONFIRM'}
                buttonFunc={() => this.confirmPlayer(partic)}
                />
              </View>
              :
              <View style={style.buttonContainer}>
                <TourButton
                  buttonTitle={'Manage tournament'}
                  buttonFunc={this.toggleManage} />
                <TourButton buttonTitle={'Invite friends'} />
              </View>
            }
          </View>
          : <FinishedTour tourName={tourName} />
        }
        {this.state.isVisible && (
          <Overlay
            height='auto'
            isVisible={this.state.isVisible == true}
            onBackdropPress={() => this.setState({ isVisible: false })}
            overlayBackgroundColor={'black'}
            overlayStyle={{
              borderColor: 'yellow',
              borderWidth: 2
            }}
          >
            <View>
              <ScrollView
                contentContainerStyle={{
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                style={{
                  padding: 5
                }}
              >
                <View style={style.buttonContainerCol}>
                  <TourButton
                    buttonTitle={'END TOURNAMENT'} />
                  <TourButton
                    buttonTitle={'DELETE PLAYER'}
                  />
                  <TourButton
                    buttonTitle={'PERMISSIONS'}
                    buttonFunc={() => this.selectPlayer(partic)}
                  />
                </View>
              </ScrollView>
            </View>
          </Overlay>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    partic: state.partic
  };
};

export default connect(mapStateToProps, { selectPlayer, confirmPlayer })(TourIndvScreen);
