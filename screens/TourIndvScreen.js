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
            height="auto"
            isVisible={this.state.isVisible == true}
            onBackdropPress={() => this.setState({ isVisible: false })}
            overlayBackgroundColor={'black'}
            overlayStyle={{
              width: '90%',
              borderColor: 'yellow',
              borderWidth: 2
            }}
          >
            <View>
              <ScrollView
                contentContainerStyle={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
                style={{
                  padding: 5
                }}
              >
                <View style={{
                  flexDirection: 'column'
                }}>
                  <Text style={style.playerText}>
                    Text
                  </Text>
                  <Text style={style.playerText}>
                    Text
                  </Text>
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
