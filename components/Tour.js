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
        <Text style={style.itemText}>{this.props.name}</Text>
        <Text style={style.itemNumber}>
        {this.props.players}
        </Text>
        <View style={style.iconClass}>
          <Icon.Ionicons
            name="md-people"
            size={22}
            color="black"
          />
        </View>

      </View>
  )}
}
