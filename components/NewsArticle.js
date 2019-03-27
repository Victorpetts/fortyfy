import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

import style from '../assets/Style.js';

export class NewsArticle extends React.Component {
  render() {
    return (
      <View style={style.articleContainer}>
        <Image
          source={{ uri: this.props.img }}
          style={{
            height: 275,
            width: 300,
            alignSelf: 'center'
          }}
          resizeMode='cover'
        />
        <View style={{
          paddingTop: 20,
          paddingHorizontal: 5
        }}>
          <Text style={style.articleTitle}>{this.props.title}</Text>
          <Text style={style.articleDate}>{this.props.date}</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(this.props.link)}
            style={{
              paddingVertical: 5,
              alignSelf: 'flex-end'
            }}
          >
            <Text style={style.articleLink}>Read article</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
