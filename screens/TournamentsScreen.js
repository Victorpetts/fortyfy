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

export default class TournamentsScreen extends React.Component {
  static navigationOptions = {
    title: 'Newsz',
    header: null
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{ paddingTop: 40 }}>
        <Text>Tournaments test</Text>
      </View>
    )
  }
}
