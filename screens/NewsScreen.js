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

import {NewsArticle} from '../components/NewsArticle';
import output from '../output.json';

let data = output;

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
    headerStyle: {
      backgroundColor: 'black',
      height: 90
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
      <ScrollView style={{
        width: '100%',
        height: '100%',
        display: 'flex'
      }}>
      <View style={{
          paddingBottom: 10,
          alignItems: 'center'
       }}>

       {data.slice(0, 10).map(item =>
          <NewsArticle
            key={item.title}
            title={item.title}
            date={item.date}
          />
        )
      }

      </View>
      </ScrollView>
    )
  }
}

// <NewsArticle title={data.titles[2].value} />
