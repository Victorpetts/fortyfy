import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: 'black',
      height: 90,
      borderBottomWidth: 4,
      borderColor: 'yellow'
    },
    headerTitleStyle: {
      color: 'yellow',
      fontSize: 34,
      fontFamily: 'sans-serif'
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{ paddingTop: 40 }}>
        <Text>Profile test</Text>
      </View>
    )
  }
}
