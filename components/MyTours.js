import React from 'react';
import {
  View,
  Text
} from 'react-native';

import style from '../assets/Style.js';
import { Tour } from './Tour.js';
import { ScrollView } from 'react-native-gesture-handler';

export class MyTours extends React.Component {

  render() {
    return (
      <View style={style.container}>
        <Text style={style.headerText}> Mina Turneringar </Text>
        <ScrollView style={{ height: '100%' }}>
          {this.props.tours.map(item =>
          <Tour
            key={item.name}
            name={item.name}
            players={item.players}
          />
          )}

        </ScrollView>
      </View>
    )
  }
}