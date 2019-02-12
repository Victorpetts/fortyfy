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
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                borderWidth: 0,
                backgroundColor: 'black'
              }}
            >
              <View
                style={{
                  width: "50%",
                  borderBottomWidth: 4,
                  borderColor: 'yellow'
                }}
              >
                <TouchableOpacity
                  onPress={() => this.toggleProfile()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min profil'}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "900",
                      padding: 10,
                      fontSize: 20,
                      fontStyle: "normal",
                      letterSpacing: 0.31,
                      textAlign: "center"
                    }}
                  >
                    My Card
                    </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "50%",
                  borderBottomWidth: 4,
                  borderColor: 'transparent'
                }}
              >
                <TouchableOpacity
                  onPress={() => this.toggleCards()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min arbetsplats'}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "900",
                      padding: 10,
                      fontSize: 20,
                      opacity: 0.6,
                      fontStyle: "normal",
                      letterSpacing: 0.31,
                      textAlign: "center"
                    }}
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
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                borderWidth: 0,
                backgroundColor: 'black'
              }}
            >
              <View
                style={{
                  width: "50%",
                  borderBottomWidth: 4,
                  borderColor: "transparent"
                }}
              >
                <TouchableOpacity
                  onPress={() => this.toggleProfile()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min profil'}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "900",
                      padding: 10,
                      fontSize: 20,
                      opacity: 0.6,
                      fontStyle: "normal",
                      letterSpacing: 0.31,
                      textAlign: "center"
                    }}
                  >
                    My Card
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "50%",
                  borderBottomWidth: 4,
                  borderColor: 'yellow'
                }}
              >
                <TouchableOpacity
                  onPress={() => this.toggleCards()}
                  accessible={true}
                  accessibilityLabel={'Knapp - Visa min arbetsplats'}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "900",
                      padding: 10,
                      fontSize: 20,
                      fontStyle: "normal",
                      letterSpacing: 0.31,
                      textAlign: "center"
                    }}
                  >
                    Card Collection
                    </Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={style.mainContainer}>

              <Text style={style.yellowHeaderText}>Andras kort</Text>

              <View style={{
                paddingTop: '5%',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row'
              }}>
                <FontAwesome style={{ fontSize: 100, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <FontAwesome style={{ fontSize: 100, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                <FontAwesome style={{ fontSize: 100, color: 'white' }}>{Icons.fileImage}</FontAwesome>
              </View>
            </ScrollView>
          </View>
        ) : null}
      </View>
    )
  }
}
