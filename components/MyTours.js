import React from 'react';
import {
  View,
  Text
} from 'react-native';

import style from '../assets/Style.js';
import {Tour} from './Tour.js';

export class MyTours extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.headerText}> Mina Turneringar </Text>

        <Tour />
        <Tour />
        <Tour />
      </View>
  )}
}

// {data.map(item =>
//    <Tour
//      key={item.title}
//      title={item.title}
//      players={item.players}
//    />
//  )
// }
