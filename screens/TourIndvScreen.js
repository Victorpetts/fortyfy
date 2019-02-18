import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import style from '../assets/Style.js';
import { Overlay } from 'react-native-elements';
import { TourButton } from '../components/TourButton.js';
import FinishedTour from '../components/FinishedTour.js';
import OngoingTour from '../components/OngoingTour.js';
import ManageTour from '../components/ManageTour.js';


class TourIndvScreen extends Component {

  state = {
    ongoing: false,
    isVisible: false
  }

  static navigationOptions = {
    header: null,
    headerLeft: null,
  };

  toggleManage = () => {
    this.setState({
      isVisible: true
    })
  };

  render() {

    const tourName = this.props.navigation.getParam('tourName');
    const numbPlayers = this.props.navigation.getParam('numbPlayers');
    const tourStatus = this.props.navigation.getParam('tourStatus');


    return (
      <ScrollView style={style.mainContainer}>

        {!tourStatus
          ? <View>
            <OngoingTour tourName={tourName} />
            <View style={style.buttonContainer}>
              <TourButton
                buttonTitle={'MANAGE TOURNAMENT'}
                buttonFunc={this.toggleManage} />
              <TourButton buttonTitle={'INVITE FRIENDS'} />
            </View>
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
                      buttonTitle={'REMOVE PLAYER'} />
                      <TourButton
                      buttonTitle={'PERMISSIONS'} />
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
  return { tours: state.tours };
};

export default connect(mapStateToProps, null)(TourIndvScreen);
