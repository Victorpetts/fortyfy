import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import {MyTours} from '../components/MyTours.js';
import style from '../assets/Style.js';

export default class TournamentsScreen extends React.Component {
  static navigationOptions = {
    title: 'Tournaments',
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

  func() {

  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={{
        width: '100%',
        height: '100%',
        display: 'flex'
      }}>
        <View style={{
            paddingBottom: 10,
            alignItems: 'center'
         }}>

         <MyTours />

         <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%'
         }}>
         <TouchableOpacity
           onPress={this.func}
           accessibilityLabel="Learn more about this purple button"
           style={style.buttonClass}
         >
           <Text style={style.buttonText}>SKAPA TURNERING</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={this.func}
           accessibilityLabel="Learn more about this purple button"
           style={style.buttonClass}
         >
           <Text style={style.buttonText}>HITTA TURNERING</Text>
         </TouchableOpacity>
         </View>

       </View>
     </ScrollView>
    )
  }
}
