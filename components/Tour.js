import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { Icon } from 'expo';

import style from '../assets/Style.js';

export class Tour extends React.Component {
  render() {
    return (
      <View style={style.itemContainer}>
        <Text style={style.itemText}>Turnerningsnamn</Text>
        <Text style={style.itemText}>
          <Icon.Ionicons
            name="md-people"
            size={22}
            color="black"
          />
          11
        </Text>

      </View>
  )}
}
