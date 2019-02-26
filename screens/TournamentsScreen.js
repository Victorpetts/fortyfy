import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';

import { TourButton } from '../components/TourButton.js';
import MyTours from '../components/MyTours';
import style from '../assets/Style.js';

export default class TournamentsScreen extends React.Component {

  state = {
    isVisible: false,
    bellPressed: false
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Tournaments',
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
      <View>
          <TouchableOpacity
            onPress={navigation.getParam('toggleOverlay')}
          >
          {navigation.getParam('bellPressed') === false ? 
            <MaterialCommunityIcons
              name={'bell-outline'}
              size={26}
              color='yellow'
              style={{ marginRight: 20 }}
            />
            :
            <MaterialCommunityIcons
            name={'bell'}
            size={26}
            color='yellow'
            style={{ marginRight: 20 }}
          />
          }
          </TouchableOpacity>
      </View>
    )
  });

  componentDidMount() {
    this.props.navigation.setParams({ toggleOverlay: this.toggleOverlay });
    this.props.navigation.setParams({ bellPressed: this.state.bellPressed });

  }

  toggleOverlay = async () => {
    await this.setState({
      isVisible: true
    })
    await this.setState({
      bellPressed: true
    })
    }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={style.mainContainer}>
        <View>
          <MyTours
            navigation={this.props.navigation}
          />
          <View style={style.buttonContainer}>
            <TourButton
              buttonTitle={'CREATE TOURNAMENT'}
              buttonFunc={() => navigate('TourCreate')}
            />
            <TourButton
              buttonTitle={'SEARCH TOURNAMENT'}
            />
          </View>
          {this.state.isVisible &&
            <Overlay
              height='auto'
              isVisible={this.state.isVisible == true}
              onBackdropPress={() => this.setState({
                isVisible: false
              })}
              overlayBackgroundColor={'black'}
              overlayStyle={{
                borderColor: 'yellow',
                borderWidth: 2,
                height: '90%',
                justifyContent: 'center'
              }}
            >
              <Text style={style.italicText}>No new pending tournament invitations...</Text>
            </Overlay>
          }
        </View>
      </ScrollView>
    )
  }
}
