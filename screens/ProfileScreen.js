import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';


export default class ProfileScreen extends React.Component {

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

  render() {
    return (
      <View>

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
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '5%'
              }}>
                <FontAwesome style={{ fontSize: 200, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <Text style={style.yellowHeaderText}>Profile test</Text>
              </View>
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
              <View style={{
                maxWidth: '100%',
                paddingTop: '10%',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
                <FontAwesome style={{ fontSize: 125, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <FontAwesome style={{ fontSize: 125, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <FontAwesome style={{ fontSize: 125, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <FontAwesome style={{ fontSize: 125, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <FontAwesome style={{ fontSize: 125, color: 'white' }}>{Icons.fileImage}</FontAwesome>
              </View>
            </ScrollView>
          </View>
        ) : null}
      </View>
    )
  }
}
